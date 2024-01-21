const getEmailAuth = async (email: string, code: string) => {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/users/email/verify/${code}?email=${email}`,
      {
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

export default getEmailAuth;
