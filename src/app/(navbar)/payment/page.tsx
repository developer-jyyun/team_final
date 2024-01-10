import React from "react";
import ProgressBar from "./_component/ProgressBar";
import TopStatus from "./_component/TopStatus";
import ReservationInfo from "./_component/ReservationInfo";

const payment = () => {
  return (
    <section>
      <TopStatus />
      <div className="sticky top-0">
        <ProgressBar progress={100} />
      </div>
      <ReservationInfo />
    </section>
  );
};

export default payment;
