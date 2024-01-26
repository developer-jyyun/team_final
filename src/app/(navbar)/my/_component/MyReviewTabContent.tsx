"use client";

import { MyReview } from "@/app/types";
import useMyReviewsQuery from "@/hooks/query/useMyReviewsQuery";
import useDeleteReviewMutation from "@/hooks/query/useDeleteReviewMutation";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import NoItem from "./NoItem";
import SkeletonText from "./SkeletonText";

const pageSize = 3;
const MyReviewTabContent = () => {
  const {
    data: myReviewData,
    isFetching,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
  } = useMyReviewsQuery(pageSize);

  const lastElementRef = useInfiniteScroll(
    fetchNextPage,
    isFetching,
    hasNextPage,
  );

  const totalCount = myReviewData?.pages[0]?.page?.totalElements ?? 0;

  const deleteReview = useDeleteReviewMutation();
  const handleDeleteReview = (reviewId: number) => {
    deleteReview.mutate(reviewId);
  };

  if (totalCount === 0) {
    return <NoItem text=" 리뷰를 남길 여행 내역이 존재하지 않습니다." img />;
  }
  console.log(myReviewData);
  return (
    <div className="custom-scrollbar flex flex-col items-center h-[39vh] overflow-y-scroll pt-5 web:h-[43vh]">
      {myReviewData?.pages.map((page, pageIndex) => (
        <ul
          key={pageIndex}
          className="flex flex-col justify-center items-center w-[95.111%]  mx-auto mt-5 "
        >
          {page.data.map((review: MyReview) => (
            <li
              key={review.reviewId}
              className="w-full flex flex-col gap-3 mb-[29px] relative"
            >
              <h2 className="font-semibold text-md max-w-[93%] truncate">
                {review.content}
              </h2>
              <div className="flex gap-[23px] items-center text-xs">
                <div className="flex gap-1">
                  <img src="/icons/starIconMini.svg" alt="별 아이콘" />
                  <span className="text-black-2">{review.averageStars}</span>
                </div>
                <span className="text-black-8"> {review.createdAt}</span>
              </div>
              <div className="flex gap-[6px] text-xxs  font-medium">
                <dl className="flex gap-1 p-1 rounded-xl bg-pink-transparent">
                  <dt className="text-black-4 ">상품구성</dt>
                  <dd className="text-pink-main"> {review.productScore}</dd>
                </dl>
                <dl className="flex gap-1 p-1 rounded-xl bg-pink-transparent">
                  <dt className="text-black-6">가이드 친절도</dt>
                  <dd className="text-pink-main"> {review.guideScore}</dd>
                </dl>

                <dl className="flex gap-1 p-1 rounded-xl bg-pink-transparent">
                  <dt className="text-black-6">일정구성</dt>
                  <dd className="text-pink-main"> {review.scheduleScore}</dd>
                </dl>

                <dl className="flex gap-1 p-1 rounded-xl bg-pink-transparent">
                  <dt className="text-black-6">가이드 시간/일정준수</dt>
                  <dd className="text-pink-main">{review.appointmentScore}</dd>
                </dl>
              </div>
              <button
                type="button"
                onClick={() => handleDeleteReview(review.reviewId)}
                className="absolute top-[6.76px] right-0"
              >
                <img src="/icons/deleteIcon.svg" alt="리뷰 삭제 아이콘" />
              </button>
            </li>
          ))}
        </ul>
      ))}
      <div
        ref={lastElementRef}
        className=" w-full h-20 p-2 text-center text-black-8"
      >
        {isFetching || (hasNextPage && <SkeletonText />)}

        {!isFetching && !hasNextPage && (
          <div className="p-4">마지막 목록입니다!</div>
        )}
        {isError && <div>⚠ {error.message} ⚠</div>}
      </div>
    </div>
  );
};

export default MyReviewTabContent;
