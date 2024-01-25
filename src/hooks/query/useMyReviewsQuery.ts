import getMyReviews from "@/api/my/getMyReviews";
import { useInfiniteQuery } from "@tanstack/react-query";

const useMyReviewsQuery = (pageSize: number) => {
  return useInfiniteQuery({
    queryKey: ["myReviews"],
    queryFn: ({ pageParam }) => getMyReviews(pageParam, pageSize),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const { currentPage, totalPages } = lastPage.page;
      if (currentPage < totalPages) {
        return currentPage + 1;
      }
      return undefined;
    },
    refetchOnMount: false,
  });
};

export default useMyReviewsQuery;
