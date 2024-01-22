"use client";

import { SortItem } from "@/app/types";
import useHashtagSearchQuery from "@/hooks/query/useHashtagSearchQuery";
import { useSearchParams } from "next/navigation";

const useHashtagResult = () => {
  const params = useSearchParams();
  const sort = (params.get("sortBy") as SortItem) || "departure_date";
  const maxPrice = params.get("maxPrice") || "200";

  const hashtags = params.get("hashtags");
  const nations = params.get("nations");
  const continents = params.get("continents");

  let options = `?maxPrice=${maxPrice}`;
  if (hashtags) options += `&hashtags=${hashtags}`;
  if (nations) options += `&nations=${nations}`;
  if (continents) options += `&continents=${continents}`;

  const { data: hashtagData, isLoading: hashtagIsLoading } =
    useHashtagSearchQuery(options, sort);

  return { hashtagData, hashtagIsLoading };
};

export default useHashtagResult;
