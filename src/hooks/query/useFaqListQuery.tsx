import getFaqList from "@/api/my/getFaqList";
import { useQuery } from "@tanstack/react-query";

const useFaqListQuery = () => {
  return useQuery({
    queryKey: ["faqList"],
    queryFn: getFaqList,
  });
};

export default useFaqListQuery;
