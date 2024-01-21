const getFaqDetail = async (faqId: number) => {
  try {
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/faq/${faqId}`,
    );
    const res = await result.json();
    console.log("faq:", res);
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export default getFaqDetail;
