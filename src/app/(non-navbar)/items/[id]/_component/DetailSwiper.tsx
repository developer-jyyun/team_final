"use client";

import { SetStateAction, useState } from "react";
import SwiperCore from "swiper";
import { Autoplay, Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperBadge from "./SwiperBadge";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Scrollbar, Autoplay]);

interface Props {
  imgUrls: string[];
}

const DetailSwiper = ({ imgUrls }: Props) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleSlideChange = (swiper: { realIndex: SetStateAction<number> }) => {
    setSlideIndex(swiper.realIndex);
  };

  return (
    <div className="relative swiper-container">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onSlideChange={handleSlideChange}
      >
        {imgUrls.map((img) => (
          <SwiperSlide key={img}>
            <div className="w-full h-[320px]">
              <img
                src={img}
                alt="패키지 상세 이미지"
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <SwiperBadge slideIndex={slideIndex} slideLength={imgUrls.length} />
    </div>
  );
};

export default DetailSwiper;
