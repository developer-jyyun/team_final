import { useMutation, useQueryClient } from "@tanstack/react-query";
import deleteWish from "@/api/home/deleteWish";

const useDeleteWishMutation = (body: { packageId: number }) => {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationKey: ["wish", "delete"],
    mutationFn: async () => {
      return deleteWish(body);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["wish", "delete"],
      });
    },
    onError: (err) => {
      console.error(`좋아요 요청이 실패했습니다: ${err.message}`);
    },
  });

  return deleteMutation;
};

export default useDeleteWishMutation;
