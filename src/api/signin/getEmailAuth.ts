const getEmailAuth = async (email: string, code: string) => {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/v1/users/email/verify/${code}?email=${email}`,
    {
      credentials: "include",
    },
  );

  if (!result.ok) {
    throw new Error("Failed to fetch data");
  }

  return result.json();
};

export default getEmailAuth;
