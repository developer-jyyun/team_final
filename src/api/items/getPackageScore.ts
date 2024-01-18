const getPackageScore = async (id: number) => {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/v1/reviews/packages/${id}/list/summary`,
    {
      cache: "no-store",
    },
  );

  if (!result.ok) {
    throw new Error("Failed to fetch data");
  }

  return result.json();
};

export default getPackageScore;
