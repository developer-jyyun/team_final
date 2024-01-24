import getPollsMain from "@/api/balance/getPollsMain";
import { useQuery } from "@tanstack/react-query";

const useGetPollsMainQuery = () => {
  return useQuery({
    queryKey: ["polls", "main"],
    queryFn: getPollsMain,
  });
};

export default useGetPollsMainQuery;
