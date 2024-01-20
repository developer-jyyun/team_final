import React from "react";
import DefaultHeader from "@/app/_component/common/layout/DefaultHeader";
import SearchEmpty from "./_component/SearchEmpty";

export const dynamic = "force-dynamic";

const SearchResultPage = () => {
  const empty = true; // 임시 변수입니다!
  return (
    <div className="w-full flex flex-col">
      <DefaultHeader text="내가 원하는 여행 리스트" />
      {empty ? <SearchEmpty /> : <div>검색결과</div>}
    </div>
  );
};

export default SearchResultPage;
