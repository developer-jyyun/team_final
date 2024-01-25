"use client";

import useThemeQuery from "@/hooks/query/useThemeQuery";
import { ThemeItem, ThemePackage } from "@/app/types";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ThemeDetail = () => {
  const params = useParams();
  const router = useRouter();
  const [themeData, setThemeData] = useState<ThemeItem[]>();
  // /v1/themes/{themeId} 테마 패키지 조회 API 호출
  const { data } = useThemeQuery(params.id, "departure_date", 1, 10);

  useEffect(() => {
    if (data) {
      setThemeData(data);
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div className="w-full">
      {themeData?.map((theme) => (
        <div key={`themePackage-${theme.themeId}`}>
          <div>
            {/* 테마 대표 이미지 */}
            <img
              src={theme.imageUrl}
              alt="theme"
              className="w-[375px] web:w-full h-[320px] object-cover"
            />
            {/* 테마 설명 텍스트 영역 */}
            <div className="flex flex-col pt-[32px] pb-[40px] gap-4 items-center">
              <p className="text-pink text-[24px] text-center font-bold">
                {theme.name}
              </p>
              <p className="text-black-4 text-sm w-[90%] break-keep text-center">
                {theme.description}
              </p>
            </div>
          </div>
          {/* 테마 내 패키지 나열 */}
          <div className="px-6 grid grid-cols-2 grid-rows-2 gap-[17px]">
            {theme.packages?.map((singlePackage: ThemePackage) => (
              <div key={`package-${singlePackage.packageId}`}>
                <div
                  className="w-full h-auto flex-col relative"
                  onClick={() =>
                    router.push(`/items/${singlePackage.packageId}`)
                  } // 클릭시 상세 페이지 연결
                >
                  <img
                    src={singlePackage.imageUrl}
                    alt="packageImg"
                    className="object-cover w-full h-[180px] web:w-full mb-2 rounded-lg"
                  />
                  <div className="flex flex-col gap-[14px]">
                    <p className="w-[148px] h-[30px] web:w-full text-black-6 text-xs font-normal overflow-hidden">
                      {singlePackage.title}
                    </p>
                    <p className="text-black text-base font-bold">
                      {`${theme.minPrice.toLocaleString()}원~`}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThemeDetail;
