const getNaverAuth = async () => {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/oauth2/authorization/naver`,
      {
        credentials: "include",
      },
    );

    return await result.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default getNaverAuth;
