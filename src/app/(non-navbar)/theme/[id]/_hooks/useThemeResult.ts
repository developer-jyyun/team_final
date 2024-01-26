import { SortItem } from "@/app/types";
import useThemeQuery from "@/hooks/query/useThemeQuery";
import { useEffect } from "react";

const useThemeResult = (id: string, sortBy: SortItem) => {
  const {
    data,
    isLoading: packageIsLoading,
    refetch,
    fetchNextPage: packageFetchNextPage,
    hasNextPage: packageHasNextPage,
    isFetching: packageIsFetching,
  } = useThemeQuery(id, sortBy);

  useEffect(() => {
    refetch();
  }, []);

  return {
    data,
    packageIsLoading,
    packageFetchNextPage,
    packageHasNextPage,
    packageIsFetching,
  };
};

export default useThemeResult;
