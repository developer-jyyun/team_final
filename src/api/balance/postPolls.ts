const postPolls = async (body: { choose: string }) => {
  try {
    const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/v1/polls`, {
      method: "POST",
      cache: "no-store",
      credentials: "include",
      body: JSON.stringify(body),
    });

    const data = await result.json();

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default postPolls;
