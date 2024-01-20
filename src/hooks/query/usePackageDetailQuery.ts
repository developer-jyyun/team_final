import getPackageDetail from "@/api/items/getPackageDetail";
import { useQuery } from "@tanstack/react-query";

const usePackageDetailQuery = (id: string | string[], date: string | null) => {
  return useQuery({
    queryKey: ["package-detail", "detail"],
    queryFn: async () => {
      return getPackageDetail(Number(id), date);
    },
    enabled: false,
  });
};

export default usePackageDetailQuery;
