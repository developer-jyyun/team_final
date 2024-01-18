"use client";

import useScheduleDateStore from "@/store/useScheduleDateStore";
import ReplaceHyphenWithDot from "@/utils/ReplaceHyphenWithDot";
import { useRouter, useParams } from "next/navigation";

const SelectedProduct = () => {
  const router = useRouter();
  const params = useParams();
  const scheduleDate = useScheduleDateStore();

  const handleSelect = () => {
    if (scheduleDate.date) {
      router.push(`/items/${params.id}?departDate=${scheduleDate.date}`);
    } else {
      router.push(`/items/${params.id}`);
    }
  };

  if (scheduleDate.data === null) {
    return (
      <div className="flex flex-col justify-end grow -translate-y-2 web:-translate-y-2">
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
        <button
          type="button"
          className="w-full h-[46px] web:h-[56px] mt-4 disabled:bg-grey-c hover:bg-[#bb1e4a] bg-pink disabled:text-black-8 text-white font-bold rounded-xl"
        >
          선택 완료
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-end grow -translate-y-2 web:-translate-y-2">
      <h1 className="text-black-4 text-xs font-normal py-1 web:text-base">
        선택된 상품
      </h1>
      <div className="flex">
        <div className="w-[60px] h-[60px] mr-[14px] rounded-md overflow-hidden">
          <img
            src={scheduleDate.data.imageUrls[0]}
            alt="여행 상품 메인"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div>
            <span className="text-black-2 font-medium mr-3 web:text-lg">
              {ReplaceHyphenWithDot(scheduleDate.data.departureDatetime.date)}
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
      <button
        type="button"
        className="w-full h-[46px] web:h-[56px] mt-4 disabled:bg-grey-c hover:bg-[#bb1e4a] bg-pink disabled:text-black-8 text-white font-bold rounded-xl"
        onClick={handleSelect}
      >
        선택 완료
      </button>
    </div>
  );
};

export default SelectedProduct;
