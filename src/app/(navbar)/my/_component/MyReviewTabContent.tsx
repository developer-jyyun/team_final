"use client";

import Button from "@/app/_component/common/atom/Button";

const averageScore = 3.5;

const MyReviewTabContent = () => {
  return (
    <div className="flex flex-col items-center">
      <ul className="flex flex-col justify-center items-center w-[95.111%]  mx-auto mt-5 ">
        <li className="w-full flex flex-col gap-3 mb-[29px] relative">
          <h2 className="font-semibold text-md max-w-[93%] truncate">
            일이삼사오육칠팔구십 일이삼사오육칠팔구십일이삼
          </h2>
          <div className="flex gap-[23px] items-center text-xs">
            <div className="flex gap-1">
              <img src="/icons/starIconMini.svg" alt="별 아이콘" />
              <span className="text-black-222">{averageScore}</span>
            </div>
            <span className="text-black-888"> idididdff****</span>
            <span className="text-black-888"> 2024.01.01</span>
          </div>
          <div className="flex gap-[6px] text-xxs  font-medium">
            <dl className="flex gap-1 p-1 rounded-xl bg-pink-transparent">
              <dt className="text-black-4 ">상품구성</dt>
              <dd className="text-pink"> 4</dd>
            </dl>
            <dl className="flex gap-1 p-1 rounded-xl bg-pink-transparent">
              <dt className="text-black-6">가이드 친절도</dt>
              <dd className="text-pink"> 5</dd>
            </dl>

            <dl className="flex gap-1 p-1 rounded-xl bg-pink-transparent">
              <dt className="text-black-6">일정구성</dt>
              <dd className="text-pink"> 5</dd>
            </dl>

            <dl className="flex gap-1 p-1 rounded-xl bg-pink-transparent">
              <dt className="text-black-6">가이드 시간/일정준수</dt>
              <dd className="text-pink"> 4</dd>
            </dl>
          </div>
          <button type="button" className="absolute top-[6.76px] right-0">
            <img src="/icons/deleteIcon.svg" alt="리뷰 삭제 아이콘" />
          </button>
        </li>
      </ul>
      <Button
        text="더보기"
        styleClass="py-1 px-2 rounded-xl text-black-6  border border-solid border-black-6 "
      />
    </div>
  );
};

export default MyReviewTabContent;
