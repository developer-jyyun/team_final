const getMyOrders = async (page: number, pageSize: number) => {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/orders?page=${page}&pageSize=${pageSize}`,
      {
        credentials: "include",
      },
    );
    const res = await result.json();
    console.log("order-data:", res);
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export default getMyOrders;
