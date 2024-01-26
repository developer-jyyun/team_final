import { useInfiniteQuery } from "@tanstack/react-query";
import getThemeDetail from "@/api/theme/getThemeDetail";
import { SortItem } from "@/app/types";

const useThemeQuery = (id: string, sortBy: SortItem) => {
  return useInfiniteQuery({
    queryKey: ["theme"],
    queryFn: ({ pageParam }) =>
      getThemeDetail(Number(id), pageParam, 10, sortBy),
    initialPageParam: 1,
    getNextPageParam: ({ page }) => {
      return page?.currentPage < page?.totalPages
        ? page.currentPage + 1
        : undefined;
    },
  });
};

export default useThemeQuery;
