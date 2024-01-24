"use client";

import useScrollUp from "@/hooks/useScrollUp";

interface Props {
  viewMore: boolean;
  viewScroll: boolean;
}

const ScrollToUpButton = ({ viewMore, viewScroll }: Props) => {
  const isScrollUp = useScrollUp();

  const handleUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getAnimation = () => {
    if (viewMore && viewScroll) return "animate-positionTopAnimationDelay";
    return "animate-positionTopAnimationReverseDelay";
  };

  return (
    <div
      className={`${
        viewMore && viewScroll ? "fixed" : "hidden"
      } z-50 ${getAnimation()} w-[40px] ${
        isScrollUp && viewScroll ? "h-[120px]" : "h-[70px]"
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
