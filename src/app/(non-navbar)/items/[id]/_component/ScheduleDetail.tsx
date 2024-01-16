import type { DateTime } from "@/app/types";
import { packageSchedules } from "@/mocks/data/packageScheduleData";

interface Props {
  departureDatetime: DateTime;
}

const ScheduleDetail = ({ departureDatetime }: Props) => {
  console.log(packageSchedules, departureDatetime.date);
  return (
    <div>
      <h1>일정표</h1>
    </div>
  );
};

export default ScheduleDetail;
