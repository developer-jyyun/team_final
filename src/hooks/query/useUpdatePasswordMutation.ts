import putMyPassword from "@/api/my/putMyPassword";
import { useMutation } from "@tanstack/react-query";

const useUpdateMyPasswordMutation = () => {
  const UpdateMyPasswordMutation = useMutation({
    mutationKey: ["UpdateMyPassword"],
    mutationFn: putMyPassword,
  });

  return UpdateMyPasswordMutation;
};

export default useUpdateMyPasswordMutation;
