import useDefaultImage from "@/hooks/useDefaultImage";
import React from "react";

const LeftProductSummary = ({
  purchasedCount,
  imageUrl,
  hashtags,
  lodgeDays,
  tripDays,
  averageStars,
  reviewCount,
  reservationCount,
  minReservationCount,
}: {
  purchasedCount: number | null;
  imageUrl: string | null;
  hashtags: string[];
  lodgeDays: number;
  tripDays: number;
  averageStars: number;
  reviewCount: number;
  reservationCount: number;
  minReservationCount: number;
}) => {
  const { loadErrorImageUrl, error, handleError } = useDefaultImage();
  return (
    <div className="flex flex-col justify-center">
      <p className="text-black-4 text-sm font-medium mb-2">
        <b className="text-xl">🧑‍🦲</b>
        <b className="text-pink-main font-semibold">
          {purchasedCount ?? "불러오는 중..."}
        </b>
        명이 이용했어요!
      </p>
      <div className="w-[155px] h-[140px] web:w-[200px] web:h-[190px] rounded-lg bg-grey-a overflow-hidden">
        {imageUrl ? (
          <img
            src={error ? loadErrorImageUrl : imageUrl}
            alt="상품사진"
            className="w-full h-full web:w-[200px] web:h-[190px] object-cover"
            onError={handleError}
          />
        ) : (
          <img
            src={loadErrorImageUrl}
            alt="상품사진"
            className="w-full h-full web:w-[200px] web:h-[190px] object-cover"
          />
        )}
      </div>
      <div className="my-2.5 flex gap-2">
        <span className="py-1 px-2 border-[0.6px] border-black-6 rounded-[39px] text-black-4 text-[11px] web:text-sm font-normal">
          {hashtags[0]}
        </span>
        <span className="py-1 px-2 border-[0.6px] border-black-6 rounded-[39px] text-black-4 text-[11px] web:text-sm font-normal">
          {hashtags[1]}
        </span>
      </div>
      <div>
        <h4 className="mb-2 text-black-4 text-base web:text-lg font-semibold">
          <b>{lodgeDays}</b>박 <b>{tripDays}</b>일
        </h4>
        <div className="mb-2 flex items-center">
          <img
            src="/icons/starIcon.svg"
            alt="별점"
            className="w-3 h-3 web:w-3 web:h-3"
          />
          <p className="ml-1 text-black-3 text-xs web:text-sm font-normal">
            ({averageStars.toFixed(1)})
            <u className="ml-1 text-black-8 text-xs web:text-sm  font-normal">
              리뷰 {reviewCount}
            </u>
          </p>
        </div>
        <div className="bg-grey-transparent rounded-lg py-1 text-center w-full flex justify-center">
          <p className="text-black-4 text-xxs web:text-xs font-medium">
            예약
            <b className="ml-0.5 text-pink text-[13px] web:text-sm font-semibold">
              {reservationCount}명
            </b>
            <b className="ml-0.5 text-black-8 text-xxs web:text-xs font-normal">
              / 최소 출발 {minReservationCount}명
            </b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeftProductSummary;
