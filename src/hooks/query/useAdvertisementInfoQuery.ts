import { useQuery } from "@tanstack/react-query";
import getAdvertisementInfo from "@/api/advertisement/getAdvertisementInfo";

const useAdvertisementInfoQuery = (id: string | string[]) => {
  return useQuery({
    queryKey: ["advertisement-info", id],
    queryFn: async () => {
      return getAdvertisementInfo(Number(id));
    },
  });
};

export default useAdvertisementInfoQuery;
