import patchMyInfo from "@/api/my/patchMyInfo";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useUpdateMyInfoMutation = () => {
  const queryClient = useQueryClient();

  const updateMyInfoMutation = useMutation({
    mutationKey: ["UpdateMyInfo"],
    mutationFn: patchMyInfo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["myInfo"],
      });
    },

    onError: (err) => {
      console.error(`회원정보 수정 실패: ${err.message}`);
    },
  });
  return updateMyInfoMutation;
};

export default useUpdateMyInfoMutation;
