// HomeAdvertisements

"use client";

import getAdvertisements from "@/api/home/getAdvertisements";
import DetailSwiper from "@/app/(non-navbar)/items/[id]/_component/DetailSwiper";
import { useQuery } from "@tanstack/react-query";

interface Props {
  name: string;
  imageUrl: string;
}

const HomeAdvertisements = () => {
  const { data } = useQuery({
    queryKey: ["advertisements"],
    queryFn: getAdvertisements,
  });

  const adsData = data.data.map((ads: Props) => ads.imageUrl);

  return (
    <section className="pb-6 cursor-pointer">
      <DetailSwiper imgUrls={adsData} delay={4} hasLink thema="main" />
    </section>
  );
};

export default HomeAdvertisements;
