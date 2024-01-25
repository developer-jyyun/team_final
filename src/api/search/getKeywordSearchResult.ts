import type { SortItem } from "@/app/types";

const getKeywordSearchResult = async (
  keyword: string,
  page?: unknown,
  sort: SortItem | null = "departure_date",
) => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/v1/hashtag-search?keyword=${keyword}&page=${page}&sortBy=${sort}`,
    {
      cache: "no-store",
      credentials: "include",
    },
  );
  return data.json();
};

export default getKeywordSearchResult;
