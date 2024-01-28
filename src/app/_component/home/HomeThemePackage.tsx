// HomeThemePackage

"use client";

import getThemePackages from "@/api/home/getThemePackages";
// 베스트 테마 패키지
import { BEST_THEME } from "@/app/constants";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const HomeThemePackage = () => {
  const router = useRouter();

  const { data } = useQuery({
    queryKey: ["themes"],
    queryFn: getThemePackages,
  });

  const themes = [...BEST_THEME, ...data.data];

  const handleThemeClick = (clickedId: number) => {
    router.push(`/theme/${clickedId}`); // 400_여행패키지컨셉 페이지로 연결
  };

  return (
    <div className="grid grid-cols-3 grid-rows-2 place-items-center gap-6">
      {themes.map((singleTheme) => (
        <div
          key={`theme-${singleTheme.name}`}
          className="cursor-pointer"
          onClick={() => handleThemeClick(singleTheme.themeId)}
        >
          <img
            src={singleTheme.imageUrl}
            alt="테스트이미지"
            className="w-[93px] h-[93px] web:w-[130px] web:h-[130px] rounded-lg object-cover"
          />
          <p className="pt-2.5 text-center whitespace-nowrap">
            {singleTheme.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default HomeThemePackage;
