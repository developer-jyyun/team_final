const getWishList = async (page: number = 1) => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/v1/wishes?page=${page}`,
    { credentials: "include" },
  );
  return data.json();
};

export default getWishList;
