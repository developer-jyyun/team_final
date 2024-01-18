"use client";

import Button from "@/app/_component/common/atom/Button";
import { TAB_PAGE_SIZE } from "@/app/constants";
import { MyReview } from "@/app/types";
import useMyReviewsQuery from "@/hooks/query/useMyReviewsQuery";
import { useState } from "react";
import NoItem from "./NoItem";

const MyReviewTabContent = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, error } = useMyReviewsQuery(
    page,
    TAB_PAGE_SIZE,
  );

  const handleLoadMore = () => {
    setPage((prev) => {
      const nextPage = prev + 1;
      return nextPage;
    });
  };

  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>⚠ {error.message} ⚠</div>;
  return (
    <div className="flex flex-col items-center">
      {data && data.length > 0 ? (
        <>
          <ul className="flex flex-col justify-center items-center w-[95.111%]  mx-auto mt-5 ">
            {data?.map((review: MyReview) => (
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
                  {/* <span className="text-black-888"> idididdff****</span> */}
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
                    <dd className="text-pink-main">
                      {review.appointmentScore}
                    </dd>
                  </dl>
                </div>
                <button type="button" className="absolute top-[6.76px] right-0">
                  <img src="/icons/deleteIcon.svg" alt="리뷰 삭제 아이콘" />
                </button>
              </li>
            ))}
          </ul>
          <Button
            onClickFn={handleLoadMore}
            text="더보기"
            styleClass="py-1 px-2 rounded-xl text-black-6  border border-solid border-black-6 "
          />
        </>
      ) : (
        <NoItem text="리뷰를 남길 여행 내역이 존재하지 않습니다." />
      )}
    </div>
  );
};

export default MyReviewTabContent;
