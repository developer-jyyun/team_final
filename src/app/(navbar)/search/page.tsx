import React from "react";
import ForwardContainer from "./_component/ForwardContainer";
import ContentsContainer from "../../_component/common/layout/ContentsContainer";
import SearchHeader from "./_component/SearchHeader";
import HashtagsList from "./_component/HashtagsList";

export const dynamic = "force-dynamic";

const SearchPage = () => {
  return (
    <div className="w-full flex flex-col">
      <SearchHeader />
      <ContentsContainer title="여행 추천 태그">
        <div className="flex">
          <HashtagsList start={0} />
          <HashtagsList start={5} />
        </div>
      </ContentsContainer>
      <ContentsContainer title="최근 많이 본 여행지">
        <div>card items</div>
      </ContentsContainer>
      <ForwardContainer />
    </div>
  );
};

export default SearchPage;
