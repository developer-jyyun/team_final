"use client";

import getPackageDetail from "@/api/items/getPackageDetail";
import getAvailableDates from "@/api/schedule/getAvailableDates";
import useScheduleDateStore from "@/store/useScheduleDateStore";
import formatDigitNumber from "@/utils/formatDigitNumber";
import generateDays from "@/utils/generateDays";
import { getMonthInDate } from "@/utils/getMonthInDate";
import { useQuery } from "@tanstack/react-query";
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
  const scheduleDate = useScheduleDateStore();
  const params = useParams();
  const { data: schedule } = useQuery({
    queryKey: ["schedule-date", params.id],
    queryFn: async () => {
      return getAvailableDates(Number(params.id));
    },
  });
  const { data: packageData, refetch } = useQuery({
    queryKey: ["package-detail", params.id],
    queryFn: async () => {
      return getPackageDetail(Number(params.id), scheduleDate.date);
    },
    enabled: false,
  });

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
    scheduleDate.updateData(packageData.data);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scheduleDate.data, packageData.data]);

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
    await refetch();
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
            className="flex justify-between text-black-2 text-sm font-medium h-[53px] web:text-base"
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
                      day.date === packageData.data.departureDatetime.date &&
                      "bg-pink-main"
                    } ${
                      isAvailable(day.date, day.dateData) &&
                      day.date === packageData.data.departureDatetime.date &&
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
                    )} web:text-[11px]`}
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
