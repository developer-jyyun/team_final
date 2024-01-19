const getPackageSchedules = async (id: number) => {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/packages/${id}/schedules`,
      {
        cache: "no-store",
      },
    );

    return await result.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default getPackageSchedules;
