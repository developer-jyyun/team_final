"use client";

import useScheduleDateStore from "@/store/useScheduleDateStore";

const SelectedProduct = () => {
  const scheduleDate = useScheduleDateStore();

  const formatSelectedItemDate = (date: string) => {
    return date.replace(/-/g, ".");
  };

  if (scheduleDate.data === null) {
    return (
      <div className="flex flex-col justify-end grow -translate-y-16 web:-translate-y-11">
        <h1 className="text-black-4 text-xs font-normal py-1 web:text-base">
          선택된 상품
        </h1>
        <div className="flex animate-pulse">
          <div className="w-[60px] h-[60px] mr-[14px] bg-grey-d rounded-md" />
          <div className="flex flex-col justify-center">
            <div className="w-[180px] h-[25px] bg-grey-d rounded-md mb-1" />
            <div className="w-[190px] h-[25px] bg-grey-d rounded-md" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-end grow -translate-y-16 web:-translate-y-11">
      <h1 className="text-black-4 text-xs font-normal py-1 web:text-base">
        선택된 상품
      </h1>
      <div className="flex">
        <div className="w-[60px] h-[60px] mr-[14px]">
          <img src="/assets/signupComplete.png" alt="여행 상품 메인" />
        </div>
        <div className="flex flex-col justify-center">
          <div>
            <span className="text-black-2 font-medium mr-3 web:text-lg">
              {formatSelectedItemDate(scheduleDate.data.departureDatetime.date)}
            </span>
            <span className="text-black-4 text-xs web:text-sm">
              {scheduleDate.data.departureDatetime.time} 출발
            </span>
          </div>
          <div className="text-pink-main text-lg font-semibold web:text-xl">
            {scheduleDate.data.totalPrice.adult.toLocaleString()}원 (
            {scheduleDate.data.lodgeDays}박 {scheduleDate.data.tripDays}일)
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedProduct;
