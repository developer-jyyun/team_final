import { MyOrder } from "@/app/types";
import sortOrderList from "@/utils/sortOrderList";
import useMyOrdersQuery from "./query/useMyOrdersQuery";

const useSortedOrderList = (pageSize: number, queryKey: string) => {
  const { data: orderData, ...rest } = useMyOrdersQuery(pageSize, queryKey);

  let sortedOrders: MyOrder[] = [];
  if (orderData && orderData.pages.length > 0) {
    // 모든 페이지의 데이터를 하나의 배열로 합치기
    const allData = orderData.pages.flatMap((page) => page.data);
    sortedOrders = sortOrderList(allData);
  }

  return { sortedOrders, orderData, ...rest };
};

export default useSortedOrderList;
