import Button from "@/app/_component/common/atom/Button";
import Link from "next/link";
import { MyOrderPackage } from "@/app/types";
import Chip from "./Chip";

interface Props {
  theme: string;
  hashTag?: boolean;
  orderData?: MyOrderPackage;
}
const ReservationItem = ({ orderData, theme, hashTag }: Props) => {
  return (
    orderData && (
      <li className="mb-6 w-full h-[90px] relative  flex flex-row justify-between gap-[18px]">
        <div className="w-[90px] shrink-0 rounded-lg overflow-hidden">
          <img
            className="w-full h-full"
            src={orderData.imageUrl}
            alt={orderData.title}
          />
        </div>
        <div className="w-2/3  flex flex-col justify-center web:w-full">
          <p className="flex flex-row items-center gap-10 max-w-[90%] ">
            <span className="font-medium text-lg text-black-2 truncate ">
              {orderData.title}
            </span>
          </p>
          <div className="mt-2.5 mb-3">
            {hashTag && <Chip chipData={orderData.hashtags} gap="gap-1" />}
          </div>
          {theme === "reservationMenu" && (
            <div
              className="flex justify-start items-center text-[11px] 
      gap-2 web:gap-6"
            >
              <span className="text-red-1 text-xxs web:text-sm ">
                {orderData.lodgeDays}박 {orderData.tripDays}일
              </span>
              <span className="text-red-1 text-xs font-medium web:text-sm ">
                {orderData.travelPeriod}
              </span>
              <Button
                text="전체 보기"
                styleClass="rounded-lg text-xs py-1 px-2 bg-pink-main text-white mb-0.5"
                // TODO::상세페이지 이동
              />
            </div>
          )}
          {theme === "reservationTab" && orderData.reviewed === false && (
            <Link href="/my/review">
              <Button
                text="리뷰 쓰러 가기"
                styleClass="w-full rounded-xl text-xs font-semibold
          p-1 bg-pink text-white"
                // TODO:: 목록 이동
              />
            </Link>
          )}
          {theme === "review" && (
            <p className="text-black-6 font-medium text-sm ">
              gggggggggg{orderData.travelPeriod}
            </p>
          )}
        </div>
      </li>
    )
  );
};

export default ReservationItem;
