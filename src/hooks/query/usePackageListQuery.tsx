import getSalePackages from "@/api/home/getSalePackages";
import { useQuery } from "@tanstack/react-query";

const usePackageListQuery = (
  page: number = 1,
  nation: string = "전체",
  continent: string = "",
) => {
  return useQuery({
    queryKey: ["packages", page, nation],
    queryFn: () => getSalePackages(page, nation, continent),
  });
};

export default usePackageListQuery;
