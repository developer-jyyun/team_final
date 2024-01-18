"use client";

import ContentsContainer from "@/app/_component/common/layout/ContentsContainer";
import React, { useState } from "react";
import RangeSlider from "../../my/review/_components/RangeSlider";

const PriceRangeBar = () => {
  const [value, setValue] = useState(200);

  return (
    <ContentsContainer title="여행 예산부터!">
      <RangeSlider
        onChange={setValue}
        value={value}
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
