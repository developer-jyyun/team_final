import { SortItem } from "@/app/types";

const getHashtagSearchResult = async (
  options: string,
  page?: unknown,
  sort: SortItem | null = "departure_date",
) => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/v1/search${options}&page=${page}&sortBy=${sort}`,
    {
      cache: "no-store",
      credentials: "include",
    },
  );
  return data.json();
};

export default getHashtagSearchResult;
