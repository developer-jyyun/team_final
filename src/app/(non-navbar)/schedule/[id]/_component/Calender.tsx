"use client";

// import CalenderDays from "./CalenderDays";
// import CalenderWeeks from "./CalenderWeeks";
import { useEffect, useState } from "react";
import CalenderHeader from "./CalenderHeader";
import CalenderMonth from "./CalenderMonth";

const Calender = () => {
  const today = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    date: new Date().getDate(),
    day: new Date().getDay(),
  };

  const [selectedYear, setSelectedYear] = useState(today.year);
  const [selectedMonth, setSelectedMonth] = useState(today.month);

  // 콘솔 확인용 제거 예정
  // useEffect(() => {
  //   console.log(selectedYear);
  // }, [selectedYear]);

  const monthlyDate = new Date(selectedYear, selectedMonth, 0).getDate();

  // 콘솔 확인용 제거 예정
  useEffect(() => {
    console.log(monthlyDate);
  }, [monthlyDate]);

  return (
    <div>
      <CalenderHeader
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
      />
      {/* <CalenderWeeks /> */}
      <CalenderMonth
        todayMonth={today.month}
        todayYear={today.year}
        selectedYear={selectedYear}
        setSelectedMonth={setSelectedMonth}
      />
      {/* <CalenderDays /> */}
    </div>
  );
};

export default Calender;
