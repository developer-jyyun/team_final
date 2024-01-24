import getWishList from "@/api/heart/getWishList";
import { useInfiniteQuery } from "@tanstack/react-query";

const useGetWishListQuery = () => {
  return useInfiniteQuery({
    queryKey: ["wish-list"],
    queryFn: ({ pageParam }) => getWishList(pageParam),
    initialPageParam: 1,
    getNextPageParam: ({ page }) => {
      return page.currentPage < page.totalPages
        ? page.currentPage + 1
        : undefined;
    },
  });
};

export default useGetWishListQuery;
