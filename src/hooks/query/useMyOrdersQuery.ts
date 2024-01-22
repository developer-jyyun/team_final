import { useInfiniteQuery } from "@tanstack/react-query";
import getMyOrders from "@/api/my/getMyOrders";

const useMyOrdersQuery = (pageSize: number, queryKey: string) => {
  return useInfiniteQuery({
    queryKey: ["myOrders", queryKey],
    queryFn: ({ pageParam }) => getMyOrders(pageParam, pageSize),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (
        lastPage &&
        lastPage.page &&
        lastPage.page.currentPage < lastPage.page.totalPage
      ) {
        return lastPage.page.currentPage + 1;
      }
      return undefined;
    },

    refetchOnMount: false,
  });
};

export default useMyOrdersQuery;
