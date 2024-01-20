import Link from "next/link";
import DetailTypography from "@/app/(non-navbar)/items/[id]/_component/DetailTypography";

const NotFoundForSchedule = () => {
  return (
    <div className="w-full">
      <div className="mt-4">
        <div className="flex justify-center mb-2">
          <img src="/assets/withdraw.png" alt="메인 로고" className="w-28" />
        </div>
        <DetailTypography variant="h1" color={4} size={14} align="center">
          요청하신 상품이 존재하지 않습니다
        </DetailTypography>
        <DetailTypography color={6} size={12} align="center">
          다른 상품을 찾아보세요
        </DetailTypography>
        <div className="flex justify-center mt-1">
          <Link
            href={"/"}
            className="border-[1px] border-solid border-pink text-pink rounded-[6px] px-2 py-1 m-2"
          >
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundForSchedule;
