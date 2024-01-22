"use client";

import DefaultHeader from "@/app/_component/common/layout/DefaultHeader";
import useOrderMutation from "@/hooks/query/useOrderMutation";
import usePaymentStore from "@/store/usePaymentStore";
// import { useRouter } from "next/navigation";
import { useState } from "react";
import ReservationDone from "./ReservationDone";
import ReservationInfo from "./ReservationInfo";
import TopStatus from "./TopStatus";

export interface CompleteData {
  orderCode: number;
  myInfo: {
    username: string;
    email: string;
  };
}

const PaymentMain = () => {
  // const router = useRouter();

  const { paymentData } = usePaymentStore();
  const [isReservationComplete, setIsReservationComplete] = useState(false);
  const [messageValue, setMessageValue] = useState("");
  const [complete, setComplete] = useState<CompleteData | null>(null);

  const [errorMessage, setErrorMessage] = useState("");

  const { mutateAsync } = useOrderMutation({
    packageId: paymentData.packageId as number,
    availableDateId: paymentData.availableDateId as number,
    requestMessage: messageValue,
    cancelFeeAgreement: true,
    numberOfPeople: {
      adult: paymentData.adult,
      infant: paymentData.infant,
      baby: paymentData.baby,
    },
  });

  if (!paymentData.packageId) {
    // router.push("/");

    return <div>없음</div>;
  }

  const handleReservationComplete = async () => {
    const res = await mutateAsync();

    if (res.code === 200) {
      setErrorMessage("");
      setIsReservationComplete(true);
      setComplete(res.data);
    } else {
      setErrorMessage(res.message);
    }
  };

  return (
    <>
      <DefaultHeader text="" redirectUrl="/" theme="main" />
      <TopStatus isReservationComplete={isReservationComplete} />
      {isReservationComplete ? (
        <ReservationDone complete={complete as CompleteData} />
      ) : (
        <ReservationInfo
          onComplete={handleReservationComplete}
          messageValue={messageValue}
          setMessageValue={setMessageValue}
        />
      )}
      <p className="text-center -translate-y-6 text-red">{errorMessage}</p>
    </>
  );
};

export default PaymentMain;
