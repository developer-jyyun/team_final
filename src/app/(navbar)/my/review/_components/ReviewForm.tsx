"use client";

import { TITLE_CLASS } from "@/app/constants";
import { MyOrder } from "@/app/types";
import useOrderToReviewQuery from "@/hooks/query/useOrderToReviewQuery";
import convertToFourDigitYear from "@/utils/convertToFourDigitYear";
import { useParams } from "next/navigation";
import InnerSection from "../../_component/InnerSection";
import ReviewScore from "./ReviewScore";
import WriteReview from "./WriteReview";
// import ReservationItem from "../../_component/ReservationItem";
import Chip from "../../_component/Chip";

const ReviewForm = () => {
  const params = useParams();
  // console.log(params);

  // const orderId = parseInt(params.id, 10);

  const orderId = Array.isArray(params.id)
    ? parseInt(params.id[0], 10)
    : parseInt(params.id, 10);

  const { data, isLoading, isError, error } = useOrderToReviewQuery();

  const orderToReview = data.find(
    (order: MyOrder) => order.orderId === orderId,
  );

  // console.log(orderToReview);
  console.log(data);

  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>⚠ {error.message} ⚠</div>;
  if (!orderToReview) return <div>주문을 찾을 수 없습니다.</div>;
  const convertedYear = convertToFourDigitYear(
    orderToReview.package.travelPeriod,
  );

  return (
    <InnerSection text="리뷰 작성하기" backUrl="/my">
      <h2 className={TITLE_CLASS}>패키지 정보</h2>
      <li className="mb-6 w-full h-[90px] relative  flex flex-row gap-1 justify-between web:h-[120px]">
        <div className="w-[90px] shrink-0 rounded-lg overflow-hidden web:w-[120px]">
          <img
            className="w-full h-full"
            src={orderToReview.package.imageUrl}
            alt={orderToReview.package.title}
          />
        </div>
        <div className="w-2/3  flex flex-col justify-evenly gap-2 ">
          <p className="flex flex-row items-center max-w-[80%] ">
            <span className="font-medium text-lg text-black-2 leaing-3 truncate">
              {orderToReview.package.title}
            </span>
          </p>
          <div className="">
            <Chip chipData={orderToReview.package.hashtags} gap="gap-x-1" />
          </div>
          <p className="text-black-6 font-medium text-sm ">{convertedYear}</p>
        </div>
      </li>

      <ReviewScore />
      <WriteReview />
    </InnerSection>
  );
};

export default ReviewForm;
