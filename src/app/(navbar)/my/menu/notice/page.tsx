"use client";

import SmallSpinner from "@/app/_component/common/layout/SmallSpinner";
import useNoticeListQuery from "@/hooks/query/useNoticeListQuery";
import InnerSection from "../../_component/InnerSection";
import DataList from "../_component/DataList";

const NoticePage = () => {
  const { data, isLoading, isError, error } = useNoticeListQuery();

  if (isLoading) return <SmallSpinner />;
  if (isError) return <div>⚠ {error.message}⚠</div>;
  return (
    <InnerSection text="공지사항" backUrl="/my/menu">
      <ul className="flex flex-col gap-3">
        <DataList data={data} theme="notice" />
      </ul>
    </InnerSection>
  );
};

export default NoticePage;
