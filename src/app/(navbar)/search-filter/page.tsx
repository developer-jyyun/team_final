import ContentsContainer from "@/app/_component/common/layout/ContentsContainer";
import DefaultHeader from "@/app/_component/common/layout/DefaultHeader";
import React from "react";
import ConceptsList from "./_component/ConceptsList";
import SearchButton from "./_component/SearchButton";
import PriceRangeBar from "./_component/PriceRangeBar";
import DestinationsList from "./_component/DestinationsList";

export const dynamic = "force-dynamic";

const SearchFilterPage = () => {
  return (
    <section className="w-full flex flex-col items-center">
      <DefaultHeader text="내가 원하는 여행 찾기" />
      <PriceRangeBar />
      <ContentsContainer title="어떤 컨셉으로 놀까?" subTitle="복수 선택 가능">
        <ConceptsList />
      </ContentsContainer>
      <ContentsContainer title="어디로 갈까?" subTitle="복수 선택 가능">
        <DestinationsList type="nations" />
        <DestinationsList type="continents" />
      </ContentsContainer>
      <SearchButton />
    </section>
  );
};

export default SearchFilterPage;
