import { TITLE_CLASS } from "@/app/constants";
import InnerSection from "../_component/InnerSection";
import ReservationItem from "../_component/ReservationItem";
import ReviewScore from "./_components/ReviewScore";
import WriteReview from "./_components/WriteReview";

const WriteReviewPage = () => {
  return (
    <InnerSection text="리뷰 작성하기" backUrl="/my">
      <h2 className={TITLE_CLASS}>패키지 정보</h2>
      <ReservationItem theme="review" hashTag />
      <ReviewScore />
      <WriteReview />
    </InnerSection>
  );
};

export default WriteReviewPage;
