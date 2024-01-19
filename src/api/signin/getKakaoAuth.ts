const getKakaoAuth = async () => {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/oauth2/authorization/kakao`,
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

export default getKakaoAuth;
