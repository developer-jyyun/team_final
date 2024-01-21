import React from "react";

const MoreButton = () => {
  return (
    <div className="flex items-center justify-center h-20 w-full bg-gradient-white web:h-20">
      <button
        type="button"
        className="py-1 px-2 border-[0.6px] border-grey-a rounded-full bg-white"
      >
        더보기
      </button>
    </div>
  );
};

export default MoreButton;
