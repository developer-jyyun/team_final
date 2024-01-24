"use client";

import useAdvertisementInfoQuery from "@/hooks/query/useAdvertisementInfoQuery";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
  packageId: number;
  imageUrl: string;
  title: string;
  transportation: string;
  minPrice: number;
}

const AdvertisementDetail = () => {
  const params = useParams();
  const router = useRouter();
  const [, setAdsPackage] = useState([]);
  // 광고 슬라이드 선택으로 넘어온 id 값을 통해 어느 광고인지 확인 후 데이터 받아옴
  const { data } = useAdvertisementInfoQuery(params.id);

  // 각 광고(오사카, 대만, 유럽)에 대한 adId, name, packages 데이터 세팅
  useEffect(() => {
    if (data) {
      setAdsPackage(data);
    }
    console.log(data);
  }, [data]);

  return (
    <div className="w-full px-6 grid grid-cols-2 grid-rows-2 gap-[17px]">
      {data.packages.map((singlePackage: Props) => (
        <div
          key={`package-${singlePackage.packageId}`}
          className="w-full h-auto flex-col relative"
          onClick={() => router.push(`/items/${singlePackage.packageId}`)} // 상세 페이지 연결
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
              {`${singlePackage.minPrice.toLocaleString()}원`}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdvertisementDetail;
