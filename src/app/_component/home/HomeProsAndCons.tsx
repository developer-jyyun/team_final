"use client";

import DetailTypography from "@/app/(non-navbar)/items/[id]/_component/DetailTypography";
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

  console.log(data);

  return (
    <div
      className="relative flex justify-center cursor-pointer"
      onClick={() => handleBalanceClick()}
    >
      <div className="absolute left-20 web:left-28 top-1/2 -translate-y-1/2">
        {data?.data.A.map((text: string, index: number) => {
          return (
            <DetailTypography
              size={14}
              bold={700}
              align="left"
              key={text + index}
            >
              {text}
            </DetailTypography>
          );
        })}
      </div>
      <div className="absolute right-20 web:right-28 top-1/2 -translate-y-1/2">
        {data?.data.B.map((text: string, index: number) => {
          return (
            <DetailTypography
              size={14}
              bold={700}
              align="right"
              key={text + index}
            >
              {text}
            </DetailTypography>
          );
        })}
      </div>

      <img src="/icons/balanceMain.png" alt="mainPoll" />
    </div>
  );
};

export default HomeProsAndCons;
