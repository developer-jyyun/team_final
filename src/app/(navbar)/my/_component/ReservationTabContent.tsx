"use client";

import { MyOrder } from "@/app/types";
import useMyOrdersQuery from "@/hooks/query/useMyOrdersQuery";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import useSortedOrderList from "@/hooks/useSortedOrderList";
import canWriteReview from "@/utils/canWriteReview";
import ReservationItem from "./ReservationItem";
import NoItem from "./NoItem";

const pageSize = 3;
const ReservationTabContent = () => {
  const {
    data: orderData,
    isFetching,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
  } = useMyOrdersQuery(pageSize, "tab");

  const lastElementRef = useInfiniteScroll(
    fetchNextPage,
    isFetching,
    hasNextPage,
  );
  const { sortedOrders } = useSortedOrderList(pageSize, "detail");

  if (orderData?.pages.every((page) => page.data.length === 0)) {
    return <NoItem text="예약내역이 존재하지 않습니다." />;
  }

  console.log("예약내역 확인", orderData);

  return (
    <div className="custom-scrollbar flex flex-col items-center h-[39vh] overflow-y-scroll pt-5 web:h-[43vh]">
      {orderData?.pages.map((page, pageIndex) =>
        Array.isArray(page.data) ? (
          <ul
            key={pageIndex}
            className="flex flex-col gap-2 justify-start items-center w-[95.111%] mx-auto"
          >
            {sortedOrders.map((order: MyOrder) => (
              <ReservationItem
                key={order.orderId}
                theme="reservationTab"
                hashTag
                orderData={order.package}
                orderId={order.orderId}
                canWriteReview={canWriteReview(order.package.travelPeriod)}
              />
            ))}
          </ul>
        ) : null,
      )}
      <div
        ref={lastElementRef}
        className=" w-full h-20 p-2 text-center text-black-8"
      >
        {isFetching || (hasNextPage && <div>loading..🎈</div>)}

        {!isFetching && !hasNextPage && <div>마지막 목록입니다 😊</div>}
        {isError && <div>⚠ {error.message} ⚠</div>}
      </div>
    </div>
  );
};

export default ReservationTabContent;
