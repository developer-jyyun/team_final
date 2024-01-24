const canWriteReview = (travelPeriod: string): boolean => {
  // 여행 종료일
  const [, end] = travelPeriod.split("~");
  const [year, month, day] = end.split(".").map(Number);
  const endDate = new Date(year, month - 1, day);

  // 여행 종료일로부터 한 달 후 리뷰 작성 가능
  const reviewEndDate = new Date(endDate);
  reviewEndDate.setMonth(reviewEndDate.getMonth() + 1);

  // 현재 날짜와 비교
  return new Date() <= reviewEndDate;
};

export default canWriteReview;
