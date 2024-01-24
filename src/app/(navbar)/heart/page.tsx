"use client";

import DefaultHeader from "@/app/_component/common/layout/DefaultHeader";
import useGetWishListQuery from "@/hooks/query/useGetWishListQuery";
import React from "react";
import WishesList from "./_component/WishesList";

const HeartPage = () => {
  const { data: wishData } = useGetWishListQuery();
  const page = wishData?.pages[0].page;
  const data = wishData?.pages[0].data;
  return (
    <div className="w-full flex flex-col items-center">
      <DefaultHeader text="찜리스트" />
      <section className="w-full px-6 flex flex-col">
        <p className="my-6 text-lg font-semibold leading-normal tracking-tighter text-left self-start">
          총 <span className=" text-pink-main">{page?.totalElements}</span>
          개의 패키지 상품
        </p>
        <WishesList data={data} />
      </section>
    </div>
  );
};

export default HeartPage;
