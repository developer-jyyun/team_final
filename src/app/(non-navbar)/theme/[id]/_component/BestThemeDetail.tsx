"use client";

import useBestThemeQuery from "@/hooks/query/useBestThemeQuery";
import { PackageInfo } from "@/app/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const BestThemeDetail = () => {
  const router = useRouter();
  const [themeData, setThemeData] = useState<PackageInfo[]>();
  //  /v1/packages/top-purchases 가장 많이 구매한 패키지 목록 API 호출
  const { data } = useBestThemeQuery(1, 10);

  useEffect(() => {
    if (data) {
      setThemeData(data);
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div className="w-full">
      <div>
        {/* 테마 대표 이미지 */}
        <div className="w-[375px] web:w-full h-[320px] object-cover">
          <img
            src="/assets/bestTheme.png"
            alt="bestImg"
            className="w-full h-full"
          />
        </div>
        {/* 테마 설명 텍스트 영역 */}
        <div className="flex flex-col pt-[32px] pb-[40px] gap-4 items-center">
          <p className="text-pink text-[24px] text-center font-bold">
            {"베스트 여행 모음전"}
          </p>
          <p className="text-black-4 text-sm w-[90%] break-keep text-center">
            {"나에게 가장 잘맞는 여행 LET'S와 함께 주간 베스트 여행 모음전"}
          </p>
        </div>
      </div>
      {/* 베스트 테마 패키지 나열 */}
      <div className="px-6 grid grid-cols-2 grid-rows-2 gap-[17px]">
        {themeData?.map((singlePackage) => (
          <div key={singlePackage.packageId}>
            <div
              className="w-full h-auto flex-col relative"
              onClick={() => router.push(`/items/${singlePackage.packageId}`)} // 클릭시 상세 페이지 연결
            >
              <img
                src={singlePackage.imageUrl}
                alt="packageImg"
                className="w-[155px] h-[180px] web:w-full mb-2 rounded-lg"
              />
              <div className="flex flex-col gap-[14px]">
                <p className="w-[148px] h-[30px] web:w-full text-black-6 text-xs font-normal overflow-hidden">
                  {singlePackage.title}
                </p>
                <p className="text-black text-base font-bold">
                  {`${singlePackage.minPrice.toLocaleString()}원~`}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestThemeDetail;
