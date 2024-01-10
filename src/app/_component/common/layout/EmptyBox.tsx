import React from "react";

interface Props {
  text?: string;
  imgUrl?: string;
  children?: React.ReactNode;
}
const EmptyBox = ({
  text,
  imgUrl = "/assets/sadMainLogo.svg",
  children,
}: Props) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img src={imgUrl} alt="로고" className="m-10 w-[160px] h-[132px]" />
      {children}
      <p className="text-grey-4 text-center text-sm font-normal tracking-tighter">
        {text}
      </p>
    </div>
  );
};

export default EmptyBox;
