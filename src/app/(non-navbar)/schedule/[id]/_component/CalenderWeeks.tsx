const DAY_LIST = [
  { id: 1, name: "일" },
  { id: 2, name: "월" },
  { id: 3, name: "화" },
  { id: 4, name: "수" },
  { id: 5, name: "목" },
  { id: 6, name: "금" },
  { id: 7, name: "토" },
];

const CalenderWeeks = () => {
  return (
    <div className="flex justify-between h-12 mt-9 web:mt-4">
      {DAY_LIST.map((day) => {
        return (
          <div
            key={day.id}
            className="w-[30px] h-[30px] flex justify-center items-center text-sm text-black-4 web:text-lg"
          >
            {day.name}
          </div>
        );
      })}
    </div>
  );
};

export default CalenderWeeks;
