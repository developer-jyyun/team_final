"use client";

import React, { useState } from "react";

interface Props {
  id: number;
  isWish: boolean;
}

const LikeButton = ({ id, isWish }: Props) => {
  const [isLike, setIsLike] = useState(isWish);

  const handleClick = () => {
    setIsLike((prev) => !prev);
    console.log(id); // api 연결 전 'id' is defined but never used 에러 해결을 위해 임시추가한 부분입니당
  };

  return (
    <button
      type="button"
      className="w-6 m-3 rounded-full absolute top-0 right-0"
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
