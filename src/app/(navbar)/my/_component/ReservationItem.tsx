import Button from "@/app/_component/common/atom/Button";
import Link from "next/link";
import { MyOrderPackage } from "@/app/types";
import Chip from "./Chip";
import ReviewButton from "./ReviewButton";

interface Props {
  theme: string;
  hashTag?: boolean;
  orderData?: MyOrderPackage;
  orderId?: number;
  canWriteReview?: boolean;
}

const ReservationItem = ({
  orderData,
  theme,
  hashTag,
  orderId,
  canWriteReview,
}: Props) => {
  if (!orderData) {
    return null;
  }
  // 리뷰 작성 가능
  if (orderData && !orderData.isReviewed && canWriteReview) {
    return (
      <li className="mb-6 w-full h-[90px] relative  flex flex-row gap-1 justify-evenly web:h-[120px]">
        <div className="w-[90px] h-[90px] shrink-0 rounded-lg overflow-hidden web:w-[120px] web:h-[120px]">
          <img
            className="w-full h-full object-cover"
            src={orderData.imageUrl}
            alt={orderData.title}
          />
        </div>
        <div className="w-2/3  flex flex-col justify-evenly gap-2 ">
          <p className="flex flex-row items-center max-w-[90%] ">
            <span className="font-medium text-lg text-black-2 leaing-3 truncate">
              {orderData.title}
            </span>
          </p>
          <div className="">
            {hashTag && (
              <Chip
                chipData={orderData.hashtags}
                name={orderData.nationName}
                gap="gap-x-1"
              />
            )}
          </div>
          {/* 메뉴 예약 목록에만 노출 */}
          {theme === "reservationMenu" && (
            <div className="flex justify-start items-center text-[11px] gap-2 web:gap-6">
              <span className="text-red-1 text-xxs web:text-sm ">
                {orderData.lodgeDays}박 {orderData.tripDays}일
              </span>
              <span className="text-red-1 text-xs font-medium web:text-sm ">
                {orderData.travelPeriod}
              </span>
              <Link href={`/items/${orderData.packageId}`}>
                <Button
                  text="전체 보기"
                  styleClass="rounded-lg text-xs py-1 px-2 bg-pink-main text-white mb-0.5"
                />
              </Link>
            </div>
          )}

          {/* 리뷰 작성 가능한 리뷰 탭 경우 */}
          {theme === "reservationTab" && (
            <ReviewButton orderId={orderId} packageId={orderData.packageId} />
          )}
        </div>
      </li>
    );
  }

  // 리뷰 작성 불가 탭
  if (theme === "reservationTab" && (orderData.isReviewed || !canWriteReview)) {
    return (
      <li className=" mb-6 w-full h-[90px] relative flex flex-row gap-1 justify-evenly web:h-[120px]">
        <div className="w-[90px] h-[90px] shrink-0 rounded-lg overflow-hidden web:w-[120px]">
          <img
            className="w-full h-full object-cover grayscale "
            src={orderData.imageUrl}
            alt={orderData.title}
          />
        </div>
        <div className="w-2/3  flex flex-col justify-evenly gap-2 ">
          <p className="flex flex-row items-center max-w-[90%] ">
            <span className="font-medium text-lg text-black-9 leaing-3 truncate">
              {orderData.title}
            </span>
          </p>
          <div>
            {hashTag && (
              <Chip
                chipData={orderData.hashtags}
                name={orderData.nationName}
                gap="gap-x-1"
                borderColor="border-grey-c"
                textColor="grey-c"
              />
            )}
          </div>
          {orderData.isReviewed && (
            <Button
              text="리뷰 작성 완료"
              styleClass="w-full rounded-xl text-xs font-semibold p-1 bg-grey-c text-white"
              disabled
            />
          )}
          {!orderData.isReviewed && !canWriteReview && (
            <Button
              text="리뷰 작성 기간 만료"
              styleClass="w-full rounded-xl text-xs font-semibold p-1 bg-grey-c text-white"
              disabled
            />
          )}
        </div>
      </li>
    );
  }

  // 리뷰 작성 불가 메뉴
  if (
    theme === "reservationMenu" &&
    (orderData.isReviewed || !canWriteReview)
  ) {
    return (
      <li className="mb-6 w-full h-[90px] relative  flex flex-row gap-1 justify-evenly web:h-[120px]">
        <div className="w-[90px] h-[90px] shrink-0 rounded-lg overflow-hidden web:w-[120px]">
          <img
            className="w-full h-full object-cover"
            src={orderData.imageUrl}
            alt={orderData.title}
          />
        </div>
        <div className="w-2/3  flex flex-col justify-evenly gap-2 ">
          <p className="flex flex-row items-center max-w-[90%] ">
            <span className="font-medium text-lg text-black-2 leaing-3 truncate">
              {orderData.title}
            </span>
          </p>
          <div className="">
            {hashTag && (
              <Chip
                chipData={orderData.hashtags}
                name={orderData.nationName}
                gap="gap-x-1"
              />
            )}
          </div>

          <div className="flex justify-start items-center text-[11px] gap-2 web:gap-6">
            <span className="text-red-1 text-xxs web:text-sm ">
              {orderData.lodgeDays}박 {orderData.tripDays}일
            </span>
            <span className="text-red-1 text-xs font-medium web:text-sm ">
              {orderData.travelPeriod}
            </span>
            <Link href={`/items/${orderData.packageId}`}>
              <Button
                text="전체 보기"
                styleClass="rounded-lg text-xs py-1 px-2 bg-pink-main text-white mb-0.5"
              />
            </Link>
          </div>
        </div>
      </li>
    );
  }
  return null;
};

export default ReservationItem;
