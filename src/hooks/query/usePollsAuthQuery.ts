import getPollsResult from "@/api/balance/getPollsResult";
import { useQuery } from "@tanstack/react-query";

const usePollsAuthQuery = () => {
  return useQuery({
    queryKey: ["polls", "auth"],
    queryFn: async () => {
      return getPollsResult();
    },
  });
};

export default usePollsAuthQuery;
