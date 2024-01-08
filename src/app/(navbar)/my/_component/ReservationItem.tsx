import Button from "@/app/_component/common/atom/Button";

const ReservationItem = () => {
  // 데이터 연동 후 제거
  const hashTags = ["일본", "체험/액티비티", "쇼핑"];

  return (
    <li className="w-full relative p-3 flex flex-row gap-2 border border-solid border-black rounded-md">
      <div className=" basis-1/3 rounded-md overflow-hidden">
        <img
          className="w-full h-full"
          src="//source.unsplash.com/100x100?japan"
          alt="예약내역 이미지"
        />
      </div>
      <div className="flex flex-col justify-center px-3 basis-2/3 gap-2">
        <p className="flex flex-row items-center gap-10 ">
          <span className="font-bold text-md ">청룡의 해 얼리버드 특가</span>
        </p>
        <p className="flex flex-row items-center justify-start gap-1">
          {hashTags?.map((item) => (
            <span className="border border-solid border-grey-4 rounded p-1 text-xs">
              {item}
            </span>
          ))}
        </p>
        <div className="flex justify-between items-end text-[11px] mt-1">
          <span className=" text-[11px] ">4박 5일</span>
          <span className=" text-[11px] ">24.01.01-24.01.25</span>

          <Button
            text="전체 보기"
            styleClass="rounded-lg text-[11px] py-1 px-1.5 bg-pink text-white"
            // TODO:: onClickFn  상세페이지 이동
          />
        </div>
      </div>
    </li>
  );
};

export default ReservationItem;
