const getPolls = async () => {
  try {
    const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/v1/polls`, {
      cache: "no-store",
      credentials: "include",
    });

    if (result.status === 401) return { code: 401 };

    return await result.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default getPolls;
