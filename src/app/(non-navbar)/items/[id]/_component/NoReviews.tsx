import Link from "next/link";
import DetailTypography from "./DetailTypography";

const NoReviews = () => {
  return (
    <div className="w-full">
      <div className="mt-10">
        <div className="flex justify-center mb-6">
          <img src="/assets/withdraw.png" alt="메인 로고" className="w-40" />
        </div>
        <DetailTypography variant="h1" color={4} size={16} align="center">
          해당 상품의 리뷰가 없습니다
        </DetailTypography>
        <DetailTypography color={6} size={14} align="center">
          리뷰를 작성해 보세요!!
        </DetailTypography>
        <div className="flex justify-center mt-1">
          <Link
            href={"/"}
            className="border-[1px] border-solid border-pink text-pink rounded-[6px] px-2 py-1 m-2"
          >
            리뷰 작성하러 가기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NoReviews;
