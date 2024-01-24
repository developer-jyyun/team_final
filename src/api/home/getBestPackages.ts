const getBestPackages = async (page: number, pageSize: number) => {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/packages/top-purchases?page=${page}&pageSize=${pageSize}`,
    );
    const res = await result.json();
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default getBestPackages;
