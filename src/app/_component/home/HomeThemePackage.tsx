"use client";

import getThemePackages from "@/api/home/getThemePackages";
import { useEffect, useState } from "react";
// 베스트 테마 패키지
import { BEST_THEME } from "@/app/constants";
import { useParams, useRouter } from "next/navigation";
import getBestPackages from "@/api/home/getBestPackages";

interface Props {
  themeId: number;
  name: string;
  imageUrl: string;
}

const HomeThemePackage = () => {
  const { id } = useParams();
  const router = useRouter();
  //  /v1/themes 테마 패키지 목록 API에 베스트가 없기에 상수 하드코딩으로 추가
  const [themes, setThemes] = useState<Props[]>(BEST_THEME);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (Number(id) === 0) {
          console.log("best");
          const response = await getBestPackages(1, 10);
          setThemes([...themes, ...response.data]);
        } else {
          const response = await getThemePackages();
          setThemes([...themes, ...response.data]);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    // cleanup
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleThemeClick = (clickedId: number) => {
    router.push(`/theme/${clickedId}`); // 400_여행패키지컨셉 페이지로 연결
  };

  return (
    <div className="grid grid-cols-3 grid-rows-2 place-items-center gap-6">
      {themes.map((singleTheme) => (
        <div
          key={`theme-${singleTheme.name}`}
          onClick={() => handleThemeClick(singleTheme.themeId)}
        >
          <img
            src={singleTheme.imageUrl}
            alt="테스트이미지"
            className="w-[93px] h-[93px] rounded-lg object-cover"
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
