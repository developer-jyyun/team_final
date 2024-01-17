import getMyInfo from "@/api/my/getMyInfo";
import { useQuery } from "@tanstack/react-query";

const useMyInfoQuery = () => {
  return useQuery({
    queryKey: ["myInfo"],
    queryFn: getMyInfo,
  });
};

export default useMyInfoQuery;
