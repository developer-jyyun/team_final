"use client";

import generateDays from "@/utils/generateDays";
import { getMonthInDate } from "@/utils/getMonthInDate";
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
  const prevMonthInDate = getMonthInDate(selectedYear, selectedMonth - 1);

  const [days, setDays] = useState(
    generateDays(
      selectedYear,
      selectedMonth,
      monthInDate,
      prevMonthInDate,
      today.date,
    ),
  );

  const isCurrent = () => {
    return today.year === selectedYear && today.month === selectedMonth;
  };

  useEffect(() => {
    setDays(
      generateDays(
        selectedYear,
        selectedMonth,
        monthInDate,
        prevMonthInDate,
        today.date,
      ),
    );
  }, [selectedYear, selectedMonth, monthInDate, prevMonthInDate, today.date]);

  const getDateColor = (
    type: string | null,
    isCurrentMonth: boolean,
    dayItem: number | null,
    isToday: boolean,
  ) => {
    if (!isCurrentMonth) {
      if (type === "sat") return "text-[#BBD1ED]";
      if (type === "sun") return "text-[#FCC]";
      return "text-grey-d";
    }

    if (isToday && isCurrent()) return "text-[#71DD4B]";

    if (type === "sat") {
      return (dayItem as number) < today.date && isCurrent()
        ? "text-[#BBD1ED]"
        : "text-[#4B8CDD]";
    }

    if (type === "sun") {
      return (dayItem as number) < today.date && isCurrent()
        ? "text-[#FCC]"
        : "text-[#E44C4B]";
    }

    if (type === null && isCurrent() && today.date > (dayItem as number)) {
      return "text-grey-d";
    }

    return "";
  };

  return (
    <div>
      {days.map((week) => {
        return (
          <div
            key={week.weekId}
            className="flex justify-between text-black-2 text-sm font-medium mt-6 web:text-base web:mt-5"
          >
            {week.weekItem.map((day) => {
              return (
                <button
                  type="button"
                  key={day.dayId}
                  className={`w-[30px] h-[30px] flex justify-center items-center ${getDateColor(
                    day.type,
                    day.isCurrentMonth,
                    day.dayItem,
                    day.isToday,
                  )}`}
                >
                  {day.dayItem}
                </button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default CalenderDays;
