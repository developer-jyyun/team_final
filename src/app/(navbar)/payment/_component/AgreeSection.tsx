import React, { useEffect, ReactNode } from "react";
import Image from "next/image";
import useBottomScrollListener from "../_hooks/useBottomScrollListener";
import BottomScroll from "./BottomScroll";

interface Props {
  title: string;
  defaultSrc: string;
  activeSrc: string;
  isActive: boolean;
  onSectionChange: (isActive: boolean) => void;
  children?: ReactNode;
}

const AgreeSection = ({
  title,
  defaultSrc,
  activeSrc,
  isActive,
  onSectionChange,
  children,
}: Props) => {
  const { bottomScrollRef, imageSrc, isDivHidden } = useBottomScrollListener(
    defaultSrc,
    activeSrc,
  );

  useEffect(() => {
    if (imageSrc === activeSrc && !isActive) {
      onSectionChange(true);
    } else if (imageSrc !== activeSrc && isActive) {
      onSectionChange(false);
    }
  }, [imageSrc, activeSrc, isActive, onSectionChange]);

  return (
    <>
      <div
        className={`flex bg-pink-transparent-2 p-2 my-2 rounded-lg relative ${
          isActive ? "active-class" : ""
        }`}
      >
        <Image src={imageSrc} alt="체크 전 이미지" width={24} height={24} />
        <p className="ml-2 text-black-4 text-base font-normal">{title}</p>
        <div className="absolute right-4">
          <Image
            src="/icons/rightArrowIcon.svg"
            alt="우측 화살표"
            width={24}
            height={24}
          />
        </div>
      </div>
      <div
        className={`h-52 bg-grey-transparent rounded-lg p-3.5 overflow-y-scroll ${
          isDivHidden ? "hidden" : ""
        }`}
      >
        {children}
        <div ref={bottomScrollRef}>
          <BottomScroll />
        </div>
      </div>
    </>
  );
};

export default AgreeSection;
