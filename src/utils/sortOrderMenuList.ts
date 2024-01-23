import { MyOrder } from "@/app/types";

function getStartDate(travelPeriod: string): Date {
  const [start] = travelPeriod.split("~");
  const [year, month, day] = start.split(".").map(Number);
  return new Date(year, month - 1, day);
}

const sortOrderMenuList = (data: MyOrder[]): MyOrder[] => {
  const today = new Date();
  return data.sort((a, b) => {
    const startDateA = getStartDate(a.package.travelPeriod);
    const startDateB = getStartDate(b.package.travelPeriod);

    if (startDateA >= today && startDateB >= today) {
      return startDateA.getTime() - startDateB.getTime();
    } else if (startDateA < today && startDateB < today) {
      return startDateA.getTime() - startDateB.getTime();
    } else {
      return startDateA < today ? 1 : -1;
    }
  });
};

export default sortOrderMenuList;
