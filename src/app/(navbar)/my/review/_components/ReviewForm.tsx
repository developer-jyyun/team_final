"use client";

import { TITLE_CLASS } from "@/app/constants";
import usePackageDetailQuery from "@/hooks/query/usePackageDetailQuery";
import ReplaceHyphenWithDot from "@/utils/ReplaceHyphenWithDot";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Chip from "../../_component/Chip";
import InnerSection from "../../_component/InnerSection";
import ReviewScore from "./ReviewScore";
import WriteReview from "./WriteReview";

const ReviewForm = () => {
  const searchParams = useSearchParams();

  const [productScore, setProductScore] = useState(5);
  const [scheduleScore, setScheduleScore] = useState(5);
  const [friendlinessScore, setFriendlinessScore] = useState(5);
  const [appointmentScore, setAppointmentScore] = useState(5);

  const {
    data: packageDetail,
    isLoading,
    isError,
    error,
  } = usePackageDetailQuery({
    id: searchParams.get("pid") as string,
    date: null,
    start: true,
  });

  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>⚠ {error.message} ⚠</div>;
  if (!packageDetail.data) return <div>주문을 찾을 수 없습니다.</div>;
  if (!packageDetail.data.myInfo.email) return <div>로그인 해주세요!</div>;

  return (
    <InnerSection text="리뷰 작성하기" backUrl="/my">
      <h2 className={TITLE_CLASS}>패키지 정보</h2>
      <li className="mb-6 w-full h-[90px] relative  flex flex-row gap-1 justify-between web:h-[120px]">
        <div className="w-[90px] shrink-0 rounded-lg overflow-hidden web:w-[120px]">
          <img
            className="w-full h-full"
            src={packageDetail?.data.imageUrls[0] || "로딩"}
            alt={packageDetail?.data.title || "로딩"}
          />
        </div>
        <div className="w-2/3  flex flex-col justify-evenly gap-2 ">
          <p className="flex flex-row items-center max-w-[80%] ">
            <span className="font-medium text-lg text-black-2 leaing-3 truncate">
              {packageDetail?.data.title}
            </span>
          </p>
          <div className="">
            <Chip
              chipData={packageDetail?.data.hashtags || "로딩"}
              gap="gap-x-1"
            />
          </div>
          <p className="text-black-6 font-medium text-sm ">
            {`${
              ReplaceHyphenWithDot(
                packageDetail?.data.departureDatetime.date,
              ) || 0
            } -
              ${
                ReplaceHyphenWithDot(packageDetail?.data.endDatetime.date) || 0
              }`}
          </p>
        </div>
      </li>

      <ReviewScore
        productScore={productScore}
        setProductScore={setProductScore}
        scheduleScore={scheduleScore}
        setScheduleScore={setScheduleScore}
        friendlinessScore={friendlinessScore}
        setFriendlinessScore={setFriendlinessScore}
        appointmentScore={appointmentScore}
        setAppointmentScore={setAppointmentScore}
      />
      <WriteReview
        productScore={productScore}
        scheduleScore={scheduleScore}
        friendlinessScore={friendlinessScore}
        appointmentScore={appointmentScore}
      />
    </InnerSection>
  );
};

export default ReviewForm;
