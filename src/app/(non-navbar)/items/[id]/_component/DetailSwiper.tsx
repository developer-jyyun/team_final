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

const DetailSwiper = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const slideData = [
    {
      id: 1,
      img: "https://tourimage.interpark.com/product/tour/00161/A50/1000/A5019085_1_880.jpg",
    },
    {
      id: 2,
      img: "https://tourimage.interpark.com/product/tour/00161/A50/1000/A5019085_2_953.jpg",
    },
    {
      id: 3,
      img: "https://tourimage.interpark.com/Spot/137/12348/201605/6359918902617540740.jpg",
    },
    {
      id: 4,
      img: "https://tourimage.interpark.com/Spot/137/12348/201605/6359918902617540741.jpg",
    },
  ];

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
        {slideData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="w-full h-[320px]">
              <img
                src={slide.img}
                alt="패키지 상세 이미지"
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <SwiperBadge slideIndex={slideIndex} slideLength={4} />
    </div>
  );
};

export default DetailSwiper;
