"use client";

import DefaultHeader from "@/app/_component/common/layout/DefaultHeader";
import { useSearchParams } from "next/navigation";
import SearchEmpty from "./_component/SearchEmpty";
import useKeywordResult from "./_hooks/useKeywordResult";
import SearchResult from "./_component/SearchResult";
import useHashtagResult from "./_hooks/useHashtagResult";

const SearchResultPage = () => {
  const params = useSearchParams();
  const keyword = params.get("keyword");

  const { keywordData } = useKeywordResult();
  const { hashtagData } = useHashtagResult();

  if (keyword) {
    console.log("hi");
    return (
      <div className="w-full flex flex-col">
        <DefaultHeader text="내가 원하는 여행 리스트" />
        <div>해시태그들</div>
        {keywordData?.data?.page.totalElements ? (
          <SearchResult data={keywordData?.data} />
        ) : (
          <SearchEmpty keyword={keyword} />
        )}
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col">
      <DefaultHeader text="내가 원하는 여행 리스트" />
      <div>해시태그들</div>
      <SearchResult data={hashtagData?.data} />
    </div>
  );
};

export default SearchResultPage;
