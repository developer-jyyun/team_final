const getKakaoAuth = async () => {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/oauth2/authorization/kakao`,
      {
        mode: "no-cors",
      },
    );

    const data = await result.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default getKakaoAuth;
