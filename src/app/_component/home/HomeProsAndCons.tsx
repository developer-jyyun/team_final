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
    // <div
    // className="w-full h-[80px] flex cursor-pointer"
    // onClick={() => handleBalanceClick()}
    // >
    // </div>
    <div
      className="flex items-center justify-center cursor-pointer"
      onClick={handleBalanceClick}
    >
      <div className="w-[340px] relative -top-4 web:w-[400px]">
        <div className="absolute left-0 translate-x-[15px] web:translate-x-[24px]">
          <div className="absolute left-14 web:left-20 text-left top-1/2 -translate-y-1/2 text-black-2 text-sm font-bold">
            <p>여행은</p>
            <p>휴식이지</p>
          </div>
          <img
            src="/icons/balanceMainB.svg"
            alt=""
            className="w-[170px] web:w-[200px]"
          />
        </div>
        <img
          src="/icons/vsIcon.svg"
          alt=""
          className="absolute top-3 left-1/2 translate-y-1/2 -translate-x-1/2 z-30 w-[45px]"
        />
        <div className="absolute right-0 -translate-x-[15px] text-right web:-translate-x-[24px]">
          <div className="absolute right-14 web:right-20 top-1/2 -translate-y-1/2 text-black-2 text-sm font-bold">
            <p>온김에</p>
            <p>다해보자</p>
          </div>
          <img
            src="/icons/balanceMainA.svg"
            alt=""
            className="w-[170px] web:w-[200px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeProsAndCons;
