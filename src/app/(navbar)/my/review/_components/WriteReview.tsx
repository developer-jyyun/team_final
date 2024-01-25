"use client";

import DetailTypography from "@/app/(non-navbar)/items/[id]/_component/DetailTypography";
import Button from "@/app/_component/common/atom/Button";
import usePostReviewMutation from "@/hooks/query/usePostReviewMutation";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

interface Props {
  productScore: number;
  scheduleScore: number;
  friendlinessScore: number;
  appointmentScore: number;
}

const WriteReview = ({
  productScore,
  scheduleScore,
  friendlinessScore,
  appointmentScore,
}: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [errorMessage, setErrorMessage] = useState("");
  const [review, setReview] = useState("");
  const { mutateAsync } = usePostReviewMutation(
    {
      content: review,
      productScore,
      scheduleScore,
      guideScore: friendlinessScore,
      appointmentScore,
    },
    Number(searchParams.get("oid")),
  );

  const handleReviewChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
  };

  const isButtonEnabled = review.length >= 3 && review.length <= 50;

  const handleSubmit = () => {
    mutateAsync().then((res) => {
      console.log(res);
      if (res.code === 200) {
        router.replace("/my");
      } else {
        setErrorMessage(res.message);
      }
    });
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

      <DetailTypography color={"red"} size={8}>
        {errorMessage}
      </DetailTypography>
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
