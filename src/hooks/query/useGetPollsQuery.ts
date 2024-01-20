import getPolls from "@/api/home/getPolls";
import { useQuery } from "@tanstack/react-query";

const useGetPollsQuery = () => {
  return useQuery({
    queryKey: ["polls"],
    queryFn: getPolls,
  });
};

export default useGetPollsQuery;
