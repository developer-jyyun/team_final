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

  if (orderData?.pages.every((page) => page.data.length === 0)) {
    return <NoItem text="예약내역이 존재하지 않습니다." />;
  }

  return (
    <div className="flex flex-col items-center h-[45vh] overflow-y-scroll mt-5">
      {orderData?.pages.map((page, pageIndex) => (
        <ul
          key={pageIndex}
          className="flex flex-col gap-2 justify-start items-center w-[95.111%] mx-auto"
        >
          {page.data.map((order: MyOrder) => (
            <ReservationItem
              key={order.orderCode}
              theme="reservationTab"
              hashTag
              orderData={order.package}
            />
          ))}
        </ul>
      ))}
      <li ref={lastElementRef} className="w-full h-20 list-none">
        {isFetching && <div>loading..🎈</div>}
      </li>
    </div>
  );
};

export default ReservationTabContent;
