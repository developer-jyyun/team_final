"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { NATION_LISTS } from "@/app/constants";
import usePackageListQuery from "@/hooks/query/usePackageListQuery";
import type { PackageInfo } from "@/app/types";

const HomePackages = () => {
  const [packages, setPackages] = useState<PackageInfo[]>([]);
  const [activeNation, setActiveNation] = useState("전체");
  const { data, isLoading, isError, error } = usePackageListQuery(5);

  useEffect(() => {
    setPackages(data?.data);
  }, [data?.data]);

  const handleActiveNation = (nation: string) => {
    setActiveNation(nation);
  };

  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>⚠ {error.message}⚠</div>;

  return (
    <div className="w-full">
      <div className="flex text-grey-4">
        {NATION_LISTS.map((nation) => (
          <div
            className={`px-2 py-1 text-[11px] whitespace-nowrap ${
              activeNation === nation ? "text-pink" : "text-grey-a"
            }`}
            key={nation}
            onClick={() => handleActiveNation(nation)}
          >
            {nation}
          </div>
        ))}
      </div>
      {packages?.map((singlePackage) => (
        <div className="flex gap-[18px] pt-4" key={singlePackage.packageId}>
          <Image
            src={singlePackage.imageUrl}
            alt="패키지 이미지"
            width={90}
            height={90}
            className="rounded-lg"
          />
          <div className="h-[90px] flex flex-col pt-1 gap-1.5">
            <div className="text-black-2 text-lg font-medium">
              {singlePackage.title}
            </div>
            <div className="flex gap-1">
              {singlePackage.hashtags.map((hashtag) => (
                <div
                  className="border-[0.6px] border-solid border-black-6 text-black-4 rounded-[39px] px-2 py-1 text-[11px] whitespace-nowrap"
                  key={hashtag}
                >
                  {hashtag}
                </div>
              ))}
            </div>
            <div className="flex items-center pt-0.5 gap-1 text-red-1">
              <div className="text-xxs">{`${singlePackage.lodgeDays}박 ${singlePackage.tripDays}일`}</div>
              <div className="text-sm font-medium">{`${singlePackage.minPrice}원`}</div>
            </div>
          </div>
        </div>
      ))}
      {/* TODO: 더보기 버튼 추가 / 관련 동작 추가 */}
    </div>
  );
};

export default HomePackages;
