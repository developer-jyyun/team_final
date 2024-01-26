import React from "react";

const RightProgressBar = ({
  rating,
  isLower,
  isSameRating,
  isZeroCount,
}: {
  rating: number;
  isLower: boolean;
  isSameRating: boolean;
  isZeroCount: boolean;
}) => {
  const filledWidth = `${rating * 20}%`;
  const bgColorClass =
    !isZeroCount && rating === 4
      ? "bg-gradient-grey"
      : isSameRating
        ? "bg-blue-main"
        : isLower
          ? "bg-gradient-grey"
          : "bg-custom-gradient-green";
  return (
    <div className="w-full h-[14px] rounded-full bg-grey-bar flex justify-end">
      <div
        style={{ width: filledWidth }}
        className={`h-[14px] rounded-full  ${bgColorClass}`}
      />
    </div>
  );
};

export default RightProgressBar;
