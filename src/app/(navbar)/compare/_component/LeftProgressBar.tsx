import React from "react";

const LeftProgressBar = ({
  rating,
  isLower,
}: {
  rating: number;
  isLower: boolean;
}) => {
  const filledWidth = `${rating * 20}%`;
  const bgColorClass = isLower
    ? "bg-gradient-grey"
    : "bg-custom-gradient-pink-3";
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
