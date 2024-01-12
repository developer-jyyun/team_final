import Button from "@/app/_component/common/atom/Button";

interface Props {
  todayYear: number;
  todayMonth: number;
  selectedYear: number;
  setSelectedMonth: React.Dispatch<React.SetStateAction<number>>;
  setSelectState: React.Dispatch<React.SetStateAction<string>>;
}

const NUMBER_IN_ONE_LINE = 3;
const MONTH_LIST = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const CENTER_ITEM = 1;
const LAST_ITEM = 1;

const CalenderMonth = ({
  todayYear,
  todayMonth,
  selectedYear,
  setSelectedMonth,
  setSelectState,
}: Props) => {
  const handleClickMonth = (select: number) => {
    setSelectedMonth(select);
    setSelectState("date");
  };

  return (
    <div className="flex flex-wrap mt-3 web:mt-5">
      {MONTH_LIST.map((item, index) => {
        return (
          <div
            key={item}
            className={`flex ${
              index % NUMBER_IN_ONE_LINE === CENTER_ITEM
                ? "justify-center"
                : index % NUMBER_IN_ONE_LINE === LAST_ITEM
                  ? "justify-end"
                  : "justify-start"
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
