import React from "react";

const MyPicProduct = () => {
  return (
    <div className="flex my-6">
      <div className="w-[90px] h-[90px] bg-grey-a rounded-lg mr-[18px]">
        <img src="#" alt="상품사진" />
      </div>
      <div className="relative">
        <h3 className="flex text-black-2 text-lg font-medium">
          청룡의 해 얼리버드 특가
          <img
            src="/icons/likeActiveButtonIcon.svg"
            alt="하트"
            className="ml-6"
          />
        </h3>
        <div className="flex gap-1">
          <span className="text-black-4 text-[11px] font-normal py-1 px-2 border-[0.6px] border-black-6 rounded-full">
            일본
          </span>
          <span className="text-black-4 text-[11px] font-normal py-1 px-2 border-[0.6px] border-black-6 rounded-full">
            체험
          </span>
          <span className="text-black-4 text-[11px] font-normal py-1 px-2 border-[0.6px] border-black-6 rounded-full">
            로컬 다이닝
          </span>
        </div>
        <div className="mt-2.5">
          <p className="text-red-1 text-xxs font-light">
            4박 5일 <b className="ml-1 text-sm font-medium">689,000원</b>
          </p>
        </div>
        <button
          type="button"
          className="text-white text-xxs font-medium p-2 bg-custom-gradient-pink gap-2 rounded-[16px] absolute right-0 bottom-0"
        >
          1:1
          <br />
          비교하기
        </button>
      </div>
    </div>
  );
};

export default MyPicProduct;
