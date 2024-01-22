"use client";

import React, { useState } from "react";
import DefaultHeader from "@/app/_component/common/layout/DefaultHeader";
import ChangeCompareProduct from "./_component/ChangeCompareProduct";
import WishListPage from "./_component/WishListPage";

const Compare = () => {
  const [isCompareComplete, setIsCompareComplete] = useState(false);

  const handleCompareComplete = () => {
    setIsCompareComplete(true);
  };
  return (
    <section>
      <DefaultHeader text={isCompareComplete ? "찜 리스트" : "1:1 비교"} />
      {isCompareComplete ? (
        <WishListPage />
      ) : (
        <ChangeCompareProduct onChange={handleCompareComplete} />
      )}
    </section>
  );
};

export default Compare;
