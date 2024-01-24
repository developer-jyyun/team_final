import getPolls from "@/api/balance/getPolls";
import { useQuery } from "@tanstack/react-query";

const usePollsQuery = () => {
  return useQuery({
    queryKey: ["polls"],
    queryFn: async () => {
      return getPolls();
    },
  });
};

export default usePollsQuery;
