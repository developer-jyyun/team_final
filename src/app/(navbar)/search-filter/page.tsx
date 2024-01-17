"use client";

import ContentsContainer from "@/app/_component/common/layout/ContentsContainer";
import DefaultHeader from "@/app/_component/common/layout/DefaultHeader";
import React from "react";
import ConceptsList from "./_component/ConceptsList";
import RangeSlider from "../my/review/_components/RangeSlider";
import SearchButton from "./_component/SearchButton";
import DestinationsList from "./_component/DestinationsList";

export const dynamic = "force-dynamic";

const SearchFilterPage = () => {
  return (
    <section className="w-full flex flex-col items-center">
      <DefaultHeader text="내가 원하는 여행 찾기" />
      <ContentsContainer title="여행 예산부터!">
        <RangeSlider
          onChange={() => {}}
          value={200}
          max={500}
          min={0}
          step={50}
        />
      </ContentsContainer>
      <ContentsContainer title="어떤 컨셉으로 놀까?">
        <ConceptsList />
      </ContentsContainer>
      <ContentsContainer title="어디로 갈까?">
        <DestinationsList type="nation" />
        <DestinationsList type="continent" />
      </ContentsContainer>
      <SearchButton disabled={false}>
        <p className="font-medium text-lg">
          검색된 <span className="font-extrabold">{"N"}</span>개의 상품 보기
        </p>
      </SearchButton>
    </section>
  );
};

export default SearchFilterPage;
