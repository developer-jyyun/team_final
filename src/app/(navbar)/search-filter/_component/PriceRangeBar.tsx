"use client";

import ContentsContainer from "@/app/_component/common/layout/ContentsContainer";
import useSearchFilterStore from "@/store/useSearchFilterStore";
import RangeSlider from "../../my/review/_components/RangeSlider";

const PriceRangeBar = () => {
  const { price, updatePrice } = useSearchFilterStore();

  return (
    <ContentsContainer title="여행 예산부터!" subTitle="1인기준">
      <RangeSlider
        onChange={updatePrice}
        value={price}
        max={500}
        min={0}
        step={50}
        mark="show"
        unit="만원"
      />
    </ContentsContainer>
  );
};

export default PriceRangeBar;
