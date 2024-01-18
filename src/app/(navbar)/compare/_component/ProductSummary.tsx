import React from "react";

const ProductSummary = () => {
  return (
    <div>
      <p className="text-black-4 text-sm font-medium mb-2">
        <b className="text-xl">🧑‍🦲</b>
        <b className="text-pink-main font-semibold">123</b>명이 이용했어요!
      </p>
      <div className="w-[155px] h-[140px] rounded-lg bg-grey-a">
        <img src="#" alt="상품사진" />
      </div>
      <div className="my-2.5 flex gap-2">
        <span className="py-1 px-2 border-[0.6px] border-black-6 rounded-full text-black-4 text-xxs font-normal">
          일본
        </span>
        <span className="py-1 px-2 border-[0.6px] border-black-6 rounded-full text-black-4 text-xxs font-normal">
          체험
        </span>
        <span className="py-1 px-2 border-[0.6px] border-black-6 rounded-full text-black-4 text-xxs font-normal">
          로컬 다이닝
        </span>
      </div>
      <div>
        <h4 className="mb-2 text-black-4 text-base font-semibold">13박 14일</h4>
        <div className="mb-2 flex items-center">
          <img src="/icons/starIcon.svg" alt="별점" className="w-3 h-3" />
          <p className="ml-1 text-black-3 text-xs font-normal">
            (4.3) <u className="text-black-8 text-xs font-normal">리뷰 14</u>
          </p>
        </div>
        <div className="bg-grey-transparent rounded-lg py-1 text-center">
          <p className="text-black-4 text-xxs font-medium">
            예약
            <b className="ml-0.5 text-pink text-[13px] font-semibold">00명</b>
            <b className="ml-0.5 text-black-8 font-normal">/ 최소 출발 10명</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductSummary;
