const getPollsAuth = async (cookie?: string) => {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/polls/auth`,
      {
        cache: "no-store",
        credentials: "include",
        headers: {
          Cookie: cookie as string,
        },
      },
    );

    if (result.status === 401) return { code: 401 };

    const data = await result.json();

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default getPollsAuth;
