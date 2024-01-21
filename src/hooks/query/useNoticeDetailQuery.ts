import getNoticeDetail from "@/api/my/getNoticeDetail";
import { useQuery } from "@tanstack/react-query";

const useNoticeDetailQuery = (noticeId: string | string[]) => {
  return useQuery({
    queryKey: ["NoticeDetail", noticeId],
    queryFn: () => getNoticeDetail(Number(noticeId)),
  });
};

export default useNoticeDetailQuery;
