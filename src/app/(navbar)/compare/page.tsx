import React from "react";
import DefaultHeader from "@/app/_component/common/layout/DefaultHeader";
import ChangeCompareProduct from "./_component/ChangeCompareProduct";

const Compare = () => {
  return (
    <section>
      <DefaultHeader text="1:1 비교" />
      <ChangeCompareProduct />
    </section>
  );
};

export default Compare;
