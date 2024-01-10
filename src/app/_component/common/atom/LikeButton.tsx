"use client";

import React, { useState } from "react";

interface Props {
  id: number;
}

const LikeButton = ({ id }: Props) => {
  const [isLike, setIsLike] = useState(false);

  const handleClick = () => {
    setIsLike((prev) => !prev);
    console.log(id); // api 연결 전 'id' is defined but never used 에러 해결을 위해 임시추가한 부분입니당
  };

  return (
    <button
      type="button"
      className="w-6 m-1.5 rounded-full"
      onClick={handleClick}
    >
      <img
        className="w-full"
        src={
          isLike
            ? "/icons/likeActiveButtonIcon.svg"
            : "/icons/likeButtonIcon.svg"
        }
        alt="찜 버튼"
      />
    </button>
  );
};

export default LikeButton;
