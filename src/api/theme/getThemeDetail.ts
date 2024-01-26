import { SortItem } from "@/app/types";

const getThemeDetail = async (
  id: number,
  page: number,
  pageSize: number,
  sortBy: SortItem | null = "departure_date",
) => {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/themes/${id}?sortBy=${sortBy}&page=${page}&pageSize=${pageSize}`,
    );
    const res = await result.json();
    return res;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default getThemeDetail;
