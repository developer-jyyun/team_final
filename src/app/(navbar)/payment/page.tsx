"use client";

import React, { useState } from "react";
import DefaultHeader from "@/app/_component/common/layout/DefaultHeader";
import ProgressBar from "./_component/ProgressBar";
import TopStatus from "./_component/TopStatus";
import ReservationInfo from "./_component/ReservationInfo";
import ReservationDone from "./_component/ReservationDone";

const Payment = () => {
  const [isReservationComplete, setIsReservationComplete] = useState(false);

  const handleReservationComplete = () => {
    setIsReservationComplete(true);
  };

  const progress = isReservationComplete ? 100 : 50;

  return (
    <section>
      <DefaultHeader text="" redirectUrl="/" theme="main" />
      <TopStatus isReservationComplete={isReservationComplete} />
      <div className="sticky top-0">
        <ProgressBar progress={progress} />
      </div>
      {isReservationComplete ? (
        <ReservationDone />
      ) : (
        <ReservationInfo onComplete={handleReservationComplete} />
      )}
    </section>
  );
};

export default Payment;
