import Button from "@/app/_component/common/atom/Button";
import React from "react";

const WishListNone = () => {
  return (
    <div>
      <div className="my-7">
        <h3 className="text-black-2 text-lg font-semibold">
          총 <b className="text-pink-main">0</b>개의 패키지 상품
        </h3>
      </div>

      <div className="mt-44">
        <div className="flex flex-col items-center">
          <img src="/assets/sadMainLogo.svg" alt="찡그린 이미지" />
          <p className="mt-10 text-black-8 text-sm font-light">
            찜한 상품이 없습니다.
          </p>
          <p className="mt-1 mx-20 text-black-2 text-lg font-medium text-center">
            상품을 비교하고 싶다면
            <br /> 다양한 상품을 찜 해보세요!
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-40">
        <Button
          text={"다양한 상품 둘러보러 가기"}
          styleClass={`rounded-xl bg-pink text-white text-lg font-semibold py-2 px-16 cursor-pointer`}
        />
      </div>
    </div>
  );
};
export default WishListNone;
