"use client";

import useScrollUp from "@/hooks/useScrollUp";
import { useEffect, useState } from "react";

interface Props {
  viewMore: boolean;
  viewScroll: boolean;
}

const ScrollToUpButton = ({ viewMore, viewScroll }: Props) => {
  const isScrollUp = useScrollUp();

  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      setIsScrolling(true);

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  console.log(isScrolling);

  const getAnimation = () => {
    if ((viewMore && viewScroll) || !isScrolling)
      return "animate-positionTopAnimationDelay";
    return "animate-positionTopAnimationReverseDelay";
  };

  return (
    <div
      className={`${
        viewMore && viewScroll ? "fixed" : "hidden"
      } z-50 ${getAnimation()} w-[40px] ${
        (isScrollUp && viewScroll) || !isScrolling ? "h-[120px]" : "h-[70px]"
      } flex justify-center items-start ml-4 duration-300`}
    >
      <button
        type="button"
        className="flex justify-center items-center w-9 h-9 rounded-[50%] border-2 border-solid border-grey-c bg-white shadow-dark"
        onClick={handleUp}
      >
        <img src="/icons/airplaneIcon.svg" alt="위로 가기" />
      </button>
    </div>
  );
};
export default ScrollToUpButton;
