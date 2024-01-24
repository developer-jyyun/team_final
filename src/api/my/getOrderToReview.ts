const getOrderToReview = async () => {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/orders`,

      {
        credentials: "include",
      },
    );
    const res = await result.json();
    console.log("getOrderToReview:", res);
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export default getOrderToReview;
