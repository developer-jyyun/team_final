const getPolls = async () => {
  try {
    const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/v1/polls`, {
      cache: "no-store",
      credentials: "include",
    });
    return await result.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default getPolls;
