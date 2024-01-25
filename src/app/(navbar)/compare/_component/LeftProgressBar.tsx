import React from "react";

const LeftProgressBar = ({
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
  const filledWidth = isZeroCount ? "60%" : `${rating * 20}%`;
  const bgColorClass = isZeroCount
    ? "bg-gradient-grey"
    : isSameRating
      ? "bg-blue-main"
      : isLower
        ? "bg-gradient-grey"
        : "bg-custom-gradient-pink";
  return (
    <div className="w-full h-2 rounded-full bg-grey-bar">
      <div
        style={{ width: filledWidth }}
        className={`h-2 rounded-full  ${bgColorClass}`}
      />
    </div>
  );
};

export default LeftProgressBar;