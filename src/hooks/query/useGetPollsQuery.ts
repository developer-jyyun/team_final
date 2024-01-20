import getPolls from "@/api/balance/getPolls";
import { useQuery } from "@tanstack/react-query";

const useGetPollsQuery = () => {
  return useQuery({
    queryKey: ["polls"],
    queryFn: getPolls,
  });
};

export default useGetPollsQuery;
