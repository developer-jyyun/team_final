"use client";

import DefaultHeader from "@/app/_component/common/layout/DefaultHeader";
import { useSearchParams } from "next/navigation";
import SearchEmpty from "./_component/SearchEmpty";
import useKeywordResult from "./_hooks/useKeywordResult";
import SearchResult from "./_component/SearchResult";
import useHashtagResult from "./_hooks/useHashtagResult";
import Options from "./_component/Options";

const SearchResultPage = () => {
  const params = useSearchParams();
  const keyword = params.get("keyword");

  const { keywordData } = useKeywordResult();
  const { hashtagData } = useHashtagResult();

  if (keyword) {
    return (
      <div className="flex flex-col w-full">
        <DefaultHeader text="내가 원하는 여행 리스트" />
        <section className="w-full px-5 flex flex-col">
          <Options />
          {keywordData?.data?.page.totalElements ? (
            <SearchResult data={keywordData?.data} />
          ) : (
            <SearchEmpty keyword={keyword} />
          )}
        </section>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full">
      <DefaultHeader text="내가 원하는 여행 리스트" />
      <section className="w-full px-5 flex flex-col">
        <Options />
        <SearchResult data={hashtagData?.data} />
      </section>
    </div>
  );
};

export default SearchResultPage;
