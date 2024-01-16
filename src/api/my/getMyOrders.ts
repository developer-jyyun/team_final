const getMyOrders = async (page: number, pageSize: number) => {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/v1/orders?page=${page}&pageSize=${pageSize}`,
  );

  if (!result.ok) {
    throw new Error("데이터를 불러오는 데 실패했습니다.");
  }

  const res = await result.json();
  console.log("order-data:", res);
  return res.data;
};
export default getMyOrders;
