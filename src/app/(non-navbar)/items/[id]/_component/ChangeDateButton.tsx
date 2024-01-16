import CenterContainer from "@/app/_component/common/atom/CenterContainer";
import { Reservation } from "@/app/types";
import DetailTypography from "./DetailTypography";

interface Props {
  reservation: Reservation;
}

const ChangeDateButton = ({ reservation }: Props) => {
  return (
    <div className="mt-4">
      <button
        type="button"
        className="w-full py-3 mb-2 rounded-[58px] border-[0.6px] border-solid border-pink"
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
          {reservation.current}명
        </DetailTypography>
        &nbsp;
        <DetailTypography color={8} bold={500}>
          / 잔여석 {reservation.remain}명, 최소 출발 {reservation.min}명
        </DetailTypography>
      </CenterContainer>
    </div>
  );
};

export default ChangeDateButton;
