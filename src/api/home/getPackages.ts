const getPackages = async (pageSize: number = 10) => {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/v1/packages/top-views?pageSize=${pageSize}`,
  );

  if (!result.ok) {
    throw new Error("Failed to fetch data");
  }

  return result.json();
};
export default getPackages;
