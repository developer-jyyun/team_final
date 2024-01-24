"use client";

import { useEffect, useState } from "react";
import getAdvertisements from "@/api/home/getAdvertisements";
import DetailSwiper from "@/app/(non-navbar)/items/[id]/_component/DetailSwiper";

interface Props {
  name: string;
  imageUrl: string;
}

const HomeAdvertisements = () => {
  const [adsData, setAdsData] = useState<string[]>([]);
  console.log(adsData);

  // 광고구좌 데이터 fetch
  useEffect(() => {
    const fetchData = async () => {
      const response = await getAdvertisements();
      const urls = response.data.map((ads: Props) => ads.imageUrl);
      setAdsData(urls);
      console.log(response.data);
    };

    fetchData();
    // cleanup
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full">
      <DetailSwiper imgUrls={adsData} delay={4} />
    </div>
  );
};

export default HomeAdvertisements;
