import React from "react";
import EmptyContainer from "@/app/_component/common/layout/EmptyContainer";

interface Props {
  keyword: string | null;
}

const SearchEmpty = ({ keyword }: Props) => {
  return (
    <EmptyContainer text="다른 검색어를 입력하시거나 철자와 띄어쓰기를 확인해 보세요.">
      <p className="text-base tracking-tighter leading-normal font-medium">
        <span className="text-black-5 text-lg font-semibold">{keyword}</span>에
        대한 검색결과가 없습니다.
      </p>
    </EmptyContainer>
  );
};

export default SearchEmpty;
