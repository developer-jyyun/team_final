const deleteMyReview = async (reviewId: number) => {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/reviews/${reviewId}`,
      {
        method: "DELETE",
        credentials: "include",
      },
    );

    return await result.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export default deleteMyReview;
