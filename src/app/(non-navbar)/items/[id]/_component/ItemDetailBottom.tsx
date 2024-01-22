"use client";

import BottomSlideModal from "@/app/_component/common/layout/BottomSlideModal";
import type { PackageResponseData, ScheduleResponseData } from "@/app/types";
import useScheduleListQuery from "@/hooks/query/useScheduleListQuery";
import useScrollUp from "@/hooks/useScrollUp";
import usePaymentStore from "@/store/usePaymentStore";
import { UseQueryResult } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import DetailBottomButton from "./DetailBottomButton";
import DetailMoreButton from "./DetailMoreButton";
import DetailTypography from "./DetailTypography";
import StorePerson from "./StorePerson";

interface Props {
  viewMore: boolean;
  setViewMore: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  packageDetail: PackageResponseData;
}

const ItemDetailBottom = ({
  viewMore,
  setViewMore,
  setIsLogin,
  packageDetail,
}: Props) => {
  const router = useRouter();
  const params = useParams();

  const isScrollUp = useScrollUp();
  const paymentStore = usePaymentStore();

  const { data: schedules }: UseQueryResult<ScheduleResponseData, Error> =
    useScheduleListQuery(params.id);

  const [reservation, setReservation] = useState(false);
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);

  const [adultStore, setAdultStore] = useState(1);
  const [infantStore, setInfantStore] = useState(0);
  const [babyStore, setBabyStore] = useState(0);

  const [totalPrice, setTotalPrice] = useState(packageDetail.totalPrice.adult);
  const [error, setError] = useState("");

  const getAailableDate = () => {
    const availableDate = schedules?.data.find((schedule) => {
      return schedule.date === packageDetail.departureDatetime.date;
    });

    return availableDate?.availableDateId;
  };

  useEffect(() => {
    setPortalElement(document.getElementById("portal"));
  }, [reservation]);

  const getAnimation = () => {
    if (!viewMore) return "";

    if (isScrollUp) return "animate-positionTopAnimation";
    else return "animate-positionTopAnimationReverse";
  };

  const handlePayment = () => {
    if (
      adultStore + infantStore + babyStore > packageDetail.reservation.remain ||
      adultStore + infantStore + babyStore < packageDetail.reservation.min
    ) {
      const errorMessage =
        adultStore + infantStore + babyStore > packageDetail.reservation.remain
          ? `최대 ${packageDetail.reservation.remain}명까지 선택 가능합니다.`
          : `최소 ${packageDetail.reservation.min}명 이상 선택해야 합니다.`;

      setError(errorMessage);
    } else if (!packageDetail.myInfo) {
      setIsLogin(true);
    } else {
      const newDepartureDate = packageDetail.departureDatetime.date.split("-");
      const newEndDate = packageDetail.endDatetime.date.split("-");
      paymentStore.setPaymentData({
        availableDateId: getAailableDate() as number,
        packageId: Number(params.id),
        title: packageDetail.title,
        tripDay: `${packageDetail.lodgeDays}박 ${packageDetail.tripDays}일`,
        departureDate: {
          date: `${newDepartureDate[1]}.${newDepartureDate[2]}`,
          dayOfWeek: packageDetail.departureDatetime.dayOfWeek,
        },
        endDate: {
          date: `${newEndDate[1]}.${newEndDate[2]}`,
          dayOfWeek: packageDetail.endDatetime.dayOfWeek,
        },
        adult: adultStore,
        adultPrice: packageDetail.totalPrice.adult,
        infant: infantStore,
        infantPrice: packageDetail.totalPrice.infant,
        baby: babyStore,
        babyPrice: packageDetail.totalPrice.baby,
        totalPrice: totalPrice,
      });
      router.push("/payment");
    }
  };

  return (
    <div
      className={`fixed bottom-0 z-50 ${getAnimation()} w-full web:w-[500px]`}
    >
      {reservation && portalElement
        ? createPortal(
            <BottomSlideModal setReservation={setReservation}>
              <div className="p-4 border-[0.6px] border-solid border-grey-a rounded-lg">
                <div className="flex items-end">
                  <DetailTypography color={3} size={14}>
                    인원선택
                  </DetailTypography>
                  <DetailTypography
                    color={3}
                    size={10}
                    styleClass="mb-[1px] ml-1 web:mb-1"
                  >
                    (필수)
                  </DetailTypography>
                </div>
                <div className="mb-3">
                  <DetailTypography color="red" size={10}>
                    {error}
                  </DetailTypography>
                </div>
                <StorePerson
                  text="성인"
                  subText="(만 12세 이상)"
                  store={adultStore}
                  price={packageDetail.totalPrice.adult}
                  setStore={setAdultStore}
                  setTotalPrice={setTotalPrice}
                />
                <StorePerson
                  text="소아"
                  subText="(만 12세 미만)"
                  store={infantStore}
                  price={packageDetail.totalPrice.infant}
                  setStore={setInfantStore}
                  setTotalPrice={setTotalPrice}
                />
                <StorePerson
                  text="유아"
                  subText="(만 2세 미만)"
                  store={babyStore}
                  price={packageDetail.totalPrice.baby}
                  setStore={setBabyStore}
                  setTotalPrice={setTotalPrice}
                />
                <DetailTypography color={8} size={10} styleClass="mb-1">
                  *유류할증료 및 제세공과금은 발권일/환율에 따라 변경될 수
                  있습니다.
                </DetailTypography>
              </div>
              <div className="w-full h-[1px] bg-grey-c my-4" />
              <div className="flex justify-between mb-4">
                <DetailTypography color={4} size={14} bold={600}>
                  금액
                </DetailTypography>
                <DetailTypography color={1} size={14} bold={700}>
                  {totalPrice.toLocaleString()}원
                </DetailTypography>
              </div>
              <button
                type="button"
                className="w-full h-[40px] bg-pink rounded-lg text-white text-lg font-bold web:h-[50px]"
                onClick={handlePayment}
              >
                결제하기
              </button>
            </BottomSlideModal>,
            portalElement,
          )
        : null}
      {viewMore || <DetailMoreButton setViewMore={setViewMore} />}
      <DetailBottomButton
        viewMore={viewMore}
        setReservation={setReservation}
        setViewMore={setViewMore}
      />
    </div>
  );
};

export default ItemDetailBottom;
