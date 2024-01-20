const getPollsResult = async () => {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/polls/result`,
      {
        cache: "no-store",
        credentials: "include",
      },
    );

    return await result.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default getPollsResult;
