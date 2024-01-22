import postSignin from "@/api/signin/postSignin";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const usePostSigninMutation = (body: { email: string; password: string }) => {
  const queryClient = useQueryClient();

  const postMutation = useMutation({
    mutationKey: ["signin"],
    mutationFn: async () => {
      return postSignin(body);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["signin"],
      });
    },
    onError: (err) => {
      console.error(`로그인에 실패했습니다: ${err.message}`);
    },
  });

  return postMutation;
};

export default usePostSigninMutation;
