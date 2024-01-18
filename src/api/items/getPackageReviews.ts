const getPackageReveiws = async (id: number, pageParam: number) => {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/v1/reviews/packages/${id}/list?page=${pageParam}`,
    {
      cache: "no-store",
    },
  );

  if (!result.ok) {
    throw new Error("Failed to fetch data");
  }

  return result.json();
};

export default getPackageReveiws;
