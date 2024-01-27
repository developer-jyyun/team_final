"use client";

import InnerSection from "@/app/(navbar)/my/_component/InnerSection";
import React from "react";
import { useParams } from "next/navigation";
import useNoticeDetailQuery from "@/hooks/query/useNoticeDetailQuery";
import Link from "next/link";
import { SUB_TITLE_CLASS } from "@/app/constants";
import SmallSpinner from "@/app/_component/common/layout/SmallSpinner";
import DataListItem from "../../_component/DataListItem";

const NoticeDetailPage = () => {
  const { id } = useParams();
  const noticeId = Array.isArray(id) ? id[0] : id;
  const prevNoticeId = parseInt(noticeId, 10) - 1;
  const nextNoticeId = parseInt(noticeId, 10) + 1;

  const { data, isLoading, isError, error } = useNoticeDetailQuery(noticeId);
  const { data: prevData } = useNoticeDetailQuery(`${prevNoticeId}`);
  const { data: nextData } = useNoticeDetailQuery(`${nextNoticeId}`);

  const prevLink = `/my/menu/notice/${prevNoticeId}`;
  const nextLink = `/my/menu/notice/${nextNoticeId}`;

  const contentLines: string[] =
    data && Array.isArray(data.content) ? data.content : [];
  if (isLoading) return <SmallSpinner />;
  if (isError) return <div>⚠ {error.message}⚠</div>;

  return (
    <InnerSection text="공지사항" backUrl="/my/menu">
      <div className="flex flex-col rounded bg-grey-e bg-opacity-20 h-[45vh] overflow-scroll">
        {data && <DataListItem data={data} theme="notice" />}
        {contentLines.map((line: string, index: number) => (
          <p key={index} className="text-xs px-4 my-2">
            {line}
          </p>
        ))}
      </div>
      <div className="mt-10">
        <h2 className={SUB_TITLE_CLASS}>이전 글</h2>
        {prevData ? (
          <Link href={prevLink} className="w-full">
            <DataListItem data={prevData} theme="notice" />
          </Link>
        ) : (
          <p className="rounded bg-grey-e bg-opacity-20 p-4 h-[84px] text-black-8 text-xs font-light">
            이전 글이 없습니다.
          </p>
        )}
        <h2 className={SUB_TITLE_CLASS}>다음 글</h2>

        {nextData ? (
          <Link href={nextLink} className="w-full  ">
            <DataListItem data={nextData} theme="notice" />
          </Link>
        ) : (
          <p className="rounded bg-grey-e bg-opacity-20 p-4 h-[84px] text-black-8 text-xs font-light">
            다음 글이 없습니다.
          </p>
        )}
      </div>
    </InnerSection>
  );
};

export default NoticeDetailPage;
