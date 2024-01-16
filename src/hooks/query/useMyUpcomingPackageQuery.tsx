import getMyUpcomingPackage from "@/api/my/getMyUpcomingPackage";
import { useQuery } from "@tanstack/react-query";

const useMyUpcomingPackageQuery = () => {
  return useQuery({
    queryKey: ["upcomingPackages"],
    queryFn: getMyUpcomingPackage,
  });
};

export default useMyUpcomingPackageQuery;
