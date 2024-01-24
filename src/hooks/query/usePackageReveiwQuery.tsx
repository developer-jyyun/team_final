import { useInfiniteQuery } from "@tanstack/react-query";
import getPackageReveiws from "@/api/items/getPackageReviews";

const usePackageReveiwQuery = (id: string) => {
  return useInfiniteQuery({
    queryKey: ["package-detail", "reviews"],
    queryFn: ({ pageParam }) => getPackageReveiws(Number(id), pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const page = lastPage.page.currentPage;
      return page + 1;
    },
    refetchOnMount: false,
  });
};

export default usePackageReveiwQuery;
