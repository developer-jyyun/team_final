import React from "react";
import EmptyBox from "@/app/_component/common/layout/EmptyBox";
import HashtagsBox from "@/app/_component/common/layout/HashtagsBox";
import ContentsBox from "../../../_component/common/layout/ContentsBox";

const SearchEmpty = () => {
  return (
    <>
      <EmptyBox text="다른 검색어를 입력하시거나 철자와 띄어쓰기를 확인해 보세요.">
        <p className="text-base tracking-tighter leading-normal font-medium">
          <span className="text-black-5 text-lg font-semibold">검색어</span>에
          대한 검색결과가 없습니다.
        </p>
      </EmptyBox>
      <ContentsBox title={"검색이 어렵다면? \n 추천 검색어를 눌러보세요!"}>
        <HashtagsBox />
      </ContentsBox>
    </>
  );
};

export default SearchEmpty;
