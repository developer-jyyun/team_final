"use client";

import Button from "@/app/_component/common/atom/Button";

interface Props {
  selectState: string;
  selectedYear: number;
  selectedMonth: number;
  setSelectedYear: React.Dispatch<React.SetStateAction<number>>;
  setSelectedMonth: React.Dispatch<React.SetStateAction<number>>;
  setSelectState: React.Dispatch<React.SetStateAction<string>>;
}

const JANUARY = 1;
const DECEMBER = 12;

const CalenderHeader = ({
  selectState,
  selectedYear,
  selectedMonth,
  setSelectedYear,
  setSelectedMonth,
  setSelectState,
}: Props) => {
  const handleClickPrevYear = () => {
    if (selectState === "month") {
      setSelectedYear((prev) => prev - 1);
    } else {
      setSelectedMonth((prev) => prev - 1);
    }
  };
  const handleClickNextYear = () => {
    if (selectState === "month") {
      setSelectedYear((prev) => prev + 1);
    } else {
      setSelectedMonth((prev) => prev + 1);
    }
  };

  const handleHeaderClick = () => {
    if (selectState === "date") setSelectState("month");
  };

  return (
    <div className="flex items-center justify-between h-10 mt-9 web:mt-5">
      <button
        type="button"
        onClick={handleClickPrevYear}
        disabled={selectState === "date" && selectedMonth === JANUARY}
      >
        {selectState === "date" && selectedMonth === JANUARY ? (
          <img
            src="/icons/pageLeftIconLight.svg"
            alt="이전"
            className="w-5 h-5 web:w-7 web:h-7"
          />
        ) : (
          <img
            src="/icons/pageLeftIcon.svg"
            alt="이전"
            className="w-5 h-5 web:w-7 web:h-7"
          />
        )}
      </button>
      <Button
        text={
          selectState === "month"
            ? selectedYear.toString()
            : `${selectedYear}.${selectedMonth}`
        }
        styleClass="text-base text-black-2 font-medium web:text-xl"
        onClickFn={handleHeaderClick}
      />

      <button
        type="button"
        onClick={handleClickNextYear}
        disabled={selectState === "date" && selectedMonth === DECEMBER}
      >
        {selectState === "date" && selectedMonth === DECEMBER ? (
          <img
            src="/icons/pageRightIconLight.svg"
            alt="이전"
            className="w-5 h-5 web:w-7 web:h-7"
          />
        ) : (
          <img
            src="/icons/pageRightIcon.svg"
            alt="이전"
            className="w-5 h-5 web:w-7 web:h-7"
          />
        )}
      </button>
    </div>
  );
};

export default CalenderHeader;
