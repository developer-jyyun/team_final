"use client";

import DefaultHeader from "@/app/_component/common/layout/DefaultHeader";
import useGetWishListQuery from "@/hooks/query/useGetWishListQuery";
import React from "react";
import EmptyContainer from "@/app/_component/common/layout/EmptyContainer";
import Link from "next/link";
import WishesList from "./_component/WishesList";

const HeartPage = () => {
  const { data: wishData } = useGetWishListQuery();
  const page = wishData?.pages[0].page;
  const data = wishData?.pages[0].data;

  return (
    <div className="w-full flex flex-col items-center">
      <DefaultHeader text="찜리스트" />
      <section className="w-full h-full px-6 flex flex-col">
        <p className="my-6 text-lg font-semibold leading-normal tracking-tighter text-left self-start">
          총 <span className=" text-pink-main">{page?.totalElements}</span>
          개의 패키지 상품
        </p>
        {!page?.totalElements ? (
          <div className="h-full flex flex-col justify-between">
            <EmptyContainer text="찜한 상품이 없습니다." />
            {/* 추후 Link에 href 제대로 연결해야해요!!!!!! */}
            <Link
              href={"/"}
              className="rounded-xl my-6 bg-pink text-white text-lg font-semibold py-2 px-16 cursor-pointer"
            >
              다양한 상품 둘러보러 가기
            </Link>
          </div>
        ) : (
          <WishesList data={data} />
        )}
      </section>
    </div>
  );
};

export default HeartPage;
