import React from "react";

const Skeleton = () => {
  return (
    <div className="mx-auto mt-8 mb-10 animate-pulse">
      <div className="flex flex-nowrap relative gap-[18px] h-[90px] mt-4">
        <div className="w-[90px] h-[90px] bg-grey-e rounded-md overflow-hidden" />
        <div className="flex-1 space-y-3">
          <div className="h-6 bg-grey-e rounded" />
          <div className="h-4 bg-grey-e rounded-lg" />
          <div className="h-4 bg-grey-e rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
