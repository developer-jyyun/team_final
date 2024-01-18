const deleteMyReview = async (reviewId: number) => {
  const result = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/v1/reviews/${reviewId}`,
    { method: "DELETE" },
  );

  if (!result.ok) {
    throw new Error("리뷰 삭제를 실패했습니다.");
  }

  return result.json();
};
export default deleteMyReview;
