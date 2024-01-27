"use client";

import React from "react";
import SmallSpinner from "@/app/_component/common/layout/SmallSpinner";
import useFaqListQuery from "@/hooks/query/useFaqListQuery";
import InnerSection from "../../_component/InnerSection";
import DataList from "../_component/DataList";

const FaqPage = () => {
  const { data, isLoading, isError, error } = useFaqListQuery();

  if (isLoading) return <SmallSpinner />;
  if (isError) return <div>⚠ {error.message}⚠</div>;
  return (
    <InnerSection text="자주 묻는 질문" backUrl="/my/menu">
      <ul className="flex flex-col gap-3">
        <DataList data={data} theme="faq" />
      </ul>
    </InnerSection>
  );
};

export default FaqPage;
