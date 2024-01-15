import Link from "next/link";
import React from "react";

const ForwardContainer = () => {
  return (
    <div className="flex flex-col justify-evenly items-center h-56 bg-blue-1">
      <p className="text-black-2 font-semibold text-lg">패키지 상품 찾기</p>
      <span className="text-black-8 text-center">
        국가, 테마별, 가격 등 필터를 이용해서 <br />
        나에게 맞는 패키지상품을 빠르게 찾아보세요.
      </span>
      <Link
        href={"/search-filter"}
        className="flex justify-evenly items-center rounded-full bg-gradient-to-br from-pink-sub3 to-pink-main w-[54px] h-[54px]"
      >
        <img
          src="./icons/optionsIcon.svg"
          alt="해시태그로 검색하기 페이지 바로가기"
        />
      </Link>
    </div>
  );
};

export default ForwardContainer;
