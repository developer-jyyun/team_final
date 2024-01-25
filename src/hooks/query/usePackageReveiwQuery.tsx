import { useInfiniteQuery } from "@tanstack/react-query";
import getPackageReveiws from "@/api/items/getPackageReviews";

const usePackageReveiwQuery = (id: string) => {
  return useInfiniteQuery({
    queryKey: ["package-detail", "reviews"],
    queryFn: ({ pageParam }) => getPackageReveiws(Number(id), pageParam),
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

export default usePackageReveiwQuery;
