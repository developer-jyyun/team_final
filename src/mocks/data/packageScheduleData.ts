export const availableResponseData = {
  code: 200,
  data: [
    {
      availableDateId: 0,
      date: "2024-01-20",
      adultPrice: 300000,
      lodgeDays: 1,
      tripDays: 2,
    },
    {
      availableDateId: 0,
      date: "2024-01-21",
      adultPrice: 210000,
      lodgeDays: 1,
      tripDays: 2,
    },
    {
      availableDateId: 0,
      date: "2024-01-22",
      adultPrice: 1000000,
      lodgeDays: 1,
      tripDays: 2,
    },
    {
      availableDateId: 0,
      date: "2024-01-23",
      adultPrice: 100000,
      lodgeDays: 1,
      tripDays: 2,
    },
    {
      availableDateId: 0,
      date: "2024-01-24",
      adultPrice: 500000,
      lodgeDays: 1,
      tripDays: 2,
    },
    {
      availableDateId: 0,
      date: "2024-01-25",
      adultPrice: 100000,
      lodgeDays: 1,
      tripDays: 2,
    },
    {
      availableDateId: 0,
      date: "2024-01-26",
      adultPrice: 100000,
      lodgeDays: 1,
      tripDays: 2,
    },
    {
      availableDateId: 0,
      date: "2024-01-27",
      adultPrice: 300000,
      lodgeDays: 1,
      tripDays: 2,
    },
    {
      availableDateId: 0,
      date: "2024-01-28",
      adultPrice: 100000,
      lodgeDays: 1,
      tripDays: 2,
    },
    {
      availableDateId: 0,
      date: "2024-01-29",
      adultPrice: 1230000,
      lodgeDays: 1,
      tripDays: 2,
    },
    {
      availableDateId: 0,
      date: "2024-01-30",
      adultPrice: 2100000,
      lodgeDays: 1,
      tripDays: 2,
    },
    {
      availableDateId: 0,
      date: "2024-01-31",
      adultPrice: 2230000,
      lodgeDays: 1,
      tripDays: 2,
    },
    {
      availableDateId: 0,
      date: "2024-02-01",
      adultPrice: 500000,
      lodgeDays: 1,
      tripDays: 2,
    },
    {
      availableDateId: 0,
      date: "2024-02-02",
      adultPrice: 520000,
      lodgeDays: 1,
      tripDays: 2,
    },
    {
      availableDateId: 0,
      date: "2024-02-03",
      adultPrice: 100000,
      lodgeDays: 1,
      tripDays: 2,
    },
    {
      availableDateId: 0,
      date: "2024-02-04",
      adultPrice: 2100000,
      lodgeDays: 1,
      tripDays: 2,
    },
    {
      availableDateId: 0,
      date: "2024-02-05",
      adultPrice: 1130000,
      lodgeDays: 1,
      tripDays: 2,
    },
    {
      availableDateId: 0,
      date: "2024-02-06",
      adultPrice: 100000,
      lodgeDays: 1,
      tripDays: 2,
    },
  ],
};

export const packageDetail = {
  code: 200,
  data: {
    packageId: 0,
    hashtags: [""],
    departureDatetime: {
      date: "2010-01-01",
      dayOfWeek: "월",
      time: "11:20",
    },
    endDatetime: {
      date: "2010-01-01",
      dayOfWeek: "월",
      time: "11:20",
    },
    imageUrls: [""],
    nationName: "나라 이름",
    continentName: "대륙 이름",
    title: "제목",
    averageStars: 0.0, // (0.0~10.0)
    totalPrice: {
      adult: 0, // 성인 (0일 경우 없음)
      infant: 0, // 소아 (0일 경우 '문의 요망'으로 표시해야 함)
      baby: 0, // 유아 (0일 경우 '문의 요망'으로 표시해야 함)
    },
    reservation: {
      current: 0, // 예약자 수
      remain: 0, // 잔여 예약 가능 수
      min: 0, // 최소 출발 인원
    },
    transporation: "티웨이항공 직항",
    info: ["패키지", "항공", "1박 2일", "현지경비 KRW 1,000"],
    introImageUrls: [""], // 상품 소개 이미지
    inclusionList: [
      { title: "제세공과금", description: "" },
      { title: "식사", description: "일정표 상 식사" },
    ],
    exclusionList: [
      { title: "선택관광비용", description: "" },
      { title: "자유일정 시 식사", description: "일정표 참고" },
    ],
    lodgeDays: 1, // 1박
    tripDays: 2, // 2일
    reviewCount: 0,
    myInfo: {
      username: "",
      email: "",
      phone: "",
    },
    isWish: false, // 비로그인 시에는 항상 false
  },
};
