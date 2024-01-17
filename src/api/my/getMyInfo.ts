const getMyInfo = async () => {
  const result = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/v1/my/info`);

  if (!result.ok) {
    throw new Error("데이터를 불러오는 데 실패했습니다.");
  }

  const res = await result.json();
  return res;
};

export default getMyInfo;
