"use client";

import { useRouter, useParams } from "next/navigation";
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
  hasLink?: boolean;
  thema?: string;
}

const DetailSwiper = ({
  imgUrls,
  delay = "none",
  hasLink = false,
  thema,
}: Props) => {
  const router = useRouter();
  const { id: slideId } = useParams();
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

  const handleSwiperClick = () => {
    if (!hasLink || slideIndex + 1 === Number(slideId)) {
      return;
    }

    if (hasLink) {
      router.push(`/advertisement/${slideIndex + 1}`);
    }
  };

  const getSwiperStyle = () => {
    if (!thema) return "";
    return `w-[327px] h-[240px] web:w-[450px] web:h-[335px] rounded-md overflow-hidden`;
  };

  const getImgStyle = () => {
    if (!thema) return `w-full h-full object-fill`;
    return `w-[327px] h-[240px] web:w-[450px] web:h-[335px] object-cover object-center`;
  };

  const getBoxStyle = () => {
    if (!thema) return `w-full h-[320px]`;

    return "";
  };

  return (
    <div
      className="relative swiper-container"
      onClick={() => handleSwiperClick()}
    >
      <Swiper
        autoplay={getDelay()}
        onSlideChange={handleSlideChange}
        className={`${getSwiperStyle()}`}
      >
        {imgUrls.map((img, index) => (
          <SwiperSlide key={img + index}>
            <div className={`${getBoxStyle()}`}>
              <img
                src={img}
                alt="패키지 상세 이미지"
                className={`${getImgStyle()}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <SwiperBadge
        slideIndex={slideIndex}
        slideLength={imgUrls.length}
        thema={thema}
      />
    </div>
  );
};

export default DetailSwiper;
