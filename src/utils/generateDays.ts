import formatDigitNumber from "./formatDigitNumber";
import { getFirstDayInMonth } from "./getMonthInDate";

interface Day {
  dayId: number;
  dayItem: null | number;
  isCurrentMonth: boolean;
  type: "sat" | "sun" | null;
  date: string;
  isToday: boolean;
}

interface Week {
  weekId: number;
  weekItem: Day[];
}

const VIEW_WEEK_LENGTH = 6;
const VIEW_DAY_LENGTH = 7;
const SUNDAY_NUMBER = 0;
const SATURDAY_NUMBER = 6;
const JANUARY_STRING = "01";
const DECEMBER_STRING = "12";

const addAnotherMonth = (
  days: Week[],
  firstDay: number,
  prevMonthInDate: number,
) => {
  let prevStart = prevMonthInDate - firstDay + 1;
  let changeMonthFlag = false;
  days.forEach((day) => {
    day.weekItem.forEach((item) => {
      const dateArr = item.date.split("-");
      if (item.dayItem === null && !changeMonthFlag) {
        if (dateArr[1] === JANUARY_STRING) {
          dateArr[0] = (Number(dateArr[0]) - 1).toString();
          dateArr[1] = DECEMBER_STRING;
        } else {
          dateArr[1] = formatDigitNumber(Number(dateArr[1]) - 1).toString();
        }

        dateArr[2] = formatDigitNumber(prevStart).toString();

        const newDate = dateArr.join("-");

        item.dayItem = prevStart;
        item.isCurrentMonth = false;
        item.date = newDate;

        prevStart += 1;
      } else if (item.dayItem === null && changeMonthFlag) {
        if (dateArr[1] === DECEMBER_STRING) {
          dateArr[0] = (Number(dateArr[0]) + 1).toString();
          dateArr[1] = JANUARY_STRING;
        } else {
          dateArr[1] = formatDigitNumber(Number(dateArr[1]) + 1).toString();
        }

        dateArr[2] = formatDigitNumber(prevStart).toString();

        const newDate = dateArr.join("-");

        item.dayItem = prevStart;
        item.isCurrentMonth = false;
        item.date = newDate;

        prevStart += 1;
      } else {
        changeMonthFlag = true;
        prevStart = 1;
      }
    });
  });

  return days;
};

const generateDays = (
  year: number,
  month: number,
  daysInMonth: number,
  prevMonthInDate: number,
  today: number,
) => {
  const firstDayInLastMonth = getFirstDayInMonth(year, month - 1);
  let weekId = 1;
  let daysId = 1;

  const days = [];

  let count = 1;

  for (let i = 0; i < VIEW_WEEK_LENGTH; i += 1) {
    const week: Week = {
      weekId: weekId,
      weekItem: [],
    };
    for (let j = 0; j < VIEW_DAY_LENGTH; j += 1) {
      const day: Day = {
        dayId: daysId,
        dayItem: null,
        isCurrentMonth: true,
        type:
          j === SUNDAY_NUMBER ? "sun" : j === SATURDAY_NUMBER ? "sat" : null,
        date: `${year}-${formatDigitNumber(month)}-${formatDigitNumber(count)}`,
        isToday: count === today,
      };
      if ((i === 0 && j < firstDayInLastMonth) || count > daysInMonth) {
        day.dayItem = null;
        week.weekItem.push(day);
      } else {
        day.dayItem = count;
        week.weekItem.push(day);
        count += 1;
      }
      daysId += 1;
    }
    days.push(week);
    weekId += 1;
  }

  return addAnotherMonth(days, firstDayInLastMonth, prevMonthInDate);
};

export default generateDays;
