import postOrder from "@/api/items/postOrder";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { Price } from "@/app/types";

interface Props {
  packageId: number;
  availableDateId: number;
  requestMessage: string;
  cancelFeeAgreement: boolean;
  numberOfPeople: Price;
}

const useOrderMutation = (body: Props) => {
  const queryClient = useQueryClient();

  const postMutation = useMutation({
    mutationKey: ["order"],
    mutationFn: async () => {
      return postOrder(body);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["order"],
      });
    },
    onError: (err) => {
      console.error(`예약에 실패했습니다: ${err.message}`);
    },
  });

  return postMutation;
};

export default useOrderMutation;
