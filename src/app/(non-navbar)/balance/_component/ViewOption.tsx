import DetailTypography from "../../items/[id]/_component/DetailTypography";

const ViewOption = () => {
  return (
    <div className="flex flex-col px-6 web:px-[52px]">
      <div className="mt-8">
        <DetailTypography color={6} size={14} bold={600} align="center">
          여러분들의
        </DetailTypography>
        <DetailTypography size={22} bold={600} align="center">
          여행 스타일은?
        </DetailTypography>
      </div>
      <div className="relative flex justify-center mt-[26px]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <img src="icons/vsIcon.svg" alt="대결" />
        </div>
        <button type="button" className="relative">
          <img
            src="/icons/selectA.svg"
            alt="선택 1"
            className="web:w-[200px]"
          />
          <div className="absolute top-6 left-6 web:top-4 web:left-4">
            <DetailTypography size={16} bold={600}>
              여행은
            </DetailTypography>
            <DetailTypography size={22} bold={600} color="pink-dark">
              휴식이지!
            </DetailTypography>
          </div>
        </button>
        <button type="button" className="relative">
          <img
            src="/icons/selectB.svg"
            alt="선택 2"
            className="web:w-[200px]"
          />
          <div className="absolute top-6 right-6 web:top-4 web:right-4">
            <DetailTypography size={16} bold={600} align="right">
              온 김에
            </DetailTypography>
            <DetailTypography size={22} bold={600} color="green">
              다 해보자!
            </DetailTypography>
          </div>
        </button>
      </div>
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
    </div>
  );
};

export default ViewOption;
