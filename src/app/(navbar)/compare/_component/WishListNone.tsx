import EmptyContainer from "@/app/_component/common/layout/EmptyContainer";
import Link from "next/link";
import React from "react";

const WishListNone = () => {
  return (
    <div>
      <p className="my-6 text-lg font-semibold leading-normal tracking-tighter text-left self-start">
        총 <span className=" text-pink-main">0</span>
        개의 패키지 상품
      </p>

      <div className="flex flex-col items-center justify-between">
        <div className="flex flex-col">
          <EmptyContainer text="찜한 상품이 없습니다." />
          <p className="text-center my-1.5 font-semibold leading-6 tracking-tighter text-base text-black-2">
            상품을 비교하고 싶다면
            <br /> 다양한 상품을 찜 해보세요!
          </p>
        </div>
        <Link
          href={"/theme/0"}
          className="absolute bottom-[56px] rounded-xl my-6 bg-pink text-white text-lg font-semibold py-2 px-16 cursor-pointer"
        >
          다양한 상품 둘러보러 가기
        </Link>
      </div>
    </div>
  );
};
export default WishListNone;
