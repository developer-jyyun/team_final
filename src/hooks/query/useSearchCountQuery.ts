import getSearchCount from "@/api/search/getSearchCount";
import { useQuery } from "@tanstack/react-query";

const useSearchCountQuery = (params: string) => {
  return useQuery({
    queryKey: ["search-count"],
    queryFn: () => {
      return getSearchCount(params);
    },
  });
};

export default useSearchCountQuery;
