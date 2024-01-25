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
  const filledWidth = `${rating * 20}%`;
  const bgColorClass = isZeroCount
    ? "bg-gradient-grey"
    : isSameRating
      ? "bg-blue-main"
      : isLower
        ? "bg-custom-gradient-pink"
        : "bg-gradient-grey";
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
