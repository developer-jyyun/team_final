"use client";

import InnerSection from "@/app/(navbar)/my/_component/InnerSection";
import React from "react";
import { useParams } from "next/navigation";
import useFaqDetailQuery from "@/hooks/query/useFaqDetailQuery";
import Link from "next/link";
import { SUB_TITLE_CLASS } from "@/app/constants";
import DataListItem from "../../_component/DataListItem";

const FaqDetailPage = () => {
  const { id } = useParams();
  console.log(id);
  const faqId = Array.isArray(id) ? id[0] : id; // 배열일 경우 첫 번째 요소를 선택

  // parseInt 함수를 사용할 때 진법 지정해줘야 함
  const prevFaqId = parseInt(faqId, 10) - 1;
  const nextFaqId = parseInt(faqId, 10) + 1;

  // 현재 글
  const { data, isLoading, isError, error } = useFaqDetailQuery(faqId);
  // 이전 글
  const { data: prevData } = useFaqDetailQuery(`${prevFaqId}`);
  // 다음 글
  const { data: nextData } = useFaqDetailQuery(`${nextFaqId}`);

  const prevLink = `/my/menu/faq/${prevFaqId}`;
  const nextLink = `/my/menu/faq/${nextFaqId}`;

  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>⚠ {error.message}⚠</div>;
  return (
    <InnerSection text="공지사항" backUrl="/my/menu">
      <div className="flex flex-col rounded bg-grey-e bg-opacity-20">
        <DataListItem data={data} theme="faq" />
        <p className="text-xs px-4 my-[-2px]">{data.content}</p>
      </div>
      <div className="mt-10">
        <h2 className={SUB_TITLE_CLASS}>이전 글</h2>
        {prevData ? (
          <Link href={prevLink} className="w-full">
            <DataListItem data={prevData} theme="faq" />
          </Link>
        ) : (
          <p className="rounded bg-grey-e bg-opacity-20 p-4 h-[84px] text-black-8 text-xs font-light">
            이전 글이 없습니다.
          </p>
        )}
        <h2 className={SUB_TITLE_CLASS}>다음 글</h2>

        {nextData ? (
          <Link href={nextLink} className="w-full  ">
            <DataListItem data={nextData} theme="faq" />
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

export default FaqDetailPage;
