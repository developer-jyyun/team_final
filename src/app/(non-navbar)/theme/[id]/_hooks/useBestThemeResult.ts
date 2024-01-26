import useBestThemeQuery from "@/hooks/query/useBestThemeQuery";
import { useEffect } from "react";

const useBestThemeResult = () => {
  const {
    data,
    isLoading: bestPackageIsLoading,
    refetch,
    fetchNextPage: bestPackageFetchNextPage,
    hasNextPage: bestPackageHasNextPage,
    isFetching: bestPackageIsFetching,
  } = useBestThemeQuery();

  useEffect(() => {
    refetch();
  }, []);

  return {
    data,
    bestPackageIsLoading,
    bestPackageFetchNextPage,
    bestPackageHasNextPage,
    bestPackageIsFetching,
  };
};

export default useBestThemeResult;
