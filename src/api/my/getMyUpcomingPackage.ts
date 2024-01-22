const getMyUpcomingPackage = async () => {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/my/upcoming-package`,
      { credentials: "include" },
    );
    const res = await result.json();
    console.log("다가오는 패키지", res);

    if (!result.ok) {
      throw new Error(res.error || "API 호출에 실패했습니다.");
    }

    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default getMyUpcomingPackage;
