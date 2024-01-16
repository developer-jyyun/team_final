import { http, HttpResponse } from "msw";
import { availableResponseData, details } from "./data/packageScheduleData";

const handlers = [
  http.get("/api/hi", () => {
    console.log("메인");
    return HttpResponse.json("hi");
  }),

  // 로그인 회원가입
  http.post("/v1/users/email/confirm", () => {
    console.log("인증번호 요청");
    return HttpResponse.json({
      code: 200,
    });
  }),

  http.get("/v1/users/email/verify/:code", () => {
    console.log("이메일 인증");
    return HttpResponse.json({
      code: 200,
    });
  }),

  http.post("/v1/users/email", () => {
    console.log("회원가입");
    return HttpResponse.json({
      code: 200,
      data: {
        email: "user@example.com",
        username: "test",
        nickname: "dqnaQwncD",
      },
    });
  }),

  http.post("/v1/users/email/login", async ({ request }) => {
    console.log("로그인");
    const data = (await request.json()) as {
      id: string;
      password: string;
    };

    if (data.id === "a") {
      return HttpResponse.json({ code: 409 });
    }

    return HttpResponse.json(
      { code: 200 },
      {
        headers: {
          "Set-Cookie": "connect.accessToken=msw-cookie;HttpOnly;Path=/",
        },
      },
    );
  }),

  http.post("/v1/users/logout", () => {
    console.log("로그아웃");
    return HttpResponse.json(
      { code: 200 },
      {
        headers: {
          "Set-Cookie": "connect.accessToken=;HttpOnly;Path=/;Max-Age=0",
        },
      },
    );
  }),

  // 일정 예약
  http.get("/v1/packages/:id/available-dates", () => {
    console.log("가능한 일정 조회");

    return HttpResponse.json(availableResponseData);
  }),

  http.get("/v1/search/hashtags", () => {
    const hashtags = [
      "건강/웰니스",
      "자연",
      "허니문",
      "다이닝/미식",
      "로컬",
      "문화/역사",
      "자연",
      "휴양/레저",
      "쇼핑",
      "골프/스포츠",
      "체험/액티비티",
    ];

    return HttpResponse.json({
      code: 200,
      data: { hashtags },
    });
  }),

  http.get("/v1/advertisements", () => {
    console.log("광고구좌 목록 조회");
    const advertisements = [
      {
        adId: 0,
        imageUrl:
          "https://images.theconversation.com/files/318067/original/file-20200302-18287-i7bt82.jpg",
      },
      {
        adId: 1,
        imageUrl:
          "https://images.theconversation.com/files/318067/original/file-20200302-18287-i7bt82.jpg",
      },
      {
        adId: 2,
        imageUrl:
          "https://images.theconversation.com/files/318067/original/file-20200302-18287-i7bt82.jpg",
      },
    ];

    return HttpResponse.json({
      code: 200,
      data: advertisements,
    });
  }),

  http.get("/v1/advertisements/{adId}", () => {
    console.log("광고구좌 조회");
    const advertisementInfo = {
      adId: 0,
      name: "오사카 특별 기획전",
      description: "오사카의 13가지 매력속으로!",
      imageUrls: [
        "https://images.theconversation.com/files/318067/original/file-20200302-18287-i7bt82.jpg?ixlib=rb-1.1.0&rect=21%2C5%2C3496%2C2747&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
      ],
      packages: [
        {
          packageId: 0,
          imageUrl: "",
          transporation: "",
          title: "",
          minPrice: 0,
        },
      ],
    };

    return HttpResponse.json({
      code: 200,
      data: advertisementInfo,
    });
  }),

  http.get("/v1/themes", () => {
    console.log("테마 패키지 목록 조회");
    const themes = [
      { themeId: 0, name: "베스트", imageUrl: "/assets/mainLogo.svg" },
      { themeId: 1, name: "골프/스포츠", imageUrl: "/assets/mainLogo.svg" },
      { themeId: 2, name: "허니문", imageUrl: "/assets/mainLogo.svg" },
      { themeId: 3, name: "자연경관", imageUrl: "/assets/mainLogo.svg" },
      { themeId: 4, name: "문화/역사", imageUrl: "/assets/mainLogo.svg" },
      { themeId: 5, name: "체험/액티비티", imageUrl: "/assets/mainLogo.svg" },
    ];

    return HttpResponse.json({
      code: 200,
      data: themes,
    });
  }),

  http.get("/v1/polls", () => {
    console.log("테마 패키지 목록 조회");
    const pollsInfo = [
      {
        alreadySubmitted: false,
        subject: "여러분들의 여행 스타일은?",
        pollId: 0,
        A: ["여행은", " 휴식이지"], // 줄바꿈을 기준으로 나눔
        B: ["온 김에", "다 해보자!"],
      },
    ];

    return HttpResponse.json(pollsInfo, {
      headers: {
        Cookie: "connect.accessToken=msw-cookie;HttpOnly;Path=/",
      },
    });
  }),

  http.get("v1/packages/top-views", () => {
    console.log("가장 많이 본 패키지 목록");
    const packagesList = [
      {
        packageId: 0,
        imageUrl:
          "https://images.theconversation.com/files/318067/original/file-20200302-18287-i7bt82.jpg?ixlib=rb-1.1.0&rect=21%2C5%2C3496%2C2747&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
        nationName: "일본",
        title: "청룡의 해 얼리버드 특가",
        hashtags: ["일본", "체험", "로컬 다이닝", "쇼핑"],
        minPrice: 689000,
        lodgeDays: 4, // 1박
        tripDays: 5, // 2일
        isWish: false, // 비로그인시에는 항상 false
      },
      {
        packageId: 1,
        imageUrl:
          "https://images.theconversation.com/files/318067/original/file-20200302-18287-i7bt82.jpg?ixlib=rb-1.1.0&rect=21%2C5%2C3496%2C2747&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
        nationName: "일본",
        title: "나만 알고 싶은 호캉스 초특가",
        hashtags: ["일본", "역사", "미식"],
        minPrice: 433000,
        lodgeDays: 2, // 1박
        tripDays: 3, // 2일
        isWish: false, // 비로그인시에는 항상 false
      },
      {
        packageId: 2,
        imageUrl:
          "https://images.theconversation.com/files/318067/original/file-20200302-18287-i7bt82.jpg?ixlib=rb-1.1.0&rect=21%2C5%2C3496%2C2747&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
        nationName: "일본",
        title: "새해 소원 홀인원 초핫특가",
        hashtags: ["일본", "골프", "레저"],
        minPrice: 1783000,
        lodgeDays: 8, // 1박
        tripDays: 9, // 2일
        isWish: false, // 비로그인시에는 항상 false
      },
      {
        packageId: 3,
        imageUrl:
          "https://images.theconversation.com/files/318067/original/file-20200302-18287-i7bt82.jpg?ixlib=rb-1.1.0&rect=21%2C5%2C3496%2C2747&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
        nationName: "유럽",
        title: "유럽 문화 탐방 특가",
        hashtags: ["유럽", "문화", "체험"],
        minPrice: 1862000,
        lodgeDays: 3, // 1박
        tripDays: 5, // 2일
        isWish: false, // 비로그인시에는 항상 false
      },
      {
        packageId: 4,
        imageUrl:
          "https://images.theconversation.com/files/318067/original/file-20200302-18287-i7bt82.jpg?ixlib=rb-1.1.0&rect=21%2C5%2C3496%2C2747&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip",
        nationName: "동남아",
        title: "만나보자 옥태견 호핑 초특가",
        hashtags: ["동남아", "액티비티", "자연경관", "레저"],
        minPrice: 513000,
        lodgeDays: 2, // 1박
        tripDays: 4, // 2일
        isWish: false, // 비로그인시에는 항상 false
      },
    ];

    const pages = {
      currentPage: 1, // 현재 페이지
      totalPage: 1, // 끝 페이지
      currentElements: 5, // 현재 보여지는 목록의 개수
      totalElements: 5, // 모든 페이지를 통틀어 목록이 몇 개 있는지
    };

    return HttpResponse.json({
      code: 200,
      data: packagesList,
      page: pages,
    });
  }),

  // 패키지 상세
  http.get("/v1/packages/:id", ({ request }) => {
    console.log("패키지 상세 조회");
    const url = new URL(request.url);
    const departDate = url.searchParams.get("departDate");
    let newData;
    if (departDate) {
      const foundData = details.find(
        (detail) => detail.departureDatetime.date === departDate,
      );
      newData = foundData || null;
    } else {
      newData = details[0] || null;
    }

    return HttpResponse.json({
      code: 200,
      data: newData,
    });
  }),

  // 내 정보 조회
  http.get("/v1/my/info", async () => {
    console.log("내 정보 조회");
    const myInfo = {
      email: "user@example.com",
      username: "홍길동",
      phone: "010-1234-5678",
      addr1: "서울특별시 강남구",
      addr2: "역삼동 123-45",
      postCode: "06178",
    };
    return HttpResponse.json(myInfo, {
      headers: {
        Cookie: "connect.accessToken=msw-cookie;HttpOnly;Path=/",
      },
    });
  }),
  // 다가오는 패키지
  http.get("/v1/my/upcoming-package", async () => {
    console.log("출발일이 다가오는 패키지");
    const upComingPackage = {
      packageId: 0,
      imageUrl: "//source.unsplash.com/500x500?america",
      title: "오사카 특별 패키지",
      dday: 30,
      nationName: "일본",
      departureDate: "2024-02-01",
      endDate: "2024-02-05",
    };
    return HttpResponse.json(upComingPackage, {
      headers: {
        Cookie: "connect.sid=msw-cookie;HttpOnly;Path=/",
      },
    });
  }),

  // 내가 쓴 리뷰 목록
  http.get("/v1/reviews/my", async () => {
    console.log("내가 쓴 리뷰 목록");
    const myReview = {
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

    return HttpResponse.json(myReview, {
      headers: {
        Cookie: "connect.accessToken=msw-cookie;HttpOnly;Path=/",
      },
    });
  }),

  // 예약내역
  http.get("/v1/orders", async () => {
    console.log("예약내역");
    const myOrders = {
      data: [
        {
          orderCode: "2023122910352",
          availableDateId: 0,
          package: {
            packageId: 1,
            imageUrl: "//source.unsplash.com/90x90?japan",
            nationName: "일본",
            title: "청룡의 해 얼리버드 특가1",
            hashtags: ["일본", "체험", "로컬 다이닝"],
            lodgeDays: 1, // 1박
            tripDays: 2, // 2일
            travelPeriod: "24.02.01~24.02.05",
            isWish: false,
            reviewed: false, // 리뷰 작성 여부
          },
        },

        {
          orderCode: "2023123010352",
          availableDateId: 0,
          package: {
            packageId: 2,
            imageUrl: "//source.unsplash.com/90x90?japan",
            nationName: "일본",
            title: "청룡의 해 얼리버드 특가2",
            hashtags: ["일본", "체험/액티비티", "로컬 다이닝"],
            lodgeDays: 1, // 1박
            tripDays: 2, // 2일
            travelPeriod: "24.02.01~24.02.05",
            isWish: false,
            reviewed: false, // 리뷰 작성 여부
          },
        },
        {
          orderCode: "2024122910352",
          availableDateId: 0,
          package: {
            packageId: 3,
            imageUrl: "//source.unsplash.com/90x90?japan",
            nationName: "일본",
            title: "청룡의 해 얼리버드 특가3",
            hashtags: ["일본", "체험", "로컬 다이닝"],
            lodgeDays: 1, // 1박
            tripDays: 2, // 2일
            travelPeriod: "24.02.01~24.02.05",
            isWish: false,
            reviewed: false, // 리뷰 작성 여부
          },
        },
      ],
      page: {
        currentPage: 0, // 현재 페이지
        totalPage: 0, // 끝 페이지
        currentElements: 0, // 현재 보여지는 목록의 개수
        totalElements: 0, // 모든 페이지를 통틀어 목록이 몇 개 있는지
      },
    };

    return HttpResponse.json(myOrders, {
      headers: {
        Cookie: "connect.accessToken=msw-cookie;HttpOnly;Path=/",
      },
    });
  }),
];

export default handlers;
