"use client";

import InnerSection from "@/app/(navbar)/my/_component/InnerSection";
import React from "react";
import { useParams } from "next/navigation";
import useNoticeDetailQuery from "@/hooks/query/useNoticeDetailQuery";
import Link from "next/link";
import { SUB_TITLE_CLASS } from "@/app/constants";
import DataListItem from "../../_component/DataListItem";

const NoticeDetailPage = () => {
  const { id } = useParams();
  console.log(id);
  const noticeId = Array.isArray(id) ? id[0] : id; // 배열일 경우 첫 번째 요소를 선택

  // parseInt 함수를 사용할 때 진법 지정해줘야 함
  const prevNoticeId = parseInt(noticeId, 10) - 1;
  const nextNoticeId = parseInt(noticeId, 10) + 1;

  // 현재 글
  const { data, isLoading, isError, error } = useNoticeDetailQuery(noticeId);
  // 이전 글
  const { data: prevData } = useNoticeDetailQuery(`${prevNoticeId}`);
  // 다음 글
  const { data: nextData } = useNoticeDetailQuery(`${nextNoticeId}`);

  const prevLink = `/my/menu/notice/${prevNoticeId}`;
  const nextLink = `/my/menu/notice/${nextNoticeId}`;

  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>⚠ {error.message}⚠</div>;
  return (
    <InnerSection text="공지사항" backUrl="/my/menu">
      <div className="flex flex-col rounded bg-grey-e bg-opacity-20 h-[45vh]">
        <DataListItem data={data} theme="notice" />
        <p className="text-xs px-4 my-[-2px]">{data.content}</p>
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
