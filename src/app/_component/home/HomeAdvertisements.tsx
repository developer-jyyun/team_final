"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import getAdvertisements from "@/api/home/getAdvertisements";
import { AdvertisementItem } from "@/app/types";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Scrollbar, Autoplay } from "swiper/modules";
import SwiperBadge from "@/app/(non-navbar)/items/[id]/_component/SwiperBadge";
import "swiper/css";
import "swiper/css/navigation";

interface Props {
  isDetail?: boolean;
}

const HomeAdvertisements = ({ isDetail }: Props) => {
  const router = useRouter();
  // 광고구좌 목록 조회 API를 통해 받아온 응답 데이터 관리하기 위한 state 선언
  const [adsData, setAdsData] = useState<AdvertisementItem[]>([]);

  // 광고구좌 데이터 fetch
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAdvertisements();
        setAdsData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    // cleanup
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // swiper 관련 코드
  SwiperCore.use([Navigation, Scrollbar, Autoplay]);
  const swiperRef = useRef<SwiperCore>();
  // <  > 와 같이 이전/이후 이미지를 나타내는 네비게이션 버튼 비활성화를 위한 useRef 사용
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const handleSlideChange = (swiper: {
    realIndex: React.SetStateAction<number>;
  }) => {
    setSlideIndex(swiper.realIndex);
  };

  return (
    <div
      className={
        isDetail
          ? "w-[100%] h-[240px] mb-10 relative"
          : "w-[100%] h-[240px] px-6 mb-10 relative"
      }
    >
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation, Scrollbar, Autoplay]}
        loop // 마지막 슬라이드 이후 첫 슬라이드로 전환
        autoplay={{
          delay: 2000, // 기획 디스크립션 -> 2초마다 슬라이드
          disableOnInteraction: false, // 사용자 상호작용(직접 드래그)시 자동 슬라이드 멈출지 여부 설정 (기본값: true)
        }}
        onSlideChange={handleSlideChange}
        navigation={{
          enabled: true,
          nextEl: nextRef.current,
          prevEl: prevRef.current,
        }}
        scrollbar={{ draggable: true, hide: true }}
      >
        {adsData?.map((ads) => (
          <SwiperSlide key={`ad-${ads.adId}`}>
            <div className="w-full web:w-full h-[240px] relative">
              <Image
                src={ads.imageUrl}
                alt="테스트이미지"
                fill
                className={!isDetail ? "rounded-lg" : ""}
                onClick={() => {
                  router.push(`/advertisement/${ads.adId}`);
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="[&>*]:mr-3">
        <SwiperBadge slideIndex={slideIndex} slideLength={3} />
      </div>
    </div>
  );
};

export default HomeAdvertisements;
