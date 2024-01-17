import type { DateTime } from "@/app/types";
import { packageSchedules } from "@/mocks/data/packageScheduleData";
import ColorContainer from "@/app/_component/common/atom/ColorContainer";
import DetailTypography from "./DetailTypography";

interface Props {
  departureDatetime: DateTime;
}

const ScheduleDetail = ({ departureDatetime }: Props) => {
  console.log(packageSchedules, departureDatetime.date);
  return (
    <div>
      <DetailTypography variant="h1" size={18} bold={600} styleClass="mt-6">
        일정표
      </DetailTypography>
      <ColorContainer bg="gray" size="sm">
        <DetailTypography color={6} size={10}>
          가이드가 일정을 진행하는 경우 여행일정은 현지 사정에 따라 불가피하게
          변경될 수 있으며, 변경 시 고객의 동의를 얻고 진행됩니다.
        </DetailTypography>
      </ColorContainer>
    </div>
  );
};

export default ScheduleDetail;
