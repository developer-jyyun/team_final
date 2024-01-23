"use client";

import DetailTypography from "../../items/[id]/_component/DetailTypography";

interface SubmittedData {
  alreadySubmitted: boolean;
  subject: string;
  A: {
    selected: boolean;
    linkName: string;
    linkHashTag: string;
    count: number;
    percentage: number;
  };
  B: {
    selected: boolean;
    linkName: string;
    linkHashTag: string;
    count: number;
    percentage: number;
  };
  totalCount: number;
}

interface Props {
  result: SubmittedData;
  current: string;
}

const ViewResult = ({ result, current }: Props) => {
  const getSize = (numbe: number) => {
    return (numbe / result.totalCount) * 100;
  };

  return (
    <>
      <div className="flex flex-col mt-10 web:mt-7">
        <div>
          <DetailTypography size={16} bold={600}>
            총{" "}
            <span className="text-lg web:text-xl text-pink-main font-semibold">
              {result.totalCount}
            </span>
            명이 참여한 토론!
          </DetailTypography>
        </div>
        <div className="relative">
          <div className="absolute top-0 left-[50%] -translate-x-1/2 w-[100%] h-[22px] bg-grey-e rounded-[44px] mt-1" />
          <div
            className={`${
              current === "B" && "hidden"
            } absolute top-0 left-0 w-0 h-[22px] bg-custom-gradient-pink-2 rounded-[44px] mt-1`}
            style={{
              width: `${getSize(result.A.count)}%`,
            }}
          />
          <div
            className={`${
              current === "A" && "hidden"
            } absolute top-0 right-0 w-0 h-[22px] bg-custom-gradient-green-2 rounded-[44px] mt-1`}
            style={{
              width: `${getSize(result.B.count)}%`,
            }}
          />
        </div>
        <div className="flex justify-between items-center px-1 mt-8">
          <DetailTypography color={5} size={14} bold={500}>
            {current === "A" ? `${result.A.count}명` : ""}
          </DetailTypography>
          <DetailTypography color={5} size={14} bold={500}>
            {current === "B" ? `${result.B.count}명` : ""}
          </DetailTypography>
        </div>
      </div>
      <div className="grow" />
      <div className="flex justify-between">
        <button
          type="button"
          className="w-[151px] h-20 bg-custom-gradient-pink-2 rounded-lg web:w-44 web:h-[90px]"
        >
          <DetailTypography color="f" size={14} bold={700} align="center">
            휴양/레저
          </DetailTypography>
          <DetailTypography color="f" size={12} bold={500} align="center">
            구경하기
          </DetailTypography>
        </button>
        <button
          type="button"
          className="w-[151px] h-20 bg-custom-gradient-green-2 rounded-lg web:w-44 web:h-[90px]"
        >
          <DetailTypography color="f" size={14} bold={700} align="center">
            체험/액티비티
          </DetailTypography>
          <DetailTypography color="f" size={12} bold={500} align="center">
            구경하기
          </DetailTypography>
        </button>
      </div>
    </>
  );
};

export default ViewResult;
