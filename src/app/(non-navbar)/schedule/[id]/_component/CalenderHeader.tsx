"use client";

interface Props {
  selectedYear: number;
  setSelectedYear: React.Dispatch<React.SetStateAction<number>>;
}

const CalenderHeader = ({ selectedYear, setSelectedYear }: Props) => {
  const handleClickPrevYear = () => {
    setSelectedYear((prev) => prev - 1);
  };
  const handleClickNextYear = () => {
    setSelectedYear((prev) => prev + 1);
  };

  return (
    <div className="flex items-center justify-between h-10 mt-9 web:mt-5">
      <button type="button" onClick={handleClickPrevYear}>
        <img
          src="/icons/pageLeftIcon.svg"
          alt="이전"
          className="w-5 h-5 web:w-7 web:h-7"
        />
      </button>
      <h1 className="text-base text-black-2 font-medium web:text-xl">
        {selectedYear}
      </h1>
      <button type="button" onClick={handleClickNextYear}>
        <img
          src="/icons/pageRightIcon.svg"
          alt="다음"
          className="w-5 h-5 web:w-7 web:h-7"
        />
      </button>
    </div>
  );
};

export default CalenderHeader;
