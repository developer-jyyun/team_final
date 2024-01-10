"use client";

import React, { useState } from "react";
import ProgressBar from "./_component/ProgressBar";
import TopStatus from "./_component/TopStatus";
import ReservationInfo from "./_component/ReservationInfo";
import ReservationDone from "./_component/ReservationDone";

const Payment = () => {
  const [isReservationComplete, setIsReservationComplete] = useState(false);

  const handleReservationComplete = () => {
    setIsReservationComplete(true);
  };

  return (
    <section>
      <TopStatus isReservationComplete={isReservationComplete} />
      <div className="sticky top-0">
        <ProgressBar progress={100} />
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
