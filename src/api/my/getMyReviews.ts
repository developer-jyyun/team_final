const getMyReviews = async (page: number, pageSize: number) => {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/reviews/my?page=${page}&pageSize=${pageSize}`,
      {
        credentials: "include",
      },
    );

    const res = await result.json();
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export default getMyReviews;
