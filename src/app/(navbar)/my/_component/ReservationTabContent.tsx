"use client";

import Button from "@/app/_component/common/atom/Button";
import React, { useState } from "react";
import { MyOrder } from "@/app/types";
import useMyOrdersQuery from "@/hooks/query/useMyOrdersQuery";
import { TAB_PAGE_SIZE } from "@/app/constants";
import ReservationItem from "./ReservationItem";
import NoItem from "./NoItem";

const ReservationTabContent = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, error } = useMyOrdersQuery(
    page,
    TAB_PAGE_SIZE,
  );

  const handleLoadMore = () => {
    setPage((prev) => {
      const nextPage = prev + 1;
      return nextPage;
    });
  };

  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>⚠ {error.message} ⚠</div>;
  return (
    <div className="flex flex-col items-center">
      {data && data.length > 0 ? (
        <>
          <ul className="flex flex-col gap-2 justify-start items-center w-[95.111%]  mx-auto mt-5 ">
            {data?.map((order: MyOrder) => (
              <ReservationItem
                key={order.orderCode}
                theme="reservationTab"
                hashTag
                orderData={order.package}
              />
            ))}
          </ul>
          <Button
            onClickFn={handleLoadMore}
            text="더보기"
            styleClass="mt-8 py-1 px-2 rounded-xl text-black-6  border border-solid border-black-6 "
          />
        </>
      ) : (
        <NoItem text="예약내역이 존재하지 않습니다." />
      )}
    </div>
  );
};

export default ReservationTabContent;
