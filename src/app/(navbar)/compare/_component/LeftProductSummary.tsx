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
  return (
    <div>
      <div className="web:mx-6">
        <p className="text-black-4 text-sm font-medium mb-2">
          <b className="text-xl">🧑‍🦲</b>
          <b className="text-pink-main font-semibold">
            {purchasedCount ?? "불러오는 중..."}
          </b>
          명이 이용했어요!
        </p>
        <div className="w-[155px] h-[100px] rounded-lg bg-grey-a">
          {imageUrl ? (
            <img src={imageUrl} alt="상품사진" />
          ) : (
            <div>이미지 준비 중...</div>
          )}
        </div>
        <div className="my-2.5 flex gap-2">
          {hashtags.map((tag, index) => (
            <span
              key={index}
              className="py-1 px-1 border-[0.6px] border-black-6 rounded-full text-black-4 text-[8px] font-normal"
            >
              {tag}
            </span>
          ))}
        </div>
        <div>
          <h4 className="mb-2 text-black-4 text-base font-semibold">
            <b>{lodgeDays}</b>박 <b>{tripDays}</b>일
          </h4>
          <div className="mb-2 flex items-center">
            <img src="/icons/starIcon.svg" alt="별점" className="w-3 h-3" />
            <p className="ml-1 text-black-3 text-xs font-normal">
              ({averageStars.toFixed(1)})
              <u className="ml-1 text-black-8 text-xs font-normal">
                리뷰 {reviewCount}
              </u>
            </p>
          </div>
          <div className="bg-grey-transparent rounded-lg py-1 text-center">
            <p className="text-black-4 text-xxs font-medium">
              예약
              <b className="ml-0.5 text-pink text-[13px] font-semibold">
                {reservationCount}명
              </b>
              <b className="ml-0.5 text-black-8 font-normal">
                / 최소 출발 {minReservationCount}명
              </b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftProductSummary;
