import React from "react";

interface Props {
  progress: number;
}

const ProgressBar = ({ progress }: Props) => {
  const progressWidth = `w-[${progress}%]`;
  return (
    <div>
      <div className="bg-white sticky top-0  p-2 ">
        <div className="w-4/5 mx-auto rounded-full">
          <div
            className={`${progressWidth} bg-pink text-white text-xs font-bold text-blue-100 text-center leading-none rounded-full`}
          >
            {progress}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
