import React from "react";

interface Props {
  progress: number;
}

const ProgressBar = ({ progress }: Props) => {
  const progressWidth = progress === 100 ? `w-full` : `w-1/2`;

  return (
    <div className="sticky top-0 px-4">
      <div className="w-full mx-auto rounded-full bg-gray-200">
        <div className={`${progressWidth} bg-pink py-0.5 rounded-full`} />
      </div>
    </div>
  );
};

export default ProgressBar;
