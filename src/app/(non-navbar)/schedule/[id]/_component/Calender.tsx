"use client";

import { getMonthInDate } from "@/utils/getMonthInDate";
import { useState } from "react";
import CalenderDays from "./CalenderDays";
import CalenderHeader from "./CalenderHeader";
import CalenderMonth from "./CalenderMonth";
import CalenderWeeks from "./CalenderWeeks";

const Calender = () => {
  const today = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    date: new Date().getDate(),
    day: new Date().getDay(),
  };

  const [selectState, setSelectState] = useState("date");

  const [selectedYear, setSelectedYear] = useState(today.year);
  const [selectedMonth, setSelectedMonth] = useState(today.month);

  const monthInDate = getMonthInDate(selectedYear, selectedMonth);

  return (
    <div className="z-10">
      <CalenderHeader
        selectState={selectState}
        selectedYear={selectedYear}
        selectedMonth={selectedMonth}
        setSelectedYear={setSelectedYear}
        setSelectedMonth={setSelectedMonth}
        setSelectState={setSelectState}
      />
      {selectState === "month" ? (
        <CalenderMonth
          todayMonth={today.month}
          todayYear={today.year}
          selectedYear={selectedYear}
          setSelectedMonth={setSelectedMonth}
          setSelectState={setSelectState}
        />
      ) : (
        <>
          <CalenderWeeks />
          <CalenderDays
            today={today}
            selectedYear={selectedYear}
            selectedMonth={selectedMonth}
            monthInDate={monthInDate}
          />
        </>
      )}
    </div>
  );
};

export default Calender;
