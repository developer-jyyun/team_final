"use client";

import { MyOrder } from "@/app/types";
import useMyOrdersQuery from "@/hooks/query/useMyOrdersQuery";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import canWriteReview from "@/utils/canWriteReview";
import ReservationItem from "./ReservationItem";
import NoItem from "./NoItem";
import Skeleton from "./Skeleton";

const pageSize = 3;
const ReservationTabContent = () => {
  const {
    data: orderData,
    isLoading,
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
  const totalCount = orderData?.pages[0]?.page?.totalElements ?? 0;

  if (totalCount === 0) {
    return <NoItem text="예약내역이 존재하지 않습니다." img />;
  }

  if (isLoading) {
    return (
      <>
        {Array.from({ length: 3 }, (_, index) => (
          <Skeleton key={index} />
        ))}
      </>
    );
  }

  if (isError) {
    return <div>⚠ {error.message} ⚠</div>;
  }
  return (
    <div className="custom-scrollbar flex flex-col items-center h-[39vh] overflow-y-scroll pt-5 web:h-[43vh]">
      {orderData?.pages.map((page, pageIndex) => (
        <ul
          key={pageIndex}
          className="flex flex-col gap-2 justify-start items-center w-[95.111%] mx-auto"
        >
          {page.data.map((order: MyOrder) => (
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
      ))}

      <div
        ref={lastElementRef}
        className=" w-full h-20 p-2 text-center text-black-8"
      >
        {isFetching || (hasNextPage && <Skeleton />)}

        {!isFetching && !hasNextPage && (
          <div className="mt-4 p-4">마지막 목록입니다!</div>
        )}
      </div>
    </div>
  );
};

export default ReservationTabContent;
