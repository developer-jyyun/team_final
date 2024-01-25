import React from "react";

const SkeletonItem = () => {
  return (
    <div className="inline-block mr-3">
      <div className="w-[158px] relative">
        <div className="h-[180px] w-full bg-gray-300 rounded-[12px] animate-pulse" />
      </div>
      <div className="w-[150px] my-1 ml-0.5 flex flex-col justify-between gap-1">
        <div className="w-full h-4 bg-gray-300 animate-pulse rounded-md" />
        <div className="flex gap-1 ">
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="h-4 w-8 bg-gray-300 animate-pulse rounded-md"
            />
          ))}
        </div>
        <div className="text-sm text-gray-300 font-extrabold h-4 w-20 bg-gray-300 animate-pulse rounded-md" />
      </div>
    </div>
  );
};

export default SkeletonItem;
