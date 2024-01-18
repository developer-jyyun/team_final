import Link from "next/link";
import DetailTypography from "./DetailTypography";

const ItemNotFound = () => {
  return (
    <div className="w-full">
      <div className="mt-16 web:mt-20">
        <div className="flex justify-center mb-6">
          <img src="/assets/mainLogo.svg" alt="메인 로고" className="w-40" />
        </div>
        <DetailTypography variant="h1" color={4} size={16} align="center">
          요청하신 상품이 존재하지 않습니다
        </DetailTypography>
        <DetailTypography color={6} size={14} align="center">
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

export default ItemNotFound;
