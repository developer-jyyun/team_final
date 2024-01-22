"use client";

import React from "react";
import DefaultHeader from "@/app/_component/common/layout/DefaultHeader";
import { useSearchParams } from "next/navigation";
import SearchEmpty from "./_component/SearchEmpty";

const SearchResultPage = () => {
  const params = useSearchParams();
  const keyword = params.get("keyword");
  const empty = true; // 임시 변수

  return (
    <div className="w-full flex flex-col">
      <DefaultHeader text="내가 원하는 여행 리스트" />
      {empty ? <SearchEmpty keyword={keyword} /> : <div>검색결과</div>}
    </div>
  );
};

export default SearchResultPage;
