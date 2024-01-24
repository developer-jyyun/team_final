import getOrderToReviewAuth from "@/api/my/getOrderToReviewAuth";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { cookies } from "next/headers";
import ReviewForm from "../_components/ReviewForm";

const WriteReviewPage = async () => {
  const cookieStore = cookies();

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["orderToReview"],
    queryFn: async () => {
      return getOrderToReviewAuth(cookieStore.toString());
    },
  });

  const dehydrateState = dehydrate(queryClient);
  return (
    <div className="w-full">
      <HydrationBoundary state={dehydrateState}>
        <ReviewForm />
      </HydrationBoundary>
    </div>
  );
};

export default WriteReviewPage;
