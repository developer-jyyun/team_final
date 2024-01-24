import getPackages from "@/api/home/getPackages";
import { useQuery } from "@tanstack/react-query";

const usePackageListQuery = (
  page: number,
  nation: string,
  continent: string,
) => {
  return useQuery({
    queryKey: ["packages", page, nation],
    queryFn: () => getPackages(page, nation, continent),
  });
};

export default usePackageListQuery;
