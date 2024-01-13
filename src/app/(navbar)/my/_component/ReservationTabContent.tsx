import Button from "@/app/_component/common/atom/Button";
import React from "react";
import ReservationItem from "./ReservationItem";

const ReservationTabContent = () => {
  return (
    <div className="flex flex-col items-center">
      <ul className="flex flex-col gap-2 justify-start items-center w-[95.111%]  mx-auto mt-5 ">
        <ReservationItem theme="reservationTab" hashTag />
      </ul>
      <Button
        text="더보기"
        styleClass="mt-8 py-1 px-2 rounded-xl text-black-6  border border-solid border-black-6 "
      />
    </div>
  );
};

export default ReservationTabContent;
