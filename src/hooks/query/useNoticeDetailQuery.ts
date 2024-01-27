import getNoticeDetail from "@/api/my/getNoticeDetail";
import { ArticleDetail } from "@/app/types";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

const useNoticeDetailQuery = (
  noticeId: string | string[],
): UseQueryResult<ArticleDetail, Error> => {
  const validNoticeId = Array.isArray(noticeId) ? noticeId[0] : noticeId;
  const parsedId = Number(validNoticeId);
  const isEnabled = !Number.isNaN(parsedId) && parsedId > 0;

  return useQuery({
    queryKey: ["NoticeDetail", validNoticeId],
    queryFn: async () => getNoticeDetail(parsedId),

    enabled: isEnabled,
  });
};

export default useNoticeDetailQuery;
