import React from "react";
import ForwardContainer from "./_component/ForwardContainer";
import ContentsContainer from "../../_component/common/layout/ContentsContainer";
import SearchHeader from "./_component/SearchHeader";
import HashtagsContainer from "./_component/HashtagsContainer";

export const dynamic = "force-dynamic";

const SearchPage = () => {
  return (
    <div className="w-full flex flex-col">
      <SearchHeader />
      <ContentsContainer title="여행 추천 태그">
        <HashtagsContainer />
      </ContentsContainer>
      <ContentsContainer title="최근 많이 본 여행지">
        <div>card items</div>
      </ContentsContainer>
      <ForwardContainer />
    </div>
  );
};

export default SearchPage;
