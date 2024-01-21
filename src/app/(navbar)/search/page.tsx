import React from "react";
import ForwardContainer from "./_component/ForwardContainer";
import ContentsContainer from "../../_component/common/layout/ContentsContainer";
import SearchHeader from "./_component/SearchHeader";
import KeywordsList from "./_component/KeywordsList";
import PackagesList from "./_component/PackagesList";

export const dynamic = "force-dynamic";

const SearchPage = () => {
  return (
    <section className="w-full flex flex-col">
      <SearchHeader />
      <ContentsContainer title="여행 추천 태그">
        <div className="flex">
          <KeywordsList start={0} />
          <KeywordsList start={5} />
        </div>
      </ContentsContainer>
      <ContentsContainer title="최근 많이 본 여행지">
        <PackagesList />
      </ContentsContainer>
      <ForwardContainer />
    </section>
  );
};

export default SearchPage;
