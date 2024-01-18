import getPackages from "@/api/home/getPackages";
import { useQuery } from "@tanstack/react-query";

const useHomePackageQuery = () => {
  return useQuery({
    queryKey: ["homePackage"],
    queryFn: getPackages,
  });
};

export default useHomePackageQuery;
