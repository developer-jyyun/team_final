import React from "react";

interface Props {
  progress: number;
}

const ProgressBar = ({ progress }: Props) => {
  const progressWidth = `${progress}%`;

  return (
    <div className="sticky top-0 px-4">
      <div className="w-full mx-auto rounded-full bg-gray-200">
        <div
          className={`bg-pink py-0.5 rounded-full`}
          style={{ width: progressWidth }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
