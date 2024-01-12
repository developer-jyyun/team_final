const PREV_MONTH_LAST_DAY = 0;
const CURRNET_MONTH_FIRST_DAY = 1;

export const getMonthInDate = (selectedYear: number, selectedMonth: number) => {
  return new Date(selectedYear, selectedMonth, PREV_MONTH_LAST_DAY).getDate();
};

export const getFirstDayInMonth = (
  selectedYear: number,
  selectedMonth: number,
) => {
  return new Date(
    selectedYear,
    selectedMonth,
    CURRNET_MONTH_FIRST_DAY,
  ).getDay();
};
