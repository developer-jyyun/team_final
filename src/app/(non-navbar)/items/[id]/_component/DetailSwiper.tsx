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
  delay?: "none" | 4 | 2;
}

const DetailSwiper = ({ imgUrls, delay = "none" }: Props) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleSlideChange = (swiper: { realIndex: SetStateAction<number> }) => {
    setSlideIndex(swiper.realIndex);
  };

  const getDelay = () => {
    if (delay === 4) {
      return {
        delay: 4000,
        disableOnInteraction: false,
      };
    } else if (delay === 2) {
      return {
        delay: 2000,
        disableOnInteraction: false,
      };
    }

    return false;
  };

  return (
    <div className="relative swiper-container">
      <Swiper autoplay={getDelay()} onSlideChange={handleSlideChange}>
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
