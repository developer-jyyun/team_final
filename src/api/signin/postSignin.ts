const postSignin = async (body: { id: string; password: string }) => {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/v1/users/email/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(body),
    },
  );

  if (!result.ok) {
    throw new Error("Failed to fetch data");
  }

  return result.json();
};

export default postSignin;
