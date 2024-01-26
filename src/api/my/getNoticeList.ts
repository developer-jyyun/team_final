const getNoticeList = async () => {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/notices`,
    );

    const res = await result.json();
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export default getNoticeList;
