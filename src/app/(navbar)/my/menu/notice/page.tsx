"use client";

import useNoticeListQuery from "@/hooks/query/useNoticeListQuery";
import InnerSection from "../../_component/InnerSection";
import DataList from "../_component/DataList";

const NoticePage = () => {
  const { data, isLoading, isError, error } = useNoticeListQuery();

  if (isLoading) return <div>로딩 중...</div>;
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
