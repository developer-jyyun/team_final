"use client";

import { useRouter } from "next/navigation";
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
  const router = useRouter();

  const getSize = (numbe: number) => {
    return (numbe / result.totalCount) * 100;
  };

  const handleClickAHashTag = () => {
    router.push(`/search-result?keyword=${result.A.linkHashTag}`);
  };
  const handleClickBHashTag = () => {
    router.push(`/search-result?keyword=${result.B.linkHashTag}`);
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
          <div className="z-10 absolute top-1/2 left-3 translate-y-1/2 text-white text-[10px] web:text-xs font-semibold">
            {current === "A" ? `${result.A.percentage}%` : ""}
          </div>
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
          <div className="z-10 absolute top-1/2 right-3 translate-y-1/2 text-white text-[10px] web:text-xs font-semibold">
            {current === "B" ? `${result.B.percentage}%` : ""}
          </div>
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
          onClick={handleClickAHashTag}
        >
          <DetailTypography color="f" size={14} bold={700} align="center">
            {result.A.linkHashTag}
          </DetailTypography>
          <DetailTypography color="f" size={12} bold={500} align="center">
            구경하기
          </DetailTypography>
        </button>
        <button
          type="button"
          className="w-[151px] h-20 bg-custom-gradient-green-2 rounded-lg web:w-44 web:h-[90px]"
          onClick={handleClickBHashTag}
        >
          <DetailTypography color="f" size={14} bold={700} align="center">
            {result.B.linkHashTag}
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
