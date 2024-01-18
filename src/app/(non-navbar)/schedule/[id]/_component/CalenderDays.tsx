"use client";

import usePackageDetailQuery from "@/hooks/query/usePackageDetailQuery";
import useScheduleListQuery from "@/hooks/query/useScheduleListQuery";
import useScheduleDateStore from "@/store/useScheduleDateStore";
import formatDigitNumber from "@/utils/formatDigitNumber";
import generateDays from "@/utils/generateDays";
import { getMonthInDate } from "@/utils/getMonthInDate";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

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

  const prevMonthInDate = getMonthInDate(selectedYear, selectedMonth - 1);

  const [days, setDays] = useState(
    generateDays(
      selectedYear,
      selectedMonth,
      monthInDate,
      prevMonthInDate,
      today.date,
      schedule.data,
    ),
  );

  const isCurrent = () => {
    return today.year === selectedYear && today.month === selectedMonth;
  };

  const isPrev = (date: string) => {
    const dateNumber = Number(date.split("-").join(""));
    return (
      dateNumber <
      Number(
        `${formatDigitNumber(today.year)}${formatDigitNumber(
          today.month,
        )}${formatDigitNumber(today.date)}`,
      )
    );
  };

  const isAvailable = (date: string, dateData: string | null) => {
    return !(isPrev(date) || dateData === null);
  };

  useEffect(() => {
    setDays(
      generateDays(
        selectedYear,
        selectedMonth,
        monthInDate,
        prevMonthInDate,
        today.date,
        schedule.data,
      ),
    );
  }, [
    selectedYear,
    selectedMonth,
    monthInDate,
    prevMonthInDate,
    today.date,
    schedule.data,
  ]);

  useEffect(() => {
    scheduleDate.updateData(packageDetail.data);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scheduleDate.data, packageDetail.data]);

  const getDateColor = (
    type: string | null,
    date: string,
    isToday: boolean,
    dateData: string | null,
  ) => {
    if (isToday && isCurrent()) return "text-[#71DD4B]";

    if (isPrev(date) || !dateData) {
      if (type === "sat") return "text-[#BBD1ED]";
      if (type === "sun") return "text-[#FCC]";
      return "text-grey-d";
    } else {
      if (type === "sat") return "text-[#4B8CDD]";
      if (type === "sun") return "text-[#E44C4B]";
    }

    return "";
  };

  const handleClickDate = async (date: string) => {
    const changeDate = async () => {
      scheduleDate.updateDate(date);
    };

    await changeDate();
    await detailRefetch();
  };

  const stringPriceToNumber = (price: string) => {
    return Number(price.replace(/만/g, ""));
  };

  const getPriceColor = (isToday: boolean, price: string | null) => {
    if (isToday && isCurrent()) {
      return "text-[#71DD4B]";
    }

    if (price === null) return "";

    if (stringPriceToNumber(price) < 100) {
      return "text-grey-a";
    } else {
      return "text-red";
    }
  };

  return (
    <div>
      {days.map((week) => {
        return (
          <div
            key={week.weekId}
            className="flex justify-between text-black-2 text-sm font-medium h-[47px] web:text-base"
          >
            {week.weekItem.map((day) => {
              return (
                <div key={day.dayId}>
                  <button
                    type="button"
                    className={`w-[30px] h-[30px] flex justify-center items-center ${getDateColor(
                      day.type,
                      day.date,
                      day.isToday,
                      day.dateData,
                    )} rounded-[50%] ${
                      isAvailable(day.date, day.dateData) &&
                      day.date === packageDetail.data.departureDatetime.date &&
                      "bg-pink-main"
                    } ${
                      isAvailable(day.date, day.dateData) &&
                      day.date === packageDetail.data.departureDatetime.date &&
                      "text-white"
                    }`}
                    disabled={!isAvailable(day.date, day.dateData)}
                    onClick={() => {
                      handleClickDate(day.date);
                    }}
                  >
                    {day.dayItem}
                  </button>
                  <div
                    className={`text-center text-[9px] ${getPriceColor(
                      day.isToday,
                      day.dateData,
                    )} -mt-1 web:text-[11px]`}
                  >
                    {day.isToday && isCurrent() ? "오늘" : day.dateData}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default CalenderDays;
