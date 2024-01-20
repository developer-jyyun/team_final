import getPackages from "@/api/home/getPackages";
import { useQuery } from "@tanstack/react-query";

const usePackageListQuery = (pageSize: number = 10) => {
  return useQuery({
    queryKey: ["homePackage"],
    queryFn: () => {
      return getPackages(pageSize);
    },
  });
};

export default usePackageListQuery;
