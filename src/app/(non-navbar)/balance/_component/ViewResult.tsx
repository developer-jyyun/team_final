"use client";

import DetailTypography from "../../items/[id]/_component/DetailTypography";

const ViewResult = () => {
  return (
    <>
      <div className="flex flex-col mt-10 web:mt-7">
        <div>
          <DetailTypography size={16} bold={600}>
            총{" "}
            <span className="text-lg web:text-xl text-pink-main font-semibold">
              9,999
            </span>
            명이 참여한 토론!
          </DetailTypography>
        </div>
        <div className="h-[22px] bg-grey-e rounded-[44px] mt-4 web:mt-1" />
      </div>
      <div className="flex justify-between mt-48 web:mt-11">
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
