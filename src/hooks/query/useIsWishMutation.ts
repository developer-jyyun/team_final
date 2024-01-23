import { useMutation, useQueryClient } from "@tanstack/react-query";
import postIsWish from "@/api/home/postIsWish";

const useIsWishMutation = (body: { packageId: number }) => {
  const queryClient = useQueryClient();

  const postMutation = useMutation({
    mutationKey: ["wish", "post"],
    mutationFn: async () => {
      return postIsWish(body);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["wish", "post"],
      });
    },
    onError: (err) => {
      console.error(`좋아요 요청이 실패했습니다: ${err.message}`);
    },
  });

  return postMutation;
};

export default useIsWishMutation;
