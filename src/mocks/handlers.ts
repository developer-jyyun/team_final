import { http, HttpResponse } from "msw";

const handlers = [
  http.get("/api/hi", () => {
    console.log("메인");
    return HttpResponse.json("hi");
  }),

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
];

export default handlers;
