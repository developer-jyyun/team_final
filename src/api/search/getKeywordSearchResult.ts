import type { SortItem } from "@/app/types";

const getKeywordSearchResult = async (
  keyword: string,
  sort: SortItem | null = "departure_date",
) => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/v1/hashtag-search?keyword=${keyword}&sortBy=${sort}`,
  );
  return data.json();
};

export default getKeywordSearchResult;
