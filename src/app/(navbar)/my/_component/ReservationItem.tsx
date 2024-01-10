import Button from "@/app/_component/common/atom/Button";
import Link from "next/link";

interface Props {
  theme: string;
  hashTag?: boolean;
}
const ReservationItem = ({ theme, hashTag }: Props) => {
  // 데이터 연동 후 제거
  const hashTags = ["일본", "체험/액티비티", "로컬 다이닝"];
  return (
    <li className="w-full relative  flex flex-row justify-between gap-4">
      <div className="width-1/3 shrink-0 rounded-lg overflow-hidden">
        <img
          className="w-full h-full"
          src="//source.unsplash.com/90x90?japan"
          alt="예약내역 이미지"
        />
      </div>
      <div
        className="width-2/3  flex flex-col justify-center gap-2.5
      web:w-full"
      >
        <p className="flex flex-row items-center gap-10 max-w-[75%] ">
          <span className="font-medium text-lg text-black-2 whitespace-nowrap truncate text-ellipsis">
            청룡의 해 얼리버드 특가ㅎㅎㅎㅎㅎㅎ
          </span>
        </p>
        {hashTag && (
          <p className="flex flex-row items-center justify-start gap-1">
            {hashTags?.map((item) => (
              <span className="border text-black-4 border-solid border-black-6 rounded-xl text-[11px] py-1 px-2 web:text-sm">
                {item}
              </span>
            ))}
          </p>
        )}
        {theme === "reservationMenu" && (
          <div className="flex justify-start items-center text-[11px] gap-2 web:gap-6">
            <span className="text-red-1 text-[10px] text-xsfont-size web:text-sm ">
              4박 5일
            </span>
            <span className="text-red-1 text-xs text-xsfont-size font-medium web:text-sm ">
              24.01.01-24.01.25
            </span>
            <Button
              text="전체 보기"
              styleClass="rounded-lg text-xs py-1 px-2 bg-pink-main text-white mb-0.5"
              // TODO:: onClickFn  상세페이지 이동
            />
          </div>
        )}
        {theme === "reservationTab" && (
          <Link href="/my/review">
            <Button
              text="리뷰 쓰러 가기"
              styleClass="w-full rounded text-xs p-2 px-4 mt-4 bg-pink-main text-white"
              // TODO:: onClickFn 리뷰 목록 이동
            />
          </Link>
        )}
        {theme === "review" && (
          <p className=" text-[11px] ">24.01.01-24.01.25</p>
        )}
      </div>
    </li>
  );
};

export default ReservationItem;
