import React from "react";

const SmallSpinner = () => {
  return (
    <div className="flex items-center justify-center w-full h-[100vh]">
      <div className="w-10 h-10 border-t-4 border-pink-main border-solid rounded-full animate-spin" />
    </div>
  );
};

export default SmallSpinner;
