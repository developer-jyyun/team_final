import React from "react";

interface Props {
  text?: string;
}
const NoItem = ({ text }: Props) => {
  return (
    <div className="pt-6 flex flex-col gap-4 items-center justify-center ">
      <div>
        <img src="/assets/noItemImg.png" alt="비행기 이미지" />
      </div>
      <div>
        <p className="text-black-8 text-xs text-center tracking-[0.12px] ">
          {text}
        </p>
        <p className="text-black-5 font-semibold text-center tracking-[0.16px]">
          <span className="text-pink-main">LET’S </span>와 함께 떠나볼까요?
        </p>
      </div>
    </div>
  );
};

export default NoItem;
