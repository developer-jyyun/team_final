import postSignup from "@/api/signin/postSignup";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const usePostSignupMutation = (body: {
  email: string;
  username: string;
  password: string;
  isTermsAgreed: boolean;
}) => {
  const queryClient = useQueryClient();

  const postMutation = useMutation({
    mutationKey: ["signup"],
    mutationFn: async () => {
      return postSignup(body);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["signup"],
      });
    },
    onError: (err) => {
      console.error(`회원가입에 실패했습니다: ${err.message}`);
    },
  });

  return postMutation;
};

export default usePostSignupMutation;
