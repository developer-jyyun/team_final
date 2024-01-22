import postCertification from "@/api/signin/postCertification";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const usePostCertificationMutation = (body: { email: string }) => {
  const queryClient = useQueryClient();

  const postMutation = useMutation({
    mutationKey: ["certification"],
    mutationFn: async () => {
      return postCertification(body);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["certification"],
      });
    },
    onError: (err) => {
      console.error(`인증 요청에 실패했습니다: ${err.message}`);
    },
  });

  return postMutation;
};

export default usePostCertificationMutation;
