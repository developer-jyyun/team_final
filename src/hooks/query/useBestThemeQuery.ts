import { useQuery } from "@tanstack/react-query";
import getBestPackages from "@/api/home/getBestPackages";

const useBestThemeQuery = (page: number, pageSize: number) => {
  return useQuery({
    queryKey: ["best-theme", page, pageSize],
    queryFn: () => getBestPackages(page, pageSize),
  });
};

export default useBestThemeQuery;
