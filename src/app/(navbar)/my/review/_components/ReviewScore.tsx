"use client";

import React, { useEffect, useState } from "react";
import RangeSlider from "./RangeSlider";
import StarScore from "./StarScore";

interface Props {
  productScore: number;
  setProductScore: React.Dispatch<React.SetStateAction<number>>;
  scheduleScore: number;
  setScheduleScore: React.Dispatch<React.SetStateAction<number>>;
  friendlinessScore: number;
  setFriendlinessScore: React.Dispatch<React.SetStateAction<number>>;
  appointmentScore: number;
  setAppointmentScore: React.Dispatch<React.SetStateAction<number>>;
}

const ReviewScore = ({
  productScore,
  setProductScore,
  scheduleScore,
  setScheduleScore,
  friendlinessScore,
  setFriendlinessScore,
  appointmentScore,
  setAppointmentScore,
}: Props) => {
  const [averageScore, setAverageScore] = useState(0);

  useEffect(() => {
    const calculateScore = () => {
      return (
        (productScore + scheduleScore + friendlinessScore + appointmentScore) /
        4
      );
    };
    setAverageScore(calculateScore());
  }, [productScore, scheduleScore, friendlinessScore, appointmentScore]);

  return (
    <div>
      <StarScore averageScore={averageScore} />
      <ul className="flex flex-col gap-4 px-1 py-4 mt-6">
        <li className="relative flex justify-between items-center">
          <span className="text-black-4 font-semibold text-xs">상품구성</span>
          <div className="w-2/3   absolute left-[25%]">
            <RangeSlider
              value={productScore}
              onChange={setProductScore}
              max={5}
              min={0}
              step={1}
            />
          </div>
          <span className="text-black-6 font-semibold text-xxs">
            {productScore}
          </span>
        </li>

        <li className="relative flex justify-between items-center">
          <span className="text-black-4 font-semibold text-xs">일정구성</span>
          <div className="w-2/3  absolute left-[25%]">
            <RangeSlider
              value={scheduleScore}
              onChange={setScheduleScore}
              max={5}
              min={0}
              step={1}
            />
          </div>
          <span className="text-black-6 font-semibold text-xxs">
            {scheduleScore}
          </span>
        </li>
        <li className="relative flex justify-between items-center">
          <span className="text-black-4 font-semibold text-xs">
            가이드친절도
          </span>
          <div className="w-2/3 absolute left-[25%]">
            <RangeSlider
              value={friendlinessScore}
              onChange={setFriendlinessScore}
              max={5}
              min={0}
              step={1}
            />
          </div>
          <span className="text-black-6 font-semibold text-xxs">
            {friendlinessScore}
          </span>
        </li>
        <li className="relative flex justify-between items-center">
          <span className="text-black-4 font-semibold text-xs">
            가이드 시간
            <br />
            일정준수
          </span>
          <div className="w-2/3 absolute left-[25%]">
            <RangeSlider
              value={appointmentScore}
              onChange={setAppointmentScore}
              max={5}
              min={0}
              step={1}
            />
          </div>
          <span className="text-black-6 font-semibold text-xxs">
            {appointmentScore}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default ReviewScore;
