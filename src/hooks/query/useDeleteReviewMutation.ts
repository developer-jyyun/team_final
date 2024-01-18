import { useMutation, useQueryClient } from "@tanstack/react-query";
import deleteMyReview from "@/api/my/deleteMyReview";

const useDeleteReviewMutation = () => {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationKey: ["deleteReview"],
    mutationFn: deleteMyReview,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["myReviews"],
      });
    },
    onError: (err) => {
      console.error(`리뷰 삭제에 실패했습니다: ${err.message}`);
    },
  });

  return deleteMutation;
};

export default useDeleteReviewMutation;
