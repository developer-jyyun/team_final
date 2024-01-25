"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import usePackageListQuery from "@/hooks/query/usePackageListQuery";
import type { PackageInfo } from "@/app/types";
import formatLongText from "@/utils/formatLongText";
import getDestinations from "@/api/search/getDestinations";

interface Props {
  name: string;
  imageUrl: string;
}

const HomeSalePackages = () => {
  const router = useRouter();
  const [prevPackages, setPrevPackages] = useState<PackageInfo[]>([]);
  const [packages, setPackages] = useState<PackageInfo[]>([]);
  const [activeNation, setActiveNation] = useState("전체");
  const [activeContinent, setActiveContinent] = useState<string>("");
  const [nationList, setNationList] = useState(["전체"]);
  const [continentList, setContinentList] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  // /v1/packages/top-views API 응답 데이터
  const { data } = usePackageListQuery(page, activeNation, activeContinent);

  // 첫 렌더링 -> 국가, 대륙명 저장
  useEffect(() => {
    const fetchData = async () => {
      const destinations = await getDestinations();

      const nation = destinations.data.nations.map(
        (singleNation: Props) => singleNation.name,
      );
      const continent = destinations.data.continents.map(
        (singleContinent: Props) => singleContinent.name,
      );

      // 화면에 보여줄 정보 nationList 세팅
      setNationList([...nationList, ...nation, ...continent]);
      setContinentList(continent);
    };

    fetchData();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (data?.data) {
      // 더보기 선택 이후 새롭게 API 응답 받아온 상황
      // 이전까지의 패키지 상품 리스트는 prevPackage에 저장되어 있음
      // setState를 통해 새로 불러온 패키지 상품 리스트를 이어붙임
      setPackages([...prevPackages, ...data.data]);
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.data]);

  // 더 보기 버튼 선택 -> 패키지 정보 prevPackages에 저장
  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
    setPrevPackages(packages);
  };

  // 다른 국가/대륙 선택 -> packages 배열 초기화
  const handleActiveNation = (nation: string) => {
    // 같은 국가/대륙 선택하는 경우 API 호출하지 않게 돌려보냄
    if (activeNation === nation) {
      return;
    }

    // 대륙을 선택한 경우 params로 대륙을, 국가를 선택한 경우 params로 국가를
    if (continentList.includes(nation)) {
      setActiveContinent(nation);
      setActiveNation("");
    } else {
      setActiveContinent("");
      setActiveNation(nation);
    }

    // 기존의 package 정보 / 페이지 수 정보 초기화
    setPrevPackages([]);
    setPackages([]);
    setPage(1);
  };

  // 패키지 상품 선택시 상세페이지 이동
  const handlePackageClick = (packageId: number) => {
    router.push(`/items/${packageId}`);
  };

  return (
    <div className="w-full">
      <div className="flex text-grey-4 touch-auto overflow-auto scrollbar-hide">
        {nationList.map((nation) => (
          <div
            className={`px-2 py-1 text-[11px] whitespace-nowrap ${
              activeNation === nation ? "text-pink" : "text-grey-a "
            } cursor-pointer`}
            key={nation}
            onClick={() => handleActiveNation(nation)}
          >
            {nation}
          </div>
        ))}
      </div>
      {packages?.map((singlePackage) => (
        <div
          className="flex gap-[18px] pt-4 cursor-pointer"
          key={`salePackage-${singlePackage.packageId}`}
          onClick={() => handlePackageClick(singlePackage.packageId)}
        >
          <Image
            src={singlePackage.imageUrl}
            alt="패키지 이미지"
            width={90}
            height={90}
            className="rounded-lg"
          />
          <div className="h-[90px] flex flex-col pt-1">
            <div className="text-black-2 text-[16px] font-medium">
              {formatLongText(singlePackage.title, 16)}
            </div>
            <div className="flex gap-1 pt-2">
              {singlePackage.hashtags.map((hashtag) => (
                <div
                  className="border-[0.6px] border-solid border-black-6 text-black-4 rounded-[4px] px-2 py-1 text-[11px] whitespace-nowrap"
                  key={hashtag}
                >
                  {hashtag}
                </div>
              ))}
            </div>
            <div className="flex items-center pt-2.5 gap-1 text-red-1">
              <div className="text-xxs">{`${singlePackage.lodgeDays}박 ${singlePackage.tripDays}일`}</div>
              <div className="text-sm font-medium">{`${singlePackage.minPrice}원`}</div>
            </div>
          </div>
        </div>
      ))}
      <div className="flex justify-center pt-7">
        <span
          className="text-black-4 text-center underline pt-7 cursor-pointer"
          onClick={() => handleLoadMore()}
        >
          더보기
        </span>
      </div>
    </div>
  );
};

export default HomeSalePackages;
