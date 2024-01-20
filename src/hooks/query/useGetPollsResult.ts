import getPollsResult from "@/api/balance/getPollsResult";
import { useQuery } from "@tanstack/react-query";

const useGetPollsResult = () => {
  return useQuery({
    queryKey: ["polls-result"],
    queryFn: getPollsResult,
  });
};

export default useGetPollsResult;
