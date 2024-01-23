import { MyOrder } from "@/app/types";

// 출발일을 Date 객체로 변환
function getStartDate(travelPeriod: string): Date {
  const [start] = travelPeriod.split("~");
  const [year, month, day] = start.split(".").map(Number);
  return new Date(year, month - 1, day);
}

const sortOrderList = (data: MyOrder[]): MyOrder[] => {
  const today = new Date();
  return data.sort((a, b) => {
    const startDateA = getStartDate(a.package.travelPeriod);
    const startDateB = getStartDate(b.package.travelPeriod);
    const isReviewedA = a.package.isReviewed;
    const isReviewedB = b.package.isReviewed;

    //  미사용 > 사용 완료 (리뷰 미작성) > 사용 완료 (리뷰 작성)
    if (startDateA >= today && startDateB >= today) {
      return startDateA.getTime() - startDateB.getTime();
    } else if (startDateA < today && startDateB < today) {
      if (isReviewedA && !isReviewedB) {
        return 1;
      } else if (!isReviewedA && isReviewedB) {
        return -1;
      }
      return startDateA.getTime() - startDateB.getTime();
    } else {
      return startDateA < today ? 1 : -1;
    }
  });
};

export default sortOrderList;
