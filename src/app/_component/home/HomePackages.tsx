"use client";

import Image from "next/image";
import getPackages from "@/api/home/getPackages";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

interface PackageInfo {
  packageId: number;
  imageUrl: string;
  nationName: string;
  title: string;
  hashtags: string[];
  minPrice: number;
  lodgeDays: number; // 1박
  tripDays: number; // 2일
  isWish: boolean; // 비로그인시에는 항상 false
}

const HomePackages = () => {
  const [packages, setPackages] = useState<PackageInfo[]>([]);
  const { data } = useQuery({
    queryKey: ["packages"],
    queryFn: getPackages,
  });

  useEffect(() => {
    setPackages(data?.data);
  }, [data?.data]);

  // 레이아웃 표시용 상수입니다. 디자인 및 기능 구체화하면서 제거 예정입니다!
  const nations = [
    "전체",
    "일본",
    "동남아",
    "유럽",
    "오세아니아",
    "북미",
    "중동",
    "중남미",
  ];

  return (
    <div className="w-[90%]">
      <p className="font-bold text-left">지금 핫한 초특가 상품</p>
      <div className="flex text-grey-4 gap-2 ">
        {nations.map((nation) => (
          <p
            className="first:text-pink px-1 py-2 text-xs whitespace-nowrap"
            key={nation}
          >
            {nation}
          </p>
        ))}
      </div>
      {packages?.map((singlePackage) => (
        <div className="flex gap-4 pt-4" key={singlePackage.packageId}>
          <Image
            src={singlePackage.imageUrl}
            alt="패키지 이미지"
            width={100}
            height={104}
            style={{ width: "100px", height: "104px" }}
            className="rounded-lg"
          />
          <div className="flex flex-col pt-4 gap-3">
            <div className="font-bold">{singlePackage.title}</div>
            <div className="flex gap-2">
              {singlePackage.hashtags.map((hashtag) => (
                <div
                  className="border border-solid border-black rounded-md px-2 text-xs whitespace-nowrap"
                  key={hashtag}
                >
                  {hashtag}
                </div>
              ))}
            </div>
            <div className="flex gap-1 text-red">
              <div>{`${singlePackage.lodgeDays}박 ${singlePackage.tripDays}일`}</div>
              <div className="font-bold">{`${singlePackage.minPrice}원`}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePackages;
