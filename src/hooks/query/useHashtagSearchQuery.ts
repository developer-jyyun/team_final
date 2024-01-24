import getHashtagSearchResult from "@/api/search/getHashtagSearchResult";
import type { SortItem } from "@/app/types";
import { useInfiniteQuery } from "@tanstack/react-query";

const useHashtagSearchQuery = (options: string, sort: SortItem) => {
  return useInfiniteQuery({
    queryKey: ["search-hashtag"],
    queryFn: ({ pageParam }) =>
      getHashtagSearchResult(options, pageParam, sort),
    initialPageParam: 1,
    getNextPageParam: ({ page }) => {
      return page?.currentPage < page?.totalPages
        ? page.currentPage + 1
        : undefined;
    },
  });
};

export default useHashtagSearchQuery;
