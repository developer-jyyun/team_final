const postCertification = async (body: { email: string }) => {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/v1/users/email/confirm`,
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

export default postCertification;
