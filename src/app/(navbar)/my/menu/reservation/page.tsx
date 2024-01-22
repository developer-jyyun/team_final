"use client";

import useMyOrdersQuery from "@/hooks/query/useMyOrdersQuery";
import { MyOrder } from "@/app/types";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import InnerSection from "../../_component/InnerSection";
import ReservationItem from "../../_component/ReservationItem";

const pageSize = 10;

const ReservationPage = () => {
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
        총<span className="text-pink-main ">{totalCount}</span>
        개의 패키지 상품
      </h2>
      <ul>
        {orderData?.pages.map((page) =>
          page.data.map((order: MyOrder) => (
            <ReservationItem
              key={order.orderCode}
              orderData={order.package}
              theme="reservationMenu"
              hashTag
            />
          )),
        )}
        <li ref={lastElementRef} className="w-full h-20 list-none">
          {isFetching && <div>loading..🎈</div>}
        </li>
      </ul>
    </InnerSection>
  );
};

export default ReservationPage;
