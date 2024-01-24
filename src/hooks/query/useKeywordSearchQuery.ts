import getKeywordSearchResult from "@/api/search/getKeywordSearchResult";
import type { SortItem } from "@/app/types";
import { useInfiniteQuery } from "@tanstack/react-query";

const useKeywordSearchQuery = (keyword: string, sort: SortItem) => {
  return useInfiniteQuery({
    queryKey: ["search-keyword"],
    queryFn: ({ pageParam }) =>
      getKeywordSearchResult(keyword, pageParam, sort),
    initialPageParam: 1,
    getNextPageParam: ({ page }) => {
      return page.currentPage < page.totalPages
        ? page.currentPage + 1
        : undefined;
    },
  });
};

export default useKeywordSearchQuery;
