"use client";

import type { Reservation } from "@/app/types";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import DetailTypography from "./DetailTypography";

interface Props {
  viewMore: boolean;
  reservation: Reservation;
  packageId: number;
  setReservation: React.Dispatch<React.SetStateAction<boolean>>;
}

const DetailBottomButton = ({
  viewMore,
  reservation,
  packageId,
  setReservation,
}: Props) => {
  const router = useRouter();
  const params = useParams();

  const getBorderStyle = () => {
    if (!viewMore) return "";

    return "border-t-[0.6px] border-solid border-grey-d";
  };

  const handleReservation = () => {
    setReservation(true);
  };
  const handleCompare = () => {
    router.push(`/compare?lid=${params.id}`);
  };

  return (
    <nav
      className={`flex justify-between items-center p-6 h-20 bg-white ${getBorderStyle()} web:w-[500px]`}
    >
      {reservation.remain === 0 ? (
        <>
          <DetailTypography color={"pink"} size={12} styleClass="ml-3">
            해당 날짜의 인원이 다 찼습니다..
          </DetailTypography>
          <Link
            href={`/schedule/${packageId}`}
            type="button"
            className="flex items-center justify-center w-[151px] h-[40px] bg-pink rounded-lg text-white text-sm font-bold web:w-[210px] web:text-base"
          >
            다른 날짜 찾아보기
          </Link>
        </>
      ) : (
        <>
          <button
            type="button"
            className="w-[151px] h-[40px] bg-pink rounded-lg text-white text-lg font-bold web:w-[210px]"
            onClick={handleCompare}
          >
            1:1 비교하기
          </button>
          <button
            type="button"
            className="w-[151px] h-[40px] bg-pink rounded-lg text-white text-lg font-bold web:w-[210px]"
            onClick={handleReservation}
          >
            예약하기
          </button>
        </>
      )}
    </nav>
  );
};

export default DetailBottomButton;
