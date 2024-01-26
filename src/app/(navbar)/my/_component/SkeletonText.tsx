import React from "react";

const SkeletonText = () => {
  return (
    <div className="mx-auto mt-8 mb-10 animate-pulse">
      <div className="flex flex-col space-y-4">
        <div className="flex items-start p-4 bg-grey-e rounded-lg">
          <div className="flex-1 space-y-2">
            <div className="h-6 bg-white rounded" />
            <div className="h-4 bg-white rounded" />
            <div className="h-4 bg-white rounded" />
          </div>
          <div className="ml-4 w-6 h-6 bg-white rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonText;
