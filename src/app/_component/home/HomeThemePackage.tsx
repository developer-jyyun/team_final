"use client";

import Image from "next/image";
import getThemePackages from "@/api/home/getThemePackages";
import { useEffect, useState } from "react";

interface Props {
  themeId: number;
  name: string;
  imageUrl: string;
}

const HomeThemePackage = () => {
  const [themes, setThemes] = useState<Props[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getThemePackages();
        setThemes(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    // cleanup
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="grid grid-cols-3 grid-rows-2 place-items-center gap-6">
      {themes.map((singleTheme) => (
        <div key={`theme-${singleTheme.name}`}>
          <div className="w-[93px] h-[93px] relative">
            <Image src={singleTheme.imageUrl} alt="테스트이미지" fill />
          </div>
          <p className="pt-2.5 text-center">{singleTheme.name}</p>
        </div>
      ))}
    </div>
  );
};

export default HomeThemePackage;
