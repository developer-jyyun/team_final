import React from "react";

const SkeletonTitle = () => {
  return (
    <div className="mx-auto mt-8 mb-10 animate-pulse">
      <div className="h-6 w-2/4 bg-grey-e rounded-lg" />
      <div className="flex flex-nowrap relative gap-[18px] h-[90px] mt-4">
        <div className="w-[90px] h-[90px] bg-grey-e rounded-lg overflow-hidden" />
        <div className="flex-1 space-y-3">
          <div className="h-4 w-[50px] bg-grey-e rounded-xl" />
          <div className="h-6 bg-grey-e rounded-lg" />
          <div className="h-4 bg-grey-e rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonTitle;
