"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useRef, useState } from "react";
import getAdvertisements from "@/api/home/getAdvertisements";

interface Props {
  adId: number;
  imageUrl: string;
}

const HomeAdvertisements = () => {
  const [adsData, setAdsData] = useState<Props[]>([]);

  SwiperCore.use([Navigation, Scrollbar, Autoplay]);
  const swiperRef = useRef<SwiperCore>();
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const fetchData = async () => {
    const advertisementsData = await getAdvertisements();
    if (advertisementsData) {
      setAdsData(advertisementsData.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-[100%]">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation, Scrollbar, Autoplay]}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        navigation={{
          enabled: true,
          nextEl: nextRef.current,
          prevEl: prevRef.current,
          disabledClass: "opacity-40",
        }}
        scrollbar={{ draggable: true }}
      >
        {adsData?.map((ads) => (
          <SwiperSlide key={ads.imageUrl}>
            <Image
              src={ads.imageUrl}
              alt="테스트이미지"
              width={300}
              height={300}
              style={{ width: "100%", height: "240px" }}
              className="rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeAdvertisements;
