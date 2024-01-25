import React from "react";

const SkeletonItem = () => {
  return (
    <div className="inline-block mr-3">
      <div className="w-[158px] relative">
        <div className="h-[180px] w-full bg-grey-d rounded-[12px] animate-pulse" />
      </div>
      <div className="w-[150px] my-1 ml-0.5 flex flex-col justify-between gap-1">
        <div className="w-full h-4 bg-grey-d animate-pulse rounded-md" />
        <div className="flex gap-1 ">
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="h-4 w-8 bg-grey-d animate-pulse rounded-md"
            />
          ))}
        </div>
        <div className="h-4 w-20 bg-grey-d animate-pulse rounded-md" />
      </div>
    </div>
  );
};

export default SkeletonItem;
