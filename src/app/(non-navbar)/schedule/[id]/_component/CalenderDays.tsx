"use client";

import usePackageDetailQuery from "@/hooks/query/usePackageDetailQuery";
import useScheduleListQuery from "@/hooks/query/useScheduleListQuery";
import useScheduleDateStore from "@/store/useScheduleDateStore";
import { useParams } from "next/navigation";
import Days from "./Days";
import NotFoundForSchedule from "./NotFoundForSchedule";

interface Props {
  today: Today;
  selectedYear: number;
  selectedMonth: number;
  monthInDate: number;
}

interface Today {
  year: number;
  month: number;
  date: number;
  day: number;
}

const CalenderDays = ({
  today,
  selectedYear,
  selectedMonth,
  monthInDate,
}: Props) => {
  const params = useParams();

  const scheduleDate = useScheduleDateStore();

  const { data: schedule } = useScheduleListQuery(params.id);
  const { data: packageDetail, refetch: detailRefetch } = usePackageDetailQuery(
    params.id,
    scheduleDate.date,
  );

  if (schedule.code === 404 || packageDetail.code === 404) {
    return <NotFoundForSchedule />;
  }

  return (
    <Days
      today={today}
      selectedYear={selectedYear}
      selectedMonth={selectedMonth}
      monthInDate={monthInDate}
      schedule={schedule.data}
      packageDetail={packageDetail.data}
      detailRefetch={detailRefetch}
    />
  );
};

export default CalenderDays;
