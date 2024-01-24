"use client";

import Button from "@/app/_component/common/atom/Button";
import React, { useState } from "react";

const WriteReview = () => {
  const [review, setReview] = useState("");
  const [, setIsReviewWritten] = useState(false);

  const handleReviewChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
  };

  const isButtonEnabled = review.length >= 3 && review.length <= 50;

  const handleSubmit = () => {
    console.log("리뷰 제출 🎈", review);
    setReview("");
    setIsReviewWritten(true);
  };
  return (
    <div className="mt-4">
      <textarea
        className="w-full h-[120px] bg-grey-e/40 rounded-lg p-4 placeholder:text-xs placeholder:black-8"
        name="writeReview"
        maxLength={50}
        placeholder="다녀온 후기를 50자 내외로 입력해 주세요."
        onChange={handleReviewChange}
      />

      <Button
        text="리뷰 작성 완료"
        styleClass={`w-full rounded-xl text-xs p-3.5 mt-[18px] ${
          isButtonEnabled ? "bg-pink text-white" : "bg-grey-d text-black-8"
        } font-semibold`}
        onClickFn={handleSubmit}
        disabled={!isButtonEnabled}
      />
    </div>
  );
};

export default WriteReview;
