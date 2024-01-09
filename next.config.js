/** @type {import('next').NextConfig} */
const nextConfig = {
  // 도메인 배열 중 첫번째는 테스트 이미지용으로 가져온 외부 주소입니다! 기능 구체화하면서 삭제 예정입니다.
  images: {
    domains: ["images.theconversation.com", "api.winnerone.site"],
  },
};

module.exports = nextConfig;
