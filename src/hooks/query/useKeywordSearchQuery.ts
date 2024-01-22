import getKeywordSearchResult from "@/api/search/getKeywordSearchResult";
import type { SortItem } from "@/app/types";
import { useQuery } from "@tanstack/react-query";

const useKeywordSearchQuery = (keyword: string, sort: SortItem) => {
  return useQuery({
    queryKey: ["search-keyword"],
    queryFn: () => {
      return getKeywordSearchResult(keyword, sort);
    },
  });
};

export default useKeywordSearchQuery;
