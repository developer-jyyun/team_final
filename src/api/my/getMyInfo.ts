const getMyInfo = async () => {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/my/info`,
      {
        credentials: "include",
      },
    );

    if (result.status === 401) return { code: 401 };
    const res = await result.json();
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default getMyInfo;
