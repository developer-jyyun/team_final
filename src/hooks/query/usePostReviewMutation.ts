import postMyReview from "@/api/my/postMyReview";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const usePostReviewMutation = (
  body: {
    content: string;
    productScore: number;
    scheduleScore: number;
    guideScore: number;
    appointmentScore: number;
  },
  id: number,
) => {
  const queryClient = useQueryClient();

  const postMutation = useMutation({
    mutationKey: ["review", "post"],
    mutationFn: async () => {
      return postMyReview(body, id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["review", "post"],
      });
    },
    onError: (err) => {
      console.error(`리뷰 등록에 실패했습니다: ${err.message}`);
    },
  });

  return postMutation;
};

export default usePostReviewMutation;
