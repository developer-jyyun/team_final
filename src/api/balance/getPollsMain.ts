const getPollsMain = async () => {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/polls/main`,
      {
        cache: "no-store",
        credentials: "include",
      },
    );

    const data = await result.json();

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default getPollsMain;
