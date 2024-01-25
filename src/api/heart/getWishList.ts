const getWishList = async (page?: unknown) => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/v1/wishes?page=${page}`,
    { credentials: "include", cache: "no-store" },
  );
  return data.json();
};

export default getWishList;
