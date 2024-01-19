"use client";

import CenterContainer from "@/app/_component/common/atom/CenterContainer";
import type { PackageResponseData } from "@/app/types";
import { useParams, useRouter } from "next/navigation";
import DetailTypography from "./DetailTypography";

interface Props {
  packageDetail: PackageResponseData;
}

const ChangeDateButton = ({ packageDetail }: Props) => {
  const router = useRouter();
  const params = useParams();

  const handleClickChangeButton = () => {
    router.push(
      `/schedule/${params.id}?d=${packageDetail.departureDatetime.date}`,
    );
  };
  return (
    <div className="mt-4 mb-14">
      <button
        type="button"
        className="w-full py-3 mb-2 rounded-[58px] border-[0.6px] border-solid border-pink"
        onClick={handleClickChangeButton}
      >
        <DetailTypography color="pink" size={14} bold={500} align="center">
          출발일 변경
        </DetailTypography>
      </button>
      <CenterContainer>
        <DetailTypography color={4} size={13} bold={500}>
          예약
        </DetailTypography>
        &nbsp;
        <DetailTypography color="pink" size={13} bold={600}>
          {packageDetail.reservation.current}명
        </DetailTypography>
        &nbsp;
        <DetailTypography color={8} bold={500}>
          / 잔여석 {packageDetail.reservation.remain}명, 최소 출발{" "}
          {packageDetail.reservation.min}명
        </DetailTypography>
      </CenterContainer>
    </div>
  );
};

export default ChangeDateButton;
