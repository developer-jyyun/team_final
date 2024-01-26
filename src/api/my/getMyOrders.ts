const getMyOrders = async (
  pageParam: number,
  pageSize: number,
  cookie?: string,
) => {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/orders?page=${pageParam}&pageSize=${pageSize}`,
      {
        credentials: "include",
        headers: {
          Cookie: cookie as string,
        },
      },
    );
    const res = await result.json();
    return res;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export default getMyOrders;
