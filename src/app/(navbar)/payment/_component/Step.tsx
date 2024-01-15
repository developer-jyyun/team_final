import React from "react";

interface Props {
  number: string;
  description: string;
  current: boolean;
}

const Step = ({ number, description, current }: Props) => (
  <div className="mb-2">
    <span className="mr-3 py-1 px-2 border border-grey-d rounded-xl bg-white text-black-5 text-sm font-light">
      STEP {number}
    </span>
    <span
      className={`text-black-5 text-sm font-semibold ${
        current ? "your-current-step-class" : ""
      }`}
    >
      {description}
    </span>
  </div>
);

export default Step;
