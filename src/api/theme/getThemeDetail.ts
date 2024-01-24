const getThemeDetail = async (
  id: number,
  sortBy: string,
  page: number,
  pageSize: number,
) => {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/themes/${id}?sortBy=${sortBy}&page=${page}&pageSize=${pageSize}`,
    );
    const res = await result.json();
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default getThemeDetail;
