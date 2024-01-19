import getMyReviews from "@/api/my/getMyReviews";
import { useQuery } from "@tanstack/react-query";

const useMyReviewsQuery = (page: number, pageSize: number) => {
  return useQuery({
    queryKey: ["myReviews", page, pageSize],
    queryFn: () => getMyReviews(page, pageSize),
  });
};
export default useMyReviewsQuery;
