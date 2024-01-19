const getMyInfo = async () => {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/my/info`,
      {
        credentials: "include",
      },
    );
    const res = await result.json();
    return res;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default getMyInfo;
