import Button from "@/app/_component/common/atom/Button";

interface Props {
  todayYear: number;
  todayMonth: number;
  selectedYear: number;
  setSelectedMonth: React.Dispatch<React.SetStateAction<number>>;
}

const CalenderMonth = ({
  todayYear,
  todayMonth,
  selectedYear,
  setSelectedMonth,
}: Props) => {
  const Month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const handleClickMonth = (month: number) => {
    setSelectedMonth(month);
  };

  return (
    <div className="flex flex-wrap mt-3 web:mt-5">
      {Month.map((item, index) => {
        return (
          <div
            key={item}
            className={`flex justify-${
              index % 3 === 1 ? "center" : index % 3 === 2 ? "end" : "start"
            } items-center w-1/3 mb-3 web:w-1/4 web:justify-center`}
          >
            <Button
              styleClass="flex justify-center items-center w-[98px] h-[79px] border-[0.6px] border-solid border-grey-a rounded-lg bg-white 
              duration-100 active:bg-pink-main active:border-transparent active:text-white active:font-bold
              disabled:bg-[#ededed] disabled:border-transparent disabled:text-black-9"
              text={`${item}월`}
              onClickFn={() => {
                handleClickMonth(item);
              }}
              disabled={
                todayYear > selectedYear
                  ? true
                  : todayYear === selectedYear
                    ? item < todayMonth
                    : false
              }
            />
          </div>
        );
      })}
    </div>
  );
};

export default CalenderMonth;
