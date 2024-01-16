"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from "next/navigation";
import SwiperCore from "swiper";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useRef, useState } from "react";
import getAdvertisements from "@/api/home/getAdvertisements";

interface Props {
  adId: number;
  imageUrl: string;
}

// swiper pagination의 renderFraction 부분에서 Unexpected unnamed method lint 오류가 발생해 그 부분만 옵션 제외했습니다..
// 확인해보고 추후 lint 오류 발생되지 않게 수정해볼 예정입니다!
/* eslint-disable func-names */
const HomeAdvertisements = () => {
  const router = useRouter();
  // 광고구좌 목록 조회 API를 통해 받아온 응답 데이터 관리
  const [adsData, setAdsData] = useState<Props[]>([]);
  SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay]);
  const swiperRef = useRef<SwiperCore>();
  // <  > 와 같이 이전/이후 이미지를 나타내는 네비게이션 버튼 비활성화를 위한 useRef 사용
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
    <div className="w-full h-[240px] px-6 mb-10 relative">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation, Scrollbar, Autoplay]}
        loop // 마지막 슬라이드 이후 첫 슬라이드로 전환
        autoplay={{
          delay: 2000,
          disableOnInteraction: false, // 사용자 상호작용(직접 드래그)시 자동 슬라이드 멈출지 여부 설정 (기본값: true)
        }}
        // 현재 슬라이드의 인덱스와 전체 인덱스를 1 / 3 와 같이 분수로 나타내는 과정
        pagination={{
          type: "fraction",
          renderFraction: function (currentClass, totalClass) {
            return `<div class="absolute bottom-0 right-0 bg-grey-e text-black-8 text-xs rounded-md mx-3 mb-1 px-2 py-0.5">
                <span class="${currentClass}"></span> / <span class="${totalClass}"></span>
              </div>`;
          },
        }}
        navigation={{
          enabled: true,
          nextEl: nextRef.current,
          prevEl: prevRef.current,
        }}
        scrollbar={{ draggable: true, hide: true }}
      >
        {adsData?.map((ads) => (
          <SwiperSlide key={ads.adId}>
            <Image
              src={ads.imageUrl}
              alt="테스트이미지"
              width={327}
              height={240}
              style={{ height: "240px" }}
              className="rounded-lg web:w-[100%]"
              onClick={() => {
                router.push("/"); // 추후 200_광고및프로모션구좌 페이지 URL 결정시 수정 예정
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeAdvertisements;
