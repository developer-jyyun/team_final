import getPackageDetail from "@/api/items/getPackageDetail";
import getOrderToReviewAuth from "@/api/my/getOrderToReviewAuth";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { cookies } from "next/headers";
import ReviewForm from "./_components/ReviewForm";

const WriteReviewPage = async ({
  searchParams,
}: {
  params: { id: string };
  searchParams: { pid: string; oid: string };
}) => {
  const cookieStore = cookies();

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["orderToReview"],
    queryFn: async () => {
      return getOrderToReviewAuth(cookieStore.toString());
    },
  });
  await queryClient.prefetchQuery({
    queryKey: ["package-detail", "detail"],
    queryFn: async () => {
      return getPackageDetail(
        Number(searchParams.pid),
        null,
        cookieStore.toString(),
      );
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
