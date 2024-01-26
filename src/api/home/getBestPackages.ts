const getBestPackages = async (page: number) => {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/packages/top-purchases?page=${page}&pageSize=10`,
    );
    const res = await result.json();
    return res;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default getBestPackages;
