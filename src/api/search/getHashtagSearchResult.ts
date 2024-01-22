import { SortItem } from "@/app/types";

const getHashtagSearchResult = async (
  options: string,
  sort: SortItem | null = "departure_date",
) => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/v1/search${options}&sortBy=${sort}`,
  );
  return data.json();
};

export default getHashtagSearchResult;
