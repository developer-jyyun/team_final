import React from "react";

const SkeletonItem = () => {
  return (
    <div className="my-5 flex flex-col gap-2 w-[155px] web:w-[215px] bg-white">
      <div className="h-[120px] web:h-[155px] rounded-[12px] bg-grey-d animate-pulse" />
      <div className="w-full px-0.5 flex flex-col gap-2">
        <div className="h-3 bg-grey-d animate-pulse rounded-[12px]" />
        <div className="h-[44px] bg-grey-d  animate-pulse rounded-[12px]" />
        <div className="h-4 bg-grey-d animate-pulse rounded-[12px]" />
      </div>
    </div>
  );
};

export default SkeletonItem;
