const getAvailableDates = async (id: number) => {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/v1/packages/${id}/available-dates`,
    {
      cache: "no-store",
    },
  );

  if (!result.ok) {
    throw new Error("Failed to fetch data");
  }

  return result.json();
};

export default getAvailableDates;
