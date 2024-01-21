import React from "react";

interface Props {
  tagName: string;
}

const Hashtag = ({ tagName }: Props) => {
  return (
    <div className="px-1 py-0.5 rounded-[12px] border border-grey-c p-1 text-xs text-pink text-center">
      {tagName}
    </div>
  );
};

export default Hashtag;
