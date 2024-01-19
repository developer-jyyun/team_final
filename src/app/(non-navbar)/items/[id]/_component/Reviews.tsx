import type { PackageReview } from "@/app/types";
import usePackageReveiwQuery from "@/hooks/query/usePackageReveiwQuery";
import usePackageScoreQuery from "@/hooks/query/usePackageScoreQuery";
import { useParams } from "next/navigation";
import { useEffect, useRef } from "react";
import DetailTypography from "./DetailTypography";
import ReviewItem from "./ReviewItem";
import ReviewRangeList from "./ReviewRangeList";
import NoReviews from "./NoReviews";

const Reviews = () => {
  const params = useParams();
  const {
    data: reviews,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = usePackageReveiwQuery(params.id as string);
  const { data: score } = usePackageScoreQuery(params.id as string);
  console.log(reviews?.pages[0].data.data);

  const boxRef = useRef(null);

  useEffect(() => {
    const currentRef = boxRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          if (!isFetching && hasNextPage) {
            fetchNextPage();
          }
        }
      },
      { threshold: 0.5 },
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isFetching, hasNextPage, fetchNextPage]);

  if (reviews?.pages[0].data.data.length === 0) {
    return <NoReviews />;
  }

  return (
    <div className="mt-6">
      <DetailTypography variant="h1" size={18} bold={600}>
        리뷰
      </DetailTypography>
      <div className="flex mt-8 mb-5">
        <img
          src="/icons/starIconMini.svg"
          alt="별 아이콘"
          className="mr-2 web:w-4"
        />
        <DetailTypography size={18} bold={700}>
          {score.data.averageStars} 받은 상품이예요
        </DetailTypography>
      </div>
      <div className="mb-8">
        <ReviewRangeList
          text="상품구성"
          score={score.data.averageProductScore}
        />
        <ReviewRangeList
          text="일정구성"
          score={score.data.averageScheduleScore}
        />
        <ReviewRangeList
          text="가이드 친절도"
          score={score.data.averageGuideScore}
        />
        <ReviewRangeList
          text="가이드 시간/일정수준"
          score={score.data.averageAppointmentScore}
        />
      </div>

      {reviews?.pages.map((page) => {
        return (
          <ul>
            {page.data.data.map((review: PackageReview) => {
              return <ReviewItem key={review.reviewId} review={review} />;
            })}
          </ul>
        );
      })}
      <div ref={boxRef} className="w-full h-24" />
    </div>
  );
};

export default Reviews;
