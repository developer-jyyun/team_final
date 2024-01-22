/*
  광고구좌 페이지 내 헤더 텍스트 반환
  전달받은 광고의 인덱스(adId)를 기준으로 특정 문자열을 반환합니다.
*/

const getAdsHeaderText = (index: number) => {
  switch (index) {
    case 1:
      return "오사카";
    case 2:
      return "대만";
    case 3:
      return "유럽";
    default:
      return "";
  }
};

export default getAdsHeaderText;
