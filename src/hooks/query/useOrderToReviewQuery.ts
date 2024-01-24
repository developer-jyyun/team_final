import { useQuery } from "@tanstack/react-query";
import getOrderToReview from "@/api/my/getOrderToReview";

const useOrderToReviewQuery = () => {
  return useQuery({
    queryKey: ["orderToReview"],
    queryFn: () => getOrderToReview(),
  });
};

export default useOrderToReviewQuery;
