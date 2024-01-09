import Button from "@/app/_component/common/atom/Button";
import React from "react";
import ReservationItem from "./ReservationItem";

const ReservationTabContent = () => {
  return (
    <>
      <ul className="flex flex-col gap-2 justify-start items-center w-[95%]  mx-auto my-4 ">
        <ReservationItem theme="ReservationTab" />
      </ul>
      <Button
        text="더보기"
        styleClass="bg-gray-100 w-full flex justify-center gap-4 z-5  text-center items-center py-2 fixed bottom-[60px] max-w-[500px] w-full"
        icon="/icons/bottomArrowIcon.svg"
      />
    </>
  );
};

export default ReservationTabContent;
