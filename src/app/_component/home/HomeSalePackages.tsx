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
  const [packages, setPackages] = useState<PackageInfo[]>([]);
  const [activeNation, setActiveNation] = useState("전체");
  const [activeContinent, setActiveContinent] = useState<string>("");
  const [nationList, setNationList] = useState(["전체"]);
  const [continentList, setContinentList] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const { data } = usePackageListQuery(page, activeNation, activeContinent);

  useEffect(() => {
    const fetchData = async () => {
      const destinations = await getDestinations();

      const nation = destinations.data.nations.map(
        (singleNation: Props) => singleNation.name,
      );
      const continent = destinations.data.continents.map(
        (singleContinent: Props) => singleContinent.name,
      );

      setNationList([...nationList, ...nation, ...continent]);
      setContinentList(continent);
    };
    fetchData();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setPackages(data?.data);
  }, [data?.data]);

  useEffect(() => {
    setPage(1);
  }, [activeContinent, activeNation]);

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const handleActiveNation = (nation: string) => {
    if (continentList.includes(nation)) {
      setActiveContinent(nation);
      setActiveNation("");
    } else {
      setActiveContinent("");
      setActiveNation(nation);
    }
  };

  const handlePackageClick = (packageId: number) => {
    router.push(`/items/${packageId}`);
  };

  return (
    <div className="w-full">
      <div className="flex text-grey-4 overflow-x-auto">
        {nationList.map((nation) => (
          <div
            className={`px-2 py-1 text-[11px] whitespace-nowrap ${
              activeNation === nation ? "text-pink" : "text-grey-a"
            } cursor-pointer `}
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
