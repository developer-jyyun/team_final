"use client";

import { MyOrder } from "@/app/types";
import useMyOrdersQuery from "@/hooks/query/useMyOrdersQuery";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import canWriteReview from "@/utils/canWriteReview";
import InnerSection from "../../../_component/InnerSection";
import NoItem from "../../../_component/NoItem";
import ReservationItem from "../../../_component/ReservationItem";

const pageSize = 6;

const ReservationMain = () => {
  const {
    data: orderData,
    isFetching,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
  } = useMyOrdersQuery(pageSize, "detail");

  const lastElementRef = useInfiniteScroll(
    fetchNextPage,
    isFetching,
    hasNextPage,
  );

  const totalCount = orderData?.pages[0]?.page?.totalElements ?? 0;
  console.log("orderData:", orderData);

  if (isFetching) return <div>로딩 중...</div>;
  if (isError) return <div>⚠ {error.message} ⚠</div>;

  return (
    <InnerSection
      text="예약 내역"
      backUrl="/my"
      iconSrc="/icons/dotMenuIcon.svg"
      iconUrl="/my/menu"
      iconAlt="메뉴 아이콘"
    >
      <h2 className="font-bold text-black-2 text-lg mb-8">
        총 <span className="text-pink-main ">{totalCount}</span>
        개의 패키지 상품
      </h2>
      {totalCount === 0 ? (
        <div className="flex flex-col items-center justify-center h-[65vh]">
          <NoItem text="예약내역이 존재하지 않습니다." img />
        </div>
      ) : (
        <div className="custom-scrollbar h-[75vh] overflow-y-scroll">
          {orderData?.pages.map((page, pageIndex) => {
            return (
              <ul key={pageIndex}>
                {page.data.map((order: MyOrder) => (
                  <ReservationItem
                    key={order.orderId}
                    orderData={order.package}
                    orderId={order.orderId}
                    theme="reservationMenu"
                    hashTag
                    name
                    canWriteReview={canWriteReview(order.package.travelPeriod)}
                  />
                ))}
              </ul>
            );
          })}
          <li ref={lastElementRef} className="w-full h-20 list-none">
            {isFetching && <div>loading..🎈</div>}
          </li>
        </div>
      )}
    </InnerSection>
  );
};

export default ReservationMain;
