import getHashtagSearchResult from "@/api/search/getHashtagSearchResult";
import type { SortItem } from "@/app/types";
import { useQuery } from "@tanstack/react-query";

const useHashtagSearchQuery = (options: string, sort: SortItem) => {
  return useQuery({
    queryKey: ["search-hashtag"],
    queryFn: () => {
      return getHashtagSearchResult(options, sort);
    },
  });
};

export default useHashtagSearchQuery;
