"use client";

import Dialog from "@/app/_component/common/layout/Dialog";
import useGetPollsQuery from "@/hooks/query/useGetPollsQuery";
import useGetPollsResult from "@/hooks/query/useGetPollsResult";
import { useRouter } from "next/navigation";
import { useState } from "react";
import DetailTypography from "../../items/[id]/_component/DetailTypography";
import SelectA from "./SelectA";
import SelectB from "./SelectB";
import ViewResult from "./ViewResult";

const ViewOption = () => {
  const router = useRouter();
  const { data: polls } = useGetPollsQuery();
  const { data: pollsRessult } = useGetPollsResult();

  // console.log(pollsRessult);
  const [isLogin, setIsLogin] = useState(false);

  const [activeA] = useState(true);
  const [activeB] = useState(true);

  const [aHover] = useState(false);
  const [bHover] = useState(false);

  // const [isSelected, setIsSelected] = useState(false);

  const getVSStyle = () => {
    if (activeA && !activeB) return "icons/vsvIcon.svg";
    if (!activeA && activeB) return "icons/vssIcon.svg";

    return "icons/vsIcon.svg";
  };

  // if (polls.data.alreadySubmitted) {
  //   return <div>asd</div>;
  // }

  return (
    <div className="flex flex-col justify-center px-6 web:px-[52px]">
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
        <div
          className={`${aHover ? "z-10" : ""}`}
          // onFocus={() => {
          //   setAHover(true);
          //   setBHover(false);
          // }}
        >
          <SelectA
            active={activeA}
            title={polls.data.A}
            setIsLogin={setIsLogin}
          />
        </div>
        <div
          className={`${bHover ? "z-10" : ""}`}
          // onFocus={() => {
          //   setBHover(true);
          //   setAHover(false);
          // }}
        >
          <SelectB
            active={activeB}
            title={polls.data.B}
            setIsLogin={setIsLogin}
          />
        </div>
      </div>
      {pollsRessult.code === 200 && <ViewResult />}
      <Dialog
        isOpen={isLogin}
        type="confirm"
        theme="login"
        onClose={() => {
          setIsLogin(false);
        }}
        onConfirm={() => {
          router.push("/signin");
        }}
      />

      {/* <ViewResult /> */}
    </div>
  );
};

export default ViewOption;
