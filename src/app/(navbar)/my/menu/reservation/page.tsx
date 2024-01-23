"use client";

import useMyOrdersQuery from "@/hooks/query/useMyOrdersQuery";
import { MyOrder } from "@/app/types";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import InnerSection from "../../_component/InnerSection";
import ReservationItem from "../../_component/ReservationItem";
import NoItem from "../../_component/NoItem";

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

  const totalCount = orderData?.pages[0]?.data.page?.totalElements ?? 0;
  console.log("orderData:", orderData);

  if (isFetching) return <div>로딩 중...</div>;
  if (isError) return <div>⚠ {error.message} ⚠</div>;
  if (
    orderData?.pages.every(
      (page) => !Array.isArray(page.data.data) || page.data.data.length === 0,
    )
  ) {
    return (
      <InnerSection
        text="예약 내역"
        backUrl="/my"
        iconSrc="/icons/dotMenuIcon.svg"
        iconUrl="/my/menu"
        iconAlt="메뉴 아이콘"
      >
        <div className="flex flex-col items-center justify-center h-[65vh]">
          <NoItem text="예약내역이 존재하지 않습니다." />
        </div>
      </InnerSection>
    );
  }
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
      <ul>
        {orderData?.pages.map((page) => {
          if (!Array.isArray(page.data.data)) {
            // 데이터가 배열이 아닌 경우 처리
            return null;
          }
          return page.data.data.map((order: MyOrder) => (
            <ReservationItem
              // key={order.orderId}
              key={order.orderCode}
              orderData={order.package}
              orderId={order.orderCode}
              // TODO:api에 orderId 추가된 이후 변경
              // orderId={order.orderId}
              theme="reservationMenu"
              hashTag
            />
          ));
        })}
        <li ref={lastElementRef} className="w-full h-20 list-none">
          {isFetching && <div>loading..🎈</div>}
        </li>
      </ul>
    </InnerSection>
  );
};

export default ReservationPage;
