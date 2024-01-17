import getAvailableDates from "@/api/schedule/getAvailableDates";
import { useQuery } from "@tanstack/react-query";

const useScheduleListQuery = (id: string | string[]) => {
  return useQuery({
    queryKey: ["schedule-date", id],
    queryFn: async () => {
      return getAvailableDates(Number(id));
    },
  });
};

export default useScheduleListQuery;
