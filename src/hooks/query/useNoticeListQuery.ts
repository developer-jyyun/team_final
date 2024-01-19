import getNoticeList from "@/api/my/getNoticeList";
import { useQuery } from "@tanstack/react-query";

const useNoticeListQuery = () => {
  return useQuery({
    queryKey: ["noticeList"],
    queryFn: getNoticeList,
  });
};

export default useNoticeListQuery;
