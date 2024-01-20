import { useMutation, useQueryClient } from "@tanstack/react-query";
import postPolls from "@/api/balance/postPolls";

const useSelectPollsMutation = (body: { choose: string }) => {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationKey: ["postPolls"],
    mutationFn: async () => {
      return postPolls(body);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["postPolls"],
      });
    },
    onError: (err) => {
      console.error(`투표에 실패했습니다: ${err.message}`);
    },
  });

  return deleteMutation;
};

export default useSelectPollsMutation;
