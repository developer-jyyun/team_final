import React from "react";

interface Props {
  isReservationComplete: boolean;
}

const TopStatus = ({ isReservationComplete }: Props) => {
  return (
    <div className="flex justify-around my-2 font-bold">
      <span className={isReservationComplete ? "text-grey-3" : "text-pink"}>
        예약자 정보 입력
      </span>
      <span className={isReservationComplete ? "text-pink" : "text-grey-3"}>
        예약완료
      </span>
    </div>
  );
};

export default TopStatus;
