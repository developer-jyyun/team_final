import getPackageScore from "@/api/items/getPackageScore";
import { useQuery } from "@tanstack/react-query";

const usePackageScoreQuery = (id: string | string[]) => {
  return useQuery({
    queryKey: ["package-detail", "score"],
    queryFn: async () => {
      return getPackageScore(Number(id));
    },
  });
};

export default usePackageScoreQuery;
