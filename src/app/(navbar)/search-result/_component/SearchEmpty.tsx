import React from "react";
import EmptyContainer from "@/app/_component/common/layout/EmptyContainer";
import HashtagsContainer from "@/app/_component/common/layout/HashtagsContainer";
import ContentsContainer from "../../../_component/common/layout/ContentsContainer";

const SearchEmpty = () => {
  return (
    <>
      <EmptyContainer text="다른 검색어를 입력하시거나 철자와 띄어쓰기를 확인해 보세요.">
        <p className="text-base tracking-tighter leading-normal font-medium">
          <span className="text-black-5 text-lg font-semibold">검색어</span>에
          대한 검색결과가 없습니다.
        </p>
      </EmptyContainer>
      <ContentsContainer
        title={"검색이 어렵다면? \n 추천 검색어를 눌러보세요!"}
      >
        <HashtagsContainer />
      </ContentsContainer>
    </>
  );
};

export default SearchEmpty;
