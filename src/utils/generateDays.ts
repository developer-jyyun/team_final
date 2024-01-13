import { DateInfo } from "@/app/types";
import formatDigitNumber from "./formatDigitNumber";
import { getFirstDayInMonth } from "./getMonthInDate";

interface Day {
  dayId: number;
  dayItem: null | number;
  isCurrentMonth: boolean;
  type: "sat" | "sun" | null;
  date: string;
  isToday: boolean;
  dateData: string | null;
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

const formatPriceNumber = (price: number | undefined) => {
  if (price !== undefined && !Number.isNaN(price)) {
    return `${price.toString().slice(0, -4)}만`;
  }
  return null;
};

const findDatePrice = (date: string, scheduleData: DateInfo[]) => {
  return formatPriceNumber(
    scheduleData.find((schedule) => schedule.date === date)?.adultPrice,
  );
};

const setDate = (dateArr: string[], prevStart: number, flag: boolean) => {
  const copy = dateArr;
  if (flag) {
    copy[1] =
      copy[1] === DECEMBER_STRING
        ? ((copy[0] = (Number(copy[0]) + 1).toString()), JANUARY_STRING)
        : formatDigitNumber(Number(copy[1]) + 1).toString();
  } else {
    copy[1] =
      copy[1] === JANUARY_STRING
        ? ((copy[0] = (Number(copy[0]) - 1).toString()), DECEMBER_STRING)
        : formatDigitNumber(Number(copy[1]) - 1).toString();
  }

  copy[2] = formatDigitNumber(prevStart).toString();

  return copy.join("-");
};

const addAnotherMonth = (
  days: Week[],
  firstDay: number,
  prevMonthInDate: number,
  scheduleData: DateInfo[],
) => {
  let prevStart = prevMonthInDate - firstDay + 1;
  let changeMonthFlag = false;

  days.forEach((day) => {
    day.weekItem.forEach((item) => {
      const dateArr = item.date.split("-");

      if (item.dayItem === null && !changeMonthFlag) {
        item.dayItem = prevStart;
        item.isCurrentMonth = false;
        item.date = setDate(dateArr, prevStart, changeMonthFlag);

        prevStart += 1;
      } else if (item.dayItem === null && changeMonthFlag) {
        item.dayItem = prevStart;
        item.isCurrentMonth = false;
        item.date = setDate(dateArr, prevStart, changeMonthFlag);

        prevStart += 1;
      } else {
        changeMonthFlag = true;
        prevStart = 1;
      }

      item.dateData = findDatePrice(item.date, scheduleData);
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
  scheduleData: DateInfo[],
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
        dateData: null,
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

  return addAnotherMonth(
    days,
    firstDayInLastMonth,
    prevMonthInDate,
    scheduleData,
  );
};

export default generateDays;
