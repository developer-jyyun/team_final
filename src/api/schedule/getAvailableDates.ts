const getAvailableDates = async (id: number) => {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/packages/${id}/available-dates`,
      {
        cache: "no-store",
      },
    );

    if (!result.ok) {
      throw new Error("Failed to fetch data");
    }

    return await result.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default getAvailableDates;
