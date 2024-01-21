import getFaqDetail from "@/api/my/getFaqDetail";
import { useQuery } from "@tanstack/react-query";

const useFaqDetailQuery = (faqId: string | string[]) => {
  return useQuery({
    queryKey: ["faqDetail", faqId],
    queryFn: () => getFaqDetail(Number(faqId)),
  });
};

export default useFaqDetailQuery;
