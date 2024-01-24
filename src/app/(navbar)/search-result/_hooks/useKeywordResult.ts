"use client";

import { SortItem } from "@/app/types";
import useKeywordSearchQuery from "@/hooks/query/useKeywordSearchQuery";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const useKeywordResult = () => {
  const params = useSearchParams();
  const keyword = params.get("keyword") || "";
  const sort = (params.get("sortBy") as SortItem) || "departure_date";

  const {
    data: keywordData,
    isLoading: keywordIsLoading,
    refetch,
  } = useKeywordSearchQuery(keyword, sort);

  useEffect(() => {
    refetch();
  }, [params, refetch]);

  return { keywordData, keywordIsLoading };
};

export default useKeywordResult;
