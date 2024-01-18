import ColorContainer from "@/app/_component/common/atom/ColorContainer";
import type { DateTime, ScheduleInfo } from "@/app/types";
import { packageSchedules } from "@/mocks/data/packageScheduleData";
import ReplaceHyphenWithDot from "@/utils/ReplaceHyphenWithDot";
import DetailTypography from "./DetailTypography";

interface Props {
  departureDatetime: DateTime;
  endDatetime: DateTime;
}

const ScheduleDetail = ({ departureDatetime, endDatetime }: Props) => {
  const getDatesBetween = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const dates = [];

    for (
      let currentDate = start;
      currentDate <= end;
      currentDate.setDate(currentDate.getDate() + 1)
    ) {
      dates.push(new Date(currentDate));
    }

    return dates.map((date) =>
      ReplaceHyphenWithDot(date.toISOString().split("T")[0]),
    );
  };

  const getMealText = (index: number, scheduleInfo: ScheduleInfo) => {
    if (index === 0 || packageSchedules.length === index + 1) {
      if (
        index === 0 &&
        scheduleInfo.breakfast === "" &&
        scheduleInfo.lunch === "" &&
        scheduleInfo.dinner === ""
      ) {
        return `석식 - 불포함`;
      } else if (
        packageSchedules.length === index + 1 &&
        scheduleInfo.breakfast === "" &&
        scheduleInfo.lunch === "" &&
        scheduleInfo.dinner === ""
      ) {
        return `조식 - 불포함`;
      }
      const breakfast =
        scheduleInfo.breakfast === "" ? "" : `조식 - ${scheduleInfo.breakfast}`;
      const lunch =
        scheduleInfo.lunch === ""
          ? ""
          : scheduleInfo.breakfast === ""
            ? `중식 - ${scheduleInfo.lunch}`
            : ` / 중식 - ${scheduleInfo.lunch}`;
      const dinner =
        scheduleInfo.dinner === ""
          ? ""
          : scheduleInfo.lunch === ""
            ? `석식 - ${scheduleInfo.dinner}`
            : ` / 석식 - ${scheduleInfo.dinner}`;

      return `${breakfast}${lunch}${dinner}`;
    }

    const breakfast =
      scheduleInfo.breakfast === ""
        ? "조식 - 불포함"
        : `조식 - ${scheduleInfo.breakfast}`;
    const lunch =
      scheduleInfo.lunch === ""
        ? " / 중식 - 불포함"
        : ` / 중식 - ${scheduleInfo.lunch}`;
    const dinner =
      scheduleInfo.dinner === ""
        ? " / 석식 - 불포함"
        : ` / 석식 - ${scheduleInfo.dinner}`;

    return `${breakfast}${lunch}${dinner}`;
  };

  return (
    <div className="mt-6">
      <DetailTypography variant="h1" size={18} bold={600}>
        일정표
      </DetailTypography>
      <ColorContainer bg="gray" size="sm">
        <DetailTypography color={6} size={10}>
          가이드가 일정을 진행하는 경우 여행일정은 현지 사정에 따라 불가피하게
          변경될 수 있으며, 변경 시 고객의 동의를 얻고 진행됩니다.
        </DetailTypography>
      </ColorContainer>
      {packageSchedules.map((schedule, index) => {
        return (
          <div key={schedule.day} className="mt-8">
            <div className="flex items-end mb-[14px]">
              <div className="mr-4">
                <DetailTypography size={14} bold={600} align="center">
                  {schedule.day}일차
                </DetailTypography>
              </div>
              <div className="pb-[2px]">
                <DetailTypography size={10} bold={600}>
                  {
                    getDatesBetween(departureDatetime.date, endDatetime.date)[
                      index
                    ]
                  }
                </DetailTypography>
              </div>
            </div>
            <div className="relative">
              <ul
                className="before:contant-[''] before:h-[calc(100%-21px)] web:before:h-[calc(100%-15px)] before:w-[0.6px] before:bg-[#FFBFD1] before:absolute 
                          before:left-[15.4px] web:before:left-[19.5px] before:top-1/2 before:-translate-y-1/2"
              >
                {schedule.schedule.map((detail) => {
                  return (
                    <div className="relative" key={detail}>
                      <li
                        className="flex mb-3 before:contant-[''] z-10 before:h-[6px] before:w-[6px]
                                web:before:h-2 web:before:w-2 before:bg-pink before:rounded-[50%] 
                                before:absolute before:left-[13px] web:before:left-[16px] before:top-[6px]"
                      >
                        <div className="pl-14">
                          <DetailTypography color={3} size={10} bold={500}>
                            {detail}
                          </DetailTypography>
                        </div>
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
            <ColorContainer bg="pink" size="sm">
              <div className="flex">
                <img
                  src="/icons/cupIcon.svg"
                  alt="식사"
                  className="mr-[18px] -ml-1 web:ml-0 web:w-[18px]"
                />
                <DetailTypography color={4} size={10}>
                  {getMealText(index, schedule)}
                </DetailTypography>
              </div>
            </ColorContainer>
          </div>
        );
      })}
    </div>
  );
};

export default ScheduleDetail;
