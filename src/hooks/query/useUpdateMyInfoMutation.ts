import patchMyInfo from "@/api/my/patchMyInfo";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

const useUpdateMyInfoMutation = () => {
  const queryClient = useQueryClient();
  const [serverError, setServerError] = useState({
    main: "",
    additional: "",
  });

  const updateMyInfoMutation = useMutation({
    mutationKey: ["UpdateMyInfo"],
    mutationFn: patchMyInfo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["myInfo"],
      });
      console.log("수정성공");
    },

    onError: (err) => {
      console.error(`회원정보 수정 실패: ${err.message}`);

      const mainMessage = err.message;
      let additionalMessage = "";

      if (err.message.includes("디비 에러!")) {
        additionalMessage = ` DB 처리 중 오류가 발생했습니다.`;
      }

      setServerError({
        main: mainMessage,
        additional: additionalMessage,
      });
    },
  });
  return { updateMyInfoMutation, serverError };
};

export default useUpdateMyInfoMutation;
