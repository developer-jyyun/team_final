import getFaqDetail from "@/api/my/getFaqDetail";
import { ArticleDetail } from "@/app/types";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

const useFaqDetailQuery = (
  faqId: string | string[],
): UseQueryResult<ArticleDetail, Error> => {
  const validFaqId = Array.isArray(faqId) ? faqId[0] : faqId;
  const parsedId = Number(validFaqId);
  const isEnabled = !Number.isNaN(parsedId) && parsedId > 0;

  return useQuery({
    queryKey: ["faqDetail", validFaqId],
    queryFn: async () => getFaqDetail(parsedId),
    enabled: isEnabled,
  });
};

export default useFaqDetailQuery;
