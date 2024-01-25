const getWishList = async (page?: unknown) => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/v1/wishes?pageSize=6&page=${page}`,
    { credentials: "include", cache: "no-store" },
  );
  return data.json();
};

export default getWishList;
