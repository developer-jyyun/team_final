import React from "react";
import Image from "next/image";
import CheckIcon from "../../../../../public/icons/checkIcon3.svg";

const ReservationDone = () => {
  return (
    <div className="mx-4">
      <div className="mt-10 mb-5">
        <h3 className="flex">
          <Image src={CheckIcon} alt="완료 아이콘" className="mr-2" />
          예약이 정상적으로 접수되었습니다.
        </h3>
      </div>
      <div
        className="p-4 bg-pink-2
     rounded-lg"
      >
        <div className="flex gap-12 items-center my-2 ml-3">
          <span className="min-w-max mr-3 text-xs text-black-4 font-normal">
            예약번호
          </span>
          <p className="ml-3 text-sm text-black-2 font-semibold">
            2023122610352
          </p>
        </div>
        <div className="flex gap-12 my-3 ml-3">
          <span className="min-w-max mr-3 text-xs text-black-4 font-normal">
            예약자 정보
          </span>
          <div className="flex flex-col leading-normal">
            <p className="text-sm text-black-2 font-semibold">위너원</p>
            <p className="text-sm text-black-2 font-semibold">010-8765-4321</p>
            <p className="text-sm text-black-2 font-semibold">
              Lets@winner.one
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10 ml-2">
        <h4 className="text-black-4 text-sm font-semibold">
          예약하기가 완료되셨나요?
          <strong className="ml-1 text-black-6 text-xs font-normal">
            (예약하기 이후 단계입니다.)
          </strong>
        </h4>
      </div>
      <div className="mt-3 px-6 py-3 bg-grey-transparent rounded-lg">
        <div className="mb-2">
          <span className="mr-3 py-1 px-2 border border-grey-d rounded-xl bg-white text-black-5 text-sm font-light">
            STEP 1
          </span>
          <span className="text-black-5 text-sm font-semibold">
            예약접수 / 완료 (현재단계)
          </span>
        </div>
        <div className="mb-2">
          <span className="mr-3 py-1 px-2 border border-grey-d rounded-xl bg-white text-black-5 text-sm font-light">
            STEP 2
          </span>
          <span className="text-black-5 text-sm font-semibold">
            예약접수 / 완료 (현재단계)
          </span>
        </div>
        <div className="mb-2">
          <span className="mr-3 py-1 px-2 border border-grey-d rounded-xl bg-white text-black-5 text-sm font-light">
            STEP 3
          </span>
          <span className="text-black-5 text-sm font-semibold">상품 결제</span>
        </div>
        <div className="mb-2">
          <span className="mr-3 py-1 px-2 border border-grey-d rounded-xl bg-white text-black-5 text-sm font-light">
            STEP 4
          </span>
          <span className="text-black-5 text-sm font-semibold">예약 확정</span>
        </div>
        <div className="mb-2">
          <span className="mr-3 py-1 px-2 border border-grey-d rounded-xl bg-white text-black-5 text-sm font-light">
            STEP 5
          </span>
          <span className="text-black-5 text-sm font-semibold">출발</span>
        </div>
      </div>
    </div>
  );
};

export default ReservationDone;
