"use client";

import Image from "next/image";

const HomeThemePackage = () => {
  // 레이아웃을 위한 임시 상수 선언입니다. 레이아웃 이후 구체화 작업하면서 삭제 예정입니다.
  const packageList = [
    "베스트",
    "골프/스포츠",
    "허니문",
    "자연경관",
    "문화/역사",
    "체험/액티비티",
  ];
  return (
    <div className="w-[90%] grid grid-cols-3 grid-rows-2 gap-6">
      {packageList.map((singlePackage) => (
        <div className="w-full" key={singlePackage}>
          <Image
            src="/assets/mainLogo.svg"
            alt="테스트이미지"
            width={93}
            height={93}
            style={{ width: "93px", height: "93px" }}
          />
          <p className="w-[93px] pt-2 text-center">{singlePackage}</p>
        </div>
      ))}
    </div>
  );
};

export default HomeThemePackage;
