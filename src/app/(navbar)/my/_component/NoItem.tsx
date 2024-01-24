import React from "react";

interface Props {
  text?: string;
  img?: boolean;
}
const NoItem = ({ text, img }: Props) => {
  const baseClass = "pt-6 flex flex-col gap-4 items-center justify-center";
  const noImgClass =
    "h-[90px] rounded-lg bg-grey-e bg-opacity-40 pt-6  flex-col gap-4 items-center justify-center ";
  return (
    <div className={img ? baseClass : noImgClass}>
      <div>
        {img && <img src="/assets/noItemImg.png" alt="내역이 없습니다" />}
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
