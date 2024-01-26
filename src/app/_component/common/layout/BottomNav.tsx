"use client";

import useScrollUp from "@/hooks/useScrollUp";
import NavIconButton from "../atom/NavIconButton";

interface Props {
  scrollView?: boolean;
}

const BottomNav = ({ scrollView = true }: Props) => {
  const isScrollUp = useScrollUp();

  const getAnimation = () => {
    if (!scrollView) return "";

    if (isScrollUp) return "animate-positionTopAnimation";
    else return "animate-positionTopAnimationReverse";
  };

  return (
    <nav
      className={`fixed left-0 bottom-0 w-full h-[56px] bg-white flex justify-center items-center 
    border-t-[0.6px] border-solid border-grey-d shadow-dark ${getAnimation()} z-50`}
    >
      <ul className="w-[375px] flex web:w-[500px]">
        <NavIconButton
          href="/"
          text="홈"
          basic="/icons/navHomeIcon.svg"
          active="/icons/navHomeActiveIcon.svg"
        />
        <NavIconButton
          href="/search"
          text="검색"
          basic="/icons/navSearchIcon.svg"
          active="/icons/navSearchActiveIcon.svg"
        />
        <NavIconButton
          href="/heart"
          text="찜"
          basic="/icons/navHeartIcon.svg"
          active="/icons/navHeartActiveIcon.svg"
        />
        <NavIconButton
          href="/my"
          text="마이"
          basic="/icons/navMyIcon.svg"
          active="/icons/navMyActiveIcon.svg"
        />
      </ul>
    </nav>
  );
};

export default BottomNav;
