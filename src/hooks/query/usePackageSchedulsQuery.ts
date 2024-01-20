import getPackageSchedules from "@/api/schedule/getPackageSchedules";
import { useQuery } from "@tanstack/react-query";

const usePackageSchedulsQuery = (id: string | string[]) => {
  return useQuery({
    queryKey: ["package-detail", "schedule"],
    queryFn: async () => {
      return getPackageSchedules(Number(id));
    },
    enabled: false,
  });
};

export default usePackageSchedulsQuery;
