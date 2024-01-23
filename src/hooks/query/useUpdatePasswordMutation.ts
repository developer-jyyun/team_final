import putMyPassword from "@/api/my/putMyPassword";
import { useMutation } from "@tanstack/react-query";

const useUpdateMyPasswordMutation = () => {
  const UpdateMyPasswordMutation = useMutation({
    mutationKey: ["UpdateMyPassword"],
    mutationFn: putMyPassword,
    onSuccess: () => {
      // TODO: 비밀번호 변경 성공 후
    },
    onError: (err) => {
      console.error(`비밀번호 변경 실패: ${err.message}`);
    },
  });

  return UpdateMyPasswordMutation;
};

export default useUpdateMyPasswordMutation;
