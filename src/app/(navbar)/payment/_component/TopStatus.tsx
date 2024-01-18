import React from "react";

interface Props {
  isReservationComplete: boolean;
}

const TopStatus = ({ isReservationComplete }: Props) => {
  return (
    <div className="flex justify-between px-4 mt-2 mb-1 font-semibold text-xs">
      <div>
        <span
          className={`text-pink ${isReservationComplete ? "opacity-0" : ""}`}
        >
          예약자 정보 입력
        </span>
      </div>
      <div className="mr-4">
        <span
          className={`text-pink ${!isReservationComplete ? "opacity-0" : ""}`}
        >
          예약완료
        </span>
      </div>
    </div>
  );
};

export default TopStatus;
