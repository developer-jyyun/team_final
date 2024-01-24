const postPolls = async (body: { choose: string }) => {
  try {
    const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/v1/polls`, {
      method: "POST",
      cache: "no-store",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (result.status === 401) return { code: 401 };

    const data = await result.json();

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default postPolls;
