"use client";

import type { SortItem } from "@/app/types";
import useKeywordSearchQuery from "@/hooks/query/useKeywordSearchQuery";
import { useSearchParams } from "next/navigation";
// import { useEffect } from "react";

const useKeywordResult = () => {
  const params = useSearchParams();
  const keyword = params.get("keyword") || "";
  const sort = (params.get("sortBy") as SortItem) || "departure_date";

  const {
    data,
    isLoading: keywordIsLoading,
    // refetch,
    fetchNextPage: keywordFetchNextPage,
    hasNextPage: keywordHasNextPage,
    isFetching: keywordIsFetching,
  } = useKeywordSearchQuery(keyword, sort);

  // useEffect(() => {
  //   refetch();
  // }, [params, refetch]);

  console.log(data);

  const keywordDataFirst = data?.pages[0];

  return {
    data,
    keywordDataFirst,
    keywordIsLoading,
    keywordFetchNextPage,
    keywordHasNextPage,
    keywordIsFetching,
  };
};

export default useKeywordResult;
