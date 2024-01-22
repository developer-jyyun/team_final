"use client";

import { MyOrder } from "@/app/types";
import useMyOrdersQuery from "@/hooks/query/useMyOrdersQuery";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
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

  if (isFetching) return <div>로딩 중...</div>;
  if (isError) return <div>⚠ {error.message} ⚠</div>;

  if (orderData.pages.every((page) => page.data.data.length === 0)) {
    console.log("예약내역 확인", orderData);
    return <NoItem text="예약내역이 존재하지 않습니다." />;
  }

  return (
    <div className="flex flex-col items-center h-[45vh] overflow-y-scroll mt-5">
      {orderData?.pages.map((page, pageIndex) =>
        Array.isArray(page.data) ? (
          <ul
            key={pageIndex}
            className="flex flex-col gap-2 justify-start items-center w-[95.111%] mx-auto"
          >
            {page.data.data.map((order: MyOrder) => (
              <ReservationItem
                // TODO::
                key={order.orderId}
                // key={order.orderCode}
                theme="reservationTab"
                hashTag
                orderData={order.package}
                // TODO:: orderId추가
                orderId={order.orderId}
              />
            ))}
          </ul>
        ) : null,
      )}
      <li ref={lastElementRef} className="w-full h-20 list-none">
        {isFetching && <div>loading..🎈</div>}
      </li>
    </div>
  );
};

export default ReservationTabContent;
