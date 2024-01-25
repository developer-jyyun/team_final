"use client";

import Dialog from "@/app/_component/common/layout/Dialog";
import useGetPollsMainQuery from "@/hooks/query/useGetPollsMainQuery";
import useGetPollsResult from "@/hooks/query/useGetPollsResult";
import usePollsQuery from "@/hooks/query/usePollsQuery";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import DetailTypography from "../../items/[id]/_component/DetailTypography";
import SelectA from "./SelectA";
import SelectB from "./SelectB";
import ViewResult from "./ViewResult";

const ViewOption = () => {
  const router = useRouter();
  const { data: polls } = useGetPollsMainQuery();
  const { data: pollsAuth, refetch: refetchPolls } = usePollsQuery();
  const { data: pollsResult, refetch: refetchResult } = useGetPollsResult();

  const [isLogin, setIsLogin] = useState(false);

  const [activeA, setActiveA] = useState(
    pollsResult.code !== 200 ? true : pollsResult?.data.A.selected,
  );
  const [activeB, setActiveB] = useState(
    pollsResult.code !== 200 ? true : pollsResult?.data.B.selected,
  );

  const [current, setCurrent] = useState(
    pollsResult.data?.A.selected ? "A" : "B",
  );

  useEffect(() => {
    setActiveA(pollsResult.code !== 200 ? true : pollsResult?.data.A.selected);
    setActiveB(pollsResult.code !== 200 ? true : pollsResult?.data.B.selected);
    setCurrent(pollsResult.data?.A.selected ? "A" : "B");
  }, [pollsResult.code]);

  const getVSStyle = () => {
    if (activeA && !activeB) return "icons/vsvIcon.svg";
    if (!activeA && activeB) return "icons/vssIcon.svg";

    return "icons/vsIcon.svg";
  };

  if (polls.message === "등록된 찬/반 토론 이벤트가 없습니다.") {
    return <div>등록된 이벤트가 없습니다.</div>;
  }

  return (
    <div className="flex flex-col justify-start h-[calc(100%-80px)] px-6 web:px-[52px]">
      <div className="mt-12 web:mt-8">
        <DetailTypography color={6} size={14} bold={600} align="center">
          여러분들의
        </DetailTypography>
        <DetailTypography size={22} bold={600} align="center">
          여행 스타일은?
        </DetailTypography>
      </div>
      <div className="relative flex justify-center mt-[26px]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <img src={getVSStyle()} alt="대결" />
        </div>
        <div className={`${activeA ? "z-10" : ""}`}>
          <SelectA
            active={activeA}
            title={polls.data.A}
            submitted={pollsAuth}
            setIsLogin={setIsLogin}
            setActiveA={setActiveA}
            setActiveB={setActiveB}
            setCurrent={setCurrent}
            refetchResult={refetchResult}
            refetchPolls={refetchPolls}
            voted={activeA && activeB}
          />
        </div>
        <div className={`${activeB ? "z-10" : ""}`}>
          <SelectB
            active={activeB}
            title={polls.data.B}
            submitted={pollsAuth}
            setIsLogin={setIsLogin}
            setActiveA={setActiveA}
            setActiveB={setActiveB}
            setCurrent={setCurrent}
            refetchResult={refetchResult}
            refetchPolls={refetchPolls}
            voted={activeA && activeB}
          />
        </div>
      </div>
      <Dialog
        isOpen={isLogin}
        type="confirm"
        theme="login"
        onClose={() => {
          setIsLogin(false);
        }}
        onConfirm={() => {
          router.push("/signin?redirect=/balance");
        }}
      />

      {pollsResult.code === 200 && (
        <ViewResult result={pollsResult?.data} current={current} />
      )}
    </div>
  );
};

export default ViewOption;
