const myReviewData = {
  data: [
    {
      packageId: 0,
      reviewId: 0,
      content: "오로지 우리 식구만의 첫 해외여행1",
      createdAt: "2010-01-01",
      averageStars: 5.0,
      productScore: 5,
      scheduleScore: 5,
      guideScore: 5,
      appointmentScore: 5,
    },
    {
      packageId: 1,
      reviewId: 1,
      content: "오로지 우리 식구만의 첫 해외여행2",
      createdAt: "2010-01-02",
      averageStars: 4.5,
      productScore: 4,
      scheduleScore: 5,
      guideScore: 4,
      appointmentScore: 5,
    },
    {
      packageId: 2,
      reviewId: 2,
      content: "오로지 우리 식구만의 첫 해외여행3",
      createdAt: "2010-01-03",
      averageStars: 4.0,
      productScore: 4,
      scheduleScore: 4,
      guideScore: 4,
      appointmentScore: 4,
    },
  ],
  page: {
    totalElements: 15, // 총 리뷰의 수
    currentElements: 3, // 현재 페이지에 보여지는 리뷰의 수
    totalPages: 4, // 총 페이지 수 초기 3개 노출, 나머지 5개씩
    currentPage: 1, // 현재 페이지 번호
  },
};
export default myReviewData;
