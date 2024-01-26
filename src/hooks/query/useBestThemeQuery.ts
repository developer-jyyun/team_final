import { useInfiniteQuery } from "@tanstack/react-query";
import getBestPackages from "@/api/home/getBestPackages";

const useBestThemeQuery = () => {
  return useInfiniteQuery({
    queryKey: ["best-theme"],
    queryFn: ({ pageParam }) => getBestPackages(pageParam),
    initialPageParam: 1,
    getNextPageParam: ({ page }) => {
      return page?.currentPage < page?.totalPages
        ? page.currentPage + 1
        : undefined;
    },
  });
};

export default useBestThemeQuery;
