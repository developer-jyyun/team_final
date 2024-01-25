"use client";

import useGetPollsMainQuery from "@/hooks/query/useGetPollsMainQuery";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
  subject: string;
  pollId: number;
  A: string[];
  B: string[];
}

const HomeProsAndCons = () => {
  const router = useRouter();
  const [, setPolls] = useState<Props[]>();
  const { data } = useGetPollsMainQuery();

  useEffect(() => {
    if (data) {
      setPolls(data?.data);
    }

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleBalanceClick = () => {
    router.push("/balance");
  };

  return (
    <div
      className="w-full h-[80px] flex cursor-pointer"
      onClick={() => handleBalanceClick()}
    >
      <img src="/assets/mainPoll.png" alt="mainPoll" className="w-full" />
    </div>
  );
};

export default HomeProsAndCons;
