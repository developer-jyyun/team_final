const canWriteReview = (travelPeriod: string): boolean => {
  // 여행 종료일
  const [, end] = travelPeriod.split("~");
  const parts = end.split(".").map(Number);

  let year = parts[0];
  const month = parts[1];
  const day = parts[2];

  // 2자리 연도를 4자리 연도로 변환
  if (year < 100) {
    year += 2000;
  }

  const endDate = new Date(year, month - 1, day);

  console.log("여행 종료일:", endDate.toISOString());
  // 여행 종료일로부터 한 달 후 리뷰 작성 가능
  const reviewEndDate = new Date(endDate);
  reviewEndDate.setMonth(reviewEndDate.getMonth() + 1);
  console.log("리뷰 작성 가능일:", reviewEndDate.toISOString());

  // 현재 날짜와 비교
  return new Date() <= reviewEndDate;
};

export default canWriteReview;
