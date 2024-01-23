import getPackageDetail from "@/api/items/getPackageDetail";
import { useQuery } from "@tanstack/react-query";

interface Props {
  id: string | string[];
  date: string | null;
  start: boolean;
}

const usePackageDetailQuery = ({ id, date, start }: Props) => {
  return useQuery({
    queryKey: ["package-detail", "detail"],
    queryFn: async () => {
      return getPackageDetail(Number(id), date);
    },
    enabled: start,
  });
};

export default usePackageDetailQuery;
