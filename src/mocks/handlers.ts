import { http, HttpResponse } from "msw";
import {
  availableResponseData,
  details,
  packageSchedules,
} from "./data/packageScheduleData";
import myReviewData from "./data/myReviewData";

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
          "Set-Cookie": "accessToken=msw-cookie;HttpOnly;Path=/",
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
          "Set-Cookie": "accessToken=;HttpOnly;Path=/;Max-Age=0",
        },
      },
    );
  }),

  // 일정 예약
  http.get("/v1/packages/:id/available-dates", () => {
    console.log("가능한 일정 조회");

    return HttpResponse.json(availableResponseData);
  }),

  // 검색 관련
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

  http.get("/v1/search/options/hashtags", () => {
    const data = [
      {
        name: "자연",
        imageUrl:
          "https://i.pinimg.com/564x/c7/f3/13/c7f31359d0e2717a54f7bd115b1d146d.jpg",
      },
      {
        name: "휴양/레저",
        imageUrl:
          "https://i.pinimg.com/564x/c7/f3/13/c7f31359d0e2717a54f7bd115b1d146d.jpg",
      },
      {
        name: "문화/역사",
        imageUrl:
          "https://i.pinimg.com/564x/c7/f3/13/c7f31359d0e2717a54f7bd115b1d146d.jpg",
      },
      {
        name: "체험/액티비티",
        imageUrl:
          "https://i.pinimg.com/564x/c7/f3/13/c7f31359d0e2717a54f7bd115b1d146d.jpg",
      },
      {
        name: "건강/웰니스",
        imageUrl:
          " https://i.pinimg.com/564x/c7/f3/13/c7f31359d0e2717a54f7bd115b1d146d.jpg",
      },
      {
        name: "스포츠/골프",
        imageUrl:
          "https://i.pinimg.com/564x/c7/f3/13/c7f31359d0e2717a54f7bd115b1d146d.jpg",
      },
      {
        name: "쇼핑",
        imageUrl:
          "https://i.pinimg.com/564x/c7/f3/13/c7f31359d0e2717a54f7bd115b1d146d.jpg",
      },
      {
        name: "로컬",
        imageUrl:
          "https://i.pinimg.com/564x/c7/f3/13/c7f31359d0e2717a54f7bd115b1d146d.jpg",
      },
      {
        name: "다이닝/미식",
        imageUrl:
          "https://i.pinimg.com/564x/c7/f3/13/c7f31359d0e2717a54f7bd115b1d146d.jpg",
      },
      {
        name: "허니문",
        imageUrl:
          "https://i.pinimg.com/564x/c7/f3/13/c7f31359d0e2717a54f7bd115b1d146d.jpg",
      },
    ];

    return HttpResponse.json({
      code: 200,
      data,
    });
  }),
  http.get("/v1/search/options/destinations", () => {
    const data = {
      nation: [
        {
          name: "일본",
          imageUrl:
            "https://i.pinimg.com/736x/85/3c/48/853c480177507a21e208d5a11d99e398.jpg",
        },
        {
          name: "중국",
          imageUrl:
            "https://i.pinimg.com/736x/85/3c/48/853c480177507a21e208d5a11d99e398.jpg",
        },
        {
          name: "태국",
          imageUrl:
            "https://i.pinimg.com/736x/85/3c/48/853c480177507a21e208d5a11d99e398.jpg",
        },
        {
          name: "베트남",
          imageUrl:
            "https://i.pinimg.com/736x/85/3c/48/853c480177507a21e208d5a11d99e398.jpg",
        },
        {
          name: "미국",
          imageUrl:
            "https://i.pinimg.com/736x/85/3c/48/853c480177507a21e208d5a11d99e398.jpg",
        },
        {
          name: "대만",
          imageUrl:
            "https://i.pinimg.com/736x/85/3c/48/853c480177507a21e208d5a11d99e398.jpg",
        },
      ],
      continent: [
        {
          name: "아시아",
          imageUrl:
            "https://i.pinimg.com/564x/d1/48/bd/d148bda5524dfcae85b2a1cdac8e7308.jpg",
        },
        {
          name: "오세아니아",
          imageUrl:
            "https://i.pinimg.com/564x/d1/48/bd/d148bda5524dfcae85b2a1cdac8e7308.jpg",
        },
        {
          name: "유럽",
          imageUrl:
            "https://i.pinimg.com/564x/d1/48/bd/d148bda5524dfcae85b2a1cdac8e7308.jpg",
        },
        {
          name: "아프리카",
          imageUrl:
            "https://i.pinimg.com/564x/d1/48/bd/d148bda5524dfcae85b2a1cdac8e7308.jpg",
        },
        {
          name: "북미",
          imageUrl:
            "https://i.pinimg.com/564x/d1/48/bd/d148bda5524dfcae85b2a1cdac8e7308.jpg",
        },
        {
          name: "남미",
          imageUrl:
            "https://i.pinimg.com/564x/d1/48/bd/d148bda5524dfcae85b2a1cdac8e7308.jpg",
        },
      ],
    };

    return HttpResponse.json({
      code: 200,
      data,
    });
  }),

  http.get("/v1/search/count", ({ request }) => {
    const url = new URL(request.url);
    const maxPrice = url.searchParams.get("maxPrice");
    const hashtags = url.searchParams.get("hashtags");
    const nations = url.searchParams.get("nations");
    const continents = url.searchParams.get("continents");
    let count = 0;
    if (maxPrice) count += 10;
    if (hashtags) count += 10;
    if (nations) count += 10;
    if (continents) count += 10;

    return HttpResponse.json({
      code: 200,
      data: {
        count,
      },
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

  // http.get("/v1/polls", () => {
  //   console.log("테마 패키지 목록 조회");
  //   const pollsInfo = [
  //     {
  //       alreadySubmitted: false,
  //       subject: "여러분들의 여행 스타일은?",
  //       pollId: 0,
  //       A: ["여행은", " 휴식이지"], // 줄바꿈을 기준으로 나눔
  //       B: ["온 김에", "다 해보자!"],
  //     },
  //   ];

  //   return HttpResponse.json(pollsInfo, {
  //     headers: {
  //       Cookie: "connect.accessToken=msw-cookie;HttpOnly;Path=/",
  //     },
  //   });
  // }),

  http.get("v1/packages/top-views", ({ request }) => {
    const url = new URL(request.url);
    const pageSize = url.searchParams.get("pageSize");

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
      {
        packageId: 5,
        imageUrl:
          "https://i.pinimg.com/564x/c2/c3/40/c2c340540fd915592d229ecb335bda46.jpg",
        nationName: "유럽",
        title: "로맨틱한 프랑스 여행",
        hashtags: ["로맨스", "유럽", "역사"],
        minPrice: 700000,
        lodgeDays: 3,
        tripDays: 6,
        isWish: false,
      },
      {
        packageId: 6,
        imageUrl:
          "https://i.pinimg.com/564x/c2/c3/40/c2c340540fd915592d229ecb335bda46.jpg",
        nationName: "일본",
        title: "도쿄의 현대 예술 탐방",
        hashtags: ["아트", "일본", "도시"],
        minPrice: 620000,
        lodgeDays: 2,
        tripDays: 5,
        isWish: false,
      },
      {
        packageId: 7,
        imageUrl:
          "https://i.pinimg.com/564x/c2/c3/40/c2c340540fd915592d229ecb335bda46.jpg",
        nationName: "남미",
        title: "아마존 정글 탐험",
        hashtags: ["자연", "아마존", "브라질"],
        minPrice: 900000,
        lodgeDays: 4,
        tripDays: 7,
        isWish: false,
      },
      {
        packageId: 8,
        imageUrl:
          "https://i.pinimg.com/564x/c2/c3/40/c2c340540fd915592d229ecb335bda46.jpg",
        nationName: "아프리카",
        title: "사하라 사막 사파리",
        hashtags: ["사파리", "아프리카", "자연"],
        minPrice: 800000,
        lodgeDays: 3,
        tripDays: 6,
        isWish: false,
      },
      {
        packageId: 9,
        imageUrl:
          "https://i.pinimg.com/564x/c2/c3/40/c2c340540fd915592d229ecb335bda46.jpg",
        nationName: "오세아니아",
        title: "그레이트 오션 로드 여행",
        hashtags: ["자연", "호주", "드라이브"],
        minPrice: 850000,
        lodgeDays: 2,
        tripDays: 5,
        isWish: false,
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
      data: packagesList.slice(0, Number(pageSize)),
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

  http.get("/v1/packages/:id/schedules", () => {
    console.log("패키지 스케줄 조회");

    return HttpResponse.json({
      code: 200,
      data: packageSchedules,
    });
  }),

  // 패키지 리뷰
  http.get("/v1/reviews/packages/:id/list", ({ request }) => {
    const url = new URL(request.url);
    const reviewPage = Number(url.searchParams.get("page")) || 1;

    console.log(`${reviewPage} 페이지`);

    return HttpResponse.json({
      code: 200,
      data: {
        data: [
          {
            reviewId: reviewPage,
            content: `오로지 우리 식구만의 첫 해외여행 ${reviewPage} 페이지`,
            createdAt: "2010-01-01",
            averageStars: 0.0,
            productScore: 0,
            scheduleScore: 0,
            guideScore: 0,
            appointmentScore: 0,
          },
          {
            reviewId: reviewPage + 2,
            content: `오로지 우리 식구만의 첫 해외여행 ${reviewPage} 페이지`,
            createdAt: "2010-01-01",
            averageStars: 0.0,
            productScore: 0,
            scheduleScore: 0,
            guideScore: 0,
            appointmentScore: 0,
          },
          {
            reviewId: reviewPage + 3,
            content: `오로지 우리 식구만의 첫 해외여행 ${reviewPage} 페이지`,
            createdAt: "2010-01-01",
            averageStars: 0.0,
            productScore: 0,
            scheduleScore: 0,
            guideScore: 0,
            appointmentScore: 0,
          },
          {
            reviewId: reviewPage + 4,
            content: `오로지 우리 식구만의 첫 해외여행 ${reviewPage} 페이지`,
            createdAt: "2010-01-01",
            averageStars: 0.0,
            productScore: 0,
            scheduleScore: 0,
            guideScore: 0,
            appointmentScore: 0,
          },
          {
            reviewId: reviewPage + 5,
            content: `오로지 우리 식구만의 첫 해외여행 ${reviewPage} 페이지`,
            createdAt: "2010-01-01",
            averageStars: 0.0,
            productScore: 0,
            scheduleScore: 0,
            guideScore: 0,
            appointmentScore: 0,
          },
          {
            reviewId: reviewPage + 6,
            content: `오로지 우리 식구만의 첫 해외여행 ${reviewPage} 페이지`,
            createdAt: "2010-01-01",
            averageStars: 0.0,
            productScore: 0,
            scheduleScore: 0,
            guideScore: 0,
            appointmentScore: 0,
          },
        ],
        page: {
          currentPage: reviewPage,
          totalPage: 10,
          currentElements: 6,
          totalElements: 0,
        },
      },
    });
  }),

  // 패키지 리뷰 평점
  http.get("/v1/reviews/packages/:id/list/summary", async () => {
    console.log("패키지 리뷰 평점");

    return HttpResponse.json({
      code: 200,
      data: {
        count: 0,
        averageStars: 4.8,
        averageProductScore: 4.2,
        averageScheduleScore: 3.4,
        averageGuideScore: 4.4,
        averageAppointmentScore: 5,
      },
    });
  }),

  // 내 정보 조회
  http.get("/v1/my/info", async () => {
    const myInfo = {
      code: 200,
      data: {
        email: "user@example.com",
        username: "위너원",
        phone: "010-1234-5678",
        addr1: "Gangnam-gu, Seoul",
        addr2: "123-45 Yeoksam-dong",
        postCode: "06178",
      },
    };

    return HttpResponse.json(myInfo);
  }),

  // 내 정보 수정
  http.patch("/v1/my/info", async (info) => {
    const accessToken = info.request.headers.get("Cookie")?.split("=")[1];
    if (!accessToken) {
      return new Response(JSON.stringify({ code: 401, message: "인증 실패" }), {
        status: 401,
      });
    }

    const requestBody = await info.request.json();
    return new Response(JSON.stringify({ code: 200, data: requestBody }), {
      status: 200,
    });
  }),

  // 비밀번호 수정
  http.put("/v1/my/password", async (info) => {
    const accessToken = info.request.headers.get("Cookie")?.split("=")[1];
    if (!accessToken) {
      return new Response(
        JSON.stringify({ code: 401, message: "Authentication failed" }),
        {
          status: 401,
        },
      );
    }
    // const { password } = await info.request.json();
    // console.log(password);

    return new Response(JSON.stringify({ code: 200 }), {
      status: 200,
    });
  }),

  // 다가오는 패키지
  http.get("/v1/my/upcoming-package", async () => {
    const upComingPackage = {
      code: 200,
      data: {
        packageId: 0,
        imageUrl: "//source.unsplash.com/500x500?america",
        title: "오사카 특별 패키지",
        dday: 30,
        nationName: "일본",
        departureDate: "2024-02-01",
        endDate: "2024-02-05",
      },
    };
    return HttpResponse.json(upComingPackage);
  }),

  // 내가 쓴 리뷰 목록
  http.get("/v1/reviews/my", async () => {
    return HttpResponse.json(myReviewData);
  }),

  // 리뷰 삭제
  http.delete("/v1/reviews/:reviewId", (info) => {
    const { reviewId } = info.params;
    myReviewData.data = myReviewData.data.filter(
      (review) => review.reviewId !== Number(reviewId),
    );

    return new HttpResponse(JSON.stringify({ code: 200 }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }),

  http.get("/v1/orders", ({ request }) => {
    const url = new URL(request.url);
    const orderPage = Number(url.searchParams.get("page")) || 1;
    const pageSize = Number(url.searchParams.get("pageSize")) || 3;
    const orderData = [
      {
        orderCode: "2023122910351",
        availableDateId: 0,
        orderId: 0,
        package: {
          packageId: 0,
          imageUrl: "//source.unsplash.com/90x90?japan",
          nationName: "일본",
          title: `${orderPage}청룡의 해 얼리버드 특가0`,
          hashtags: ["일본", "체험", "로컬 다이닝"],
          lodgeDays: 1, // 1박
          tripDays: 2, // 2일
          travelPeriod: "24.02.01~24.02.05",
          isWish: false,
          reviewed: false, // 리뷰 작성 여부
        },
      },
      {
        orderCode: "2023123010351",
        availableDateId: 0,
        orderId: 1,

        package: {
          packageId: 1,
          imageUrl: "//source.unsplash.com/90x90?japan",
          nationName: "일본",
          title: `${orderPage}청룡의 해 얼리버드 특가1`,
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
        orderId: 2,
        package: {
          packageId: 2,
          imageUrl: "//source.unsplash.com/90x90?japan",
          nationName: "일본",
          title: `${orderPage}청룡의 해 얼리버드 특가2`,
          hashtags: ["일본", "체험", "로컬 다이닝"],
          lodgeDays: 1, // 1박
          tripDays: 2, // 2일
          travelPeriod: "24.02.01~24.02.05",
          isWish: false,
          reviewed: false, // 리뷰 작성 여부
        },
      },
      {
        orderCode: "2023122910353",
        orderId: 3,
        availableDateId: 0,
        package: {
          packageId: 3,
          imageUrl: "//source.unsplash.com/90x90?japan",
          nationName: "일본",
          title: `${orderPage}청룡의 해 얼리버드 특가3`,
          hashtags: ["일본", "체험", "로컬 다이닝"],
          lodgeDays: 1, // 1박
          tripDays: 2, // 2일
          travelPeriod: "24.02.01~24.02.05",
          isWish: false,
          reviewed: false, // 리뷰 작성 여부
        },
      },
      {
        orderCode: "2023122910354",
        orderId: 4,
        availableDateId: 0,
        package: {
          packageId: 4,
          imageUrl: "//source.unsplash.com/90x90?japan",
          nationName: "일본",
          title: `${orderPage}청룡의 해 얼리버드 특가4`,
          hashtags: ["일본", "체험", "로컬 다이닝"],
          lodgeDays: 1, // 1박
          tripDays: 2, // 2일
          travelPeriod: "24.02.01~24.02.05",
          isWish: false,
          reviewed: false, // 리뷰 작성 여부
        },
      },
      {
        orderCode: "2023122910355",
        orderId: 5,
        availableDateId: 0,
        package: {
          packageId: 5,
          imageUrl: "//source.unsplash.com/90x90?japan",
          nationName: "일본",
          title: `${orderPage}청룡의 해 얼리버드 특가5`,
          hashtags: ["일본", "체험", "로컬 다이닝"],
          lodgeDays: 1, // 1박
          tripDays: 2, // 2일
          travelPeriod: "24.02.01~24.02.05",
          isWish: false,
          reviewed: false, // 리뷰 작성 여부
        },
      },
      {
        orderCode: "2023122910356",
        orderId: 6,

        availableDateId: 0,
        package: {
          packageId: 6,
          imageUrl: "//source.unsplash.com/90x90?japan",
          nationName: "일본",
          title: `${orderPage}청룡의 해 얼리버드 특가6`,
          hashtags: ["일본", "체험", "로컬 다이닝"],
          lodgeDays: 1, // 1박
          tripDays: 2, // 2일
          travelPeriod: "24.02.01~24.02.05",
          isWish: false,
          reviewed: false, // 리뷰 작성 여부
        },
      },
      {
        orderCode: "2023122910357",
        availableDateId: 0,
        orderId: 7,

        package: {
          packageId: 7,
          imageUrl: "//source.unsplash.com/90x90?japan",
          nationName: "일본",
          title: `${orderPage}청룡의 해 얼리버드 특가7`,
          hashtags: ["일본", "체험", "로컬 다이닝"],
          lodgeDays: 1, // 1박
          tripDays: 2, // 2일
          travelPeriod: "24.02.01~24.02.05",
          isWish: false,
          reviewed: false, // 리뷰 작성 여부
        },
      },
      {
        orderCode: "2023122910358",
        availableDateId: 0,
        orderId: 8,

        package: {
          packageId: 8,
          imageUrl: "//source.unsplash.com/90x90?japan",
          nationName: "일본",
          title: `${orderPage}청룡의 해 얼리버드 특가8`,
          hashtags: ["일본", "체험", "로컬 다이닝"],
          lodgeDays: 1, // 1박
          tripDays: 2, // 2일
          travelPeriod: "24.02.01~24.02.05",
          isWish: false,
          reviewed: false, // 리뷰 작성 여부
        },
      },
      {
        orderCode: "2023122910359",
        orderId: 9,
        availableDateId: 0,
        package: {
          packageId: 9,
          imageUrl: "//source.unsplash.com/90x90?japan",
          nationName: "일본",
          title: `${orderPage}청룡의 해 얼리버드 특가9`,
          hashtags: ["일본", "체험", "로컬 다이닝"],
          lodgeDays: 1, // 1박
          tripDays: 2, // 2일
          travelPeriod: "24.02.01~24.02.05",
          isWish: false,
          reviewed: false, // 리뷰 작성 여부
        },
      },
      {
        orderId: 10,
        orderCode: "2023122910310",
        availableDateId: 0,
        package: {
          packageId: 10,
          imageUrl: "//source.unsplash.com/90x90?japan",
          nationName: "일본",
          title: `${orderPage}청룡의 해 얼리버드 특가10`,
          hashtags: ["일본", "체험", "로컬 다이닝"],
          lodgeDays: 1, // 1박
          tripDays: 2, // 2일
          travelPeriod: "24.02.01~24.02.05",
          isWish: false,
          reviewed: false, // 리뷰 작성 여부
        },
      },
      {
        orderId: 11,
        orderCode: "2023122910311",
        availableDateId: 0,
        package: {
          packageId: 11,
          imageUrl: "//source.unsplash.com/90x90?japan",
          nationName: "일본",
          title: `${orderPage}청룡의 해 얼리버드 특가11`,
          hashtags: ["일본", "체험", "로컬 다이닝"],
          lodgeDays: 1, // 1박
          tripDays: 2, // 2일
          travelPeriod: "24.02.01~24.02.05",
          isWish: false,
          reviewed: false, // 리뷰 작성 여부
        },
      },
      {
        orderId: 12,
        orderCode: "2023122910312",
        availableDateId: 0,
        package: {
          packageId: 12,
          imageUrl: "//source.unsplash.com/90x90?japan",
          nationName: "일본",
          title: `${orderPage}청룡의 해 얼리버드 특가12`,
          hashtags: ["일본", "체험", "로컬 다이닝"],
          lodgeDays: 1, // 1박
          tripDays: 2, // 2일
          travelPeriod: "24.02.01~24.02.05",
          isWish: false,
          reviewed: false, // 리뷰 작성 여부
        },
      },
    ];
    // 페이지 사이즈에 따라 데이터 필터링
    const startIndex = (orderPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const filteredData = orderData.slice(startIndex, endIndex);

    return HttpResponse.json({
      code: 200,
      data: filteredData,
      page: {
        currentPage: orderPage, // 현재 페이지
        totalPage: Math.ceil(orderData.length / pageSize),
        currentElements: pageSize, // 현재 보여지는 목록의 개수
        totalElements: orderData.length, // 모든 페이지를 통틀어 목록이 몇 개 있는지
      },
    });
  }),

  // 공지사항 글 목록
  http.get("/v1/notices", async () => {
    const noticeList = {
      data: [
        {
          noticeId: 0,
          title: "2023년 01월 유료 할증료 안내",
          createdAt: "2010-01-01",
          categories: ["항공권 소식", "해외항공"],
        },
        {
          noticeId: 1,
          title: "2024년 01월 유료 할증료 안내",
          createdAt: "2010-01-02",
          categories: ["항공권 소식", "해외항공"],
        },
        {
          noticeId: 2,
          title: "공지사항 3",
          createdAt: "2010-01-03",
          categories: ["항공권 소식", "해외항공"],
        },
      ],
    };
    return HttpResponse.json(noticeList);
  }),
  // 공지사항 상세보기
  http.get("/v1/notices/:noticeId", async (req) => {
    const { noticeId } = req.params;
    const noticeIdAsString = Array.isArray(noticeId) ? noticeId[0] : noticeId;
    const numericNoticeId = parseInt(noticeIdAsString, 10);
    let noticeDetail;
    console.log(typeof req.params.noticeId);

    if (numericNoticeId === 0) {
      noticeDetail = {
        code: 200,
        data: {
          noticeId: 0,
          title: "쉽고 빠른 패키지 예약 플랫폼 ‘LET’S’ 오픈☆1",
          createdAt: "2010-01-01",
          content: [
            "너무 많은 패키지 상품들 찾기 번거로우셨죠? ",
            "",
            "LET'S는 여러분이 몇 번의 터치만으로 원하는 패키지를 빠르고 쉽게 찾아 예약할 수 있도록 도와주는 여행 패키지 플랫폼입니다.",
            "",
            "LET'S는 ‘우리, 함께’라는 슬로건과 함께 성장하고자 합니다. 모든 여행자를 위해 더 나은 패키지와 서비스를 제공하기 위해 더욱 노력하겠습니다.",
            "",
            "감사합니다.",
          ],
          categories: ["공지사항", "일반"],
        },
      };
    } else if (numericNoticeId === 1) {
      noticeDetail = {
        code: 200,
        data: {
          noticeId: 1,
          title: "2024년 01월 유류 할증료 안내☆2",
          createdAt: "2010-01-02",
          content: [
            "너무 많은 패키지 상품들 찾기 번거로우셨죠? ",
            "",
            "LET'S는 여러분이 몇 번의 터치만으로 원하는 패키지를 빠르고 쉽게 찾아 예약할 수 있도록 도와주는 여행 패키지 플랫폼입니다.",
            "",
            "LET'S는 ‘우리, 함께’라는 슬로건과 함께 성장하고자 합니다. 모든 여행자를 위해 더 나은 패키지와 서비스를 제공하기 위해 더욱 노력하겠습니다.",
            "",
            "감사합니다.",
          ],
          categories: ["공지사항", "일반"],
        },
      };
    } else if (numericNoticeId === 2) {
      noticeDetail = {
        code: 200,
        data: {
          noticeId: 2,
          title: "공지사항3☆",
          createdAt: "2010-01-03",
          content: [
            "너무 많은 패키지 상품들 찾기 번거로우셨죠? ",
            "",
            "LET'S는 여러분이 몇 번의 터치만으로 원하는 패키지를 빠르고 쉽게 찾아 예약할 수 있도록 도와주는 여행 패키지 플랫폼입니다.",
            "",
            "LET'S는 ‘우리, 함께’라는 슬로건과 함께 성장하고자 합니다. 모든 여행자를 위해 더 나은 패키지와 서비스를 제공하기 위해 더욱 노력하겠습니다.",
            "",
            "감사합니다.",
          ],
          categories: ["공지사항", "일반"],
        },
      };
    }
    return new Response(JSON.stringify(noticeDetail), {
      status: 200,
    });
  }),

  // 자주 묻는 질문 글 목록
  http.get("/v1/faq", async () => {
    console.log("자주 묻는 질문 글 목록");
    const faqList = {
      data: [
        {
          faqId: 0,
          title: "자동로그인 해제 방법을 알려주세요 1",
          createdAt: "2010-01-01",
          categories: ["기타서비스", "자동로그인"],
        },
        {
          faqId: 1,
          title: "자동로그인 해제 방법을 알려주세요 2",
          createdAt: "2010-01-02",
          categories: ["기타서비스", "자동로그인"],
        },
        {
          faqId: 2,
          title: "자동로그인 해제 방법을 알려주세요 3",
          createdAt: "2010-01-03",
          categories: ["기타서비스", "자동로그인"],
        },
      ],
    };
    return HttpResponse.json(faqList);
  }),

  // 자주 묻는 질문 상세보기
  http.get("/v1/faq/:faqId", async (req) => {
    const { faqId } = req.params;
    console.log(`faq ID ${faqId}의 상세내용`);
    const faqIdAsString = Array.isArray(faqId) ? faqId[0] : faqId;
    const numericFaqId = parseInt(faqIdAsString, 10);

    let faqDetail;
    if (numericFaqId === 0) {
      faqDetail = {
        code: 200,
        data: {
          faqId: 0,
          title: "예약하는 방법을 모르겠어요.",
          createdAt: "2010-01-01",
          categories: ["패키지", "예약"],
          content: [
            "원하시는 상품을 선택하신 후 이용일 선택, 옵션 선택, 수량 선택 후 정보 입력 및 결제해주시면 예약이 완료됩니다.",
          ],
        },
      };
    } else if (numericFaqId === 1) {
      faqDetail = {
        code: 200,
        data: {
          faqId: 1,
          title: "상품예약 후 변경이 가능한가요?",
          createdAt: "2010-01-02 ",
          categories: ["패키지", "변경"],
          content: [
            "원하시는 상품을 선택하신 후 이용일 선택, 옵션 선택, 수량 선택 후 정보 입력 및 결제해주시면 예약이 완료됩니다.",
          ],
        },
      };
    } else if (numericFaqId === 2) {
      faqDetail = {
        code: 200,
        data: {
          faqId: 2,
          title: "예약하는 혼자서 패키지 여행에 참여하고 싶은데 추가...",
          createdAt: "2010-01-01",
          categories: ["패키지", "기타"],
          content: [
            "원하시는 상품을 선택하신 후 이용일 선택, 옵션 선택, 수량 선택 후 정보 입력 및 결제해주시면 예약이 완료됩니다.",
          ],
        },
      };
    }

    return new Response(JSON.stringify(faqDetail), {
      status: 200,
    });
  }),

  // 회원 탈퇴
  http.delete("/v1/users", async () => {
    return new Response(JSON.stringify({ code: 200 }), {
      headers: {
        "Set-Cookie": "accessToken=;HttpOnly;Path=/;Max-Age=0",
        "Content-Type": "application/json",
      },
    });
  }),

  http.get("/v1/polls", () => {
    console.log("찬반 조회");

    // 비 로그인
    return HttpResponse.json({
      code: 200,
      data: {
        alreadySubmitted: false,
        subject: "여러분들의 여행 스타일은?",
        pollId: 0,
        A: ["여행은", " 휴식이지"], // 줄바꿈을 기준으로 나눔
        B: ["온 김에", "다 해보자!"],
      },
    });

    // 로그인
    return HttpResponse.json({
      code: 200,
      data: {
        alreadySubmitted: true,
      },
    });
  }),

  http.post("/v1/polls", async ({ request }) => {
    console.log("찬반 투표");

    // 비 로그인
    return new HttpResponse(
      JSON.stringify({
        code: 401,
      }),
      { status: 401 },
    );

    // 로그인
    const data = (await request.json()) as {
      choose: string;
    };

    return HttpResponse.json({
      code: 200,
      data,
    });
  }),

  http.get("/v1/polls/result", async () => {
    console.log("찬반 결과");

    // 비 로그인
    return new HttpResponse(
      JSON.stringify({
        code: 401,
        msg: "로그인 안됨",
      }),
      { status: 401 },
    );

    // 로그인
    return HttpResponse.json({
      code: 200,
      data: {
        alreadySubmitted: true,
        subject: "여러분들의 여행 스타일은?",
        A: {
          title: ["여행은", "휴식이지"],
          linkHashtag: "휴양/레저",
          count: 84,
          percentage: 84,
          selected: true,
        },
        B: {
          title: ["온 김에", "다 해보자!"],
          linkHashTag: "체험/액티비티",
          count: 16,
          percentage: 16,
          selected: false,
        },
        totalCount: 100,
      },
    });
  }),
];

export default handlers;
