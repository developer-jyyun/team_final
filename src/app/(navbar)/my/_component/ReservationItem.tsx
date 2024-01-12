import Button from "@/app/_component/common/atom/Button";
import Link from "next/link";
import Chip from "./Chip";

interface Props {
  theme: string;
  hashTag?: boolean;
}
const ReservationItem = ({ theme, hashTag }: Props) => {
  // 데이터 연동 후 제거
  const hashTags = ["일본", "체험/액티비티", "로컬 다이닝"];
  return (
    <li className="w-full h-[90px] relative  flex flex-row justify-between gap-[18px]">
      <div className="w-[90px] shrink-0 rounded-lg overflow-hidden">
        <img
          className="w-full h-full"
          src="//source.unsplash.com/90x90?japan"
          alt="예약내역 이미지"
        />
      </div>
      <div className="w-2/3  flex flex-col justify-center web:w-full">
        <p className="flex flex-row items-center gap-10 max-w-[90%] ">
          <span className="font-medium text-lg text-black-2 truncate ">
            청룡의 해 얼리버드 특가ㅎㅎㅎㅎㅎㅎ
          </span>
        </p>
        <div className="mt-2.5 mb-3">
          {hashTag && <Chip chipData={hashTags} />}
        </div>
        {theme === "reservationMenu" && (
          <div
            className="flex justify-start items-center text-[11px] 
          gap-2 web:gap-6"
          >
            <span className="text-red-1 text-xxs web:text-sm ">4박 5일</span>
            <span className="text-red-1 text-xs font-medium web:text-sm ">
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
              styleClass="w-full rounded-xl text-xs font-semibold
              p-1 bg-pink text-white"
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
