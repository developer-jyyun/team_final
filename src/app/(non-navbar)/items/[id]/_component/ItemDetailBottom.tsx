"use client";

import useScrollUp from "@/hooks/useScrollUp";
import DetailBottomButton from "./DetailBottomButton";
import DetailMoreButton from "./DetailMoreButton";

interface Props {
  viewMore: boolean;
  setViewMore: React.Dispatch<React.SetStateAction<boolean>>;
}

const ItemDetailBottom = ({ viewMore, setViewMore }: Props) => {
  const isScrollUp = useScrollUp();

  const getAnimation = () => {
    if (!viewMore) return "";

    if (isScrollUp) return "animate-positionTopAnimation";
    else return "animate-positionTopAnimationReverse";
  };

  return (
    <div
      className={`fixed bottom-0 z-50 ${getAnimation()} w-full web:w-[500px]`}
    >
      {viewMore || <DetailMoreButton setViewMore={setViewMore} />}
      <DetailBottomButton viewMore={viewMore} />
    </div>
  );
};

export default ItemDetailBottom;
