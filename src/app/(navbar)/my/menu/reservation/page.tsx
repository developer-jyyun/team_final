import getMyOrders from "@/api/my/getMyOrders";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { cookies } from "next/headers";
import ReservationMain from "./_component/ReservationMain";

const ReservationPage = async () => {
  const cookieStore = cookies();

  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ["myOrders", "detail"],
    queryFn: ({ pageParam }) =>
      getMyOrders(pageParam, 6, cookieStore.toString()),
    initialPageParam: 1,
  });

  const dehydrateState = dehydrate(queryClient);

  return (
    <div className="w-full">
      <HydrationBoundary state={dehydrateState}>
        <ReservationMain />
      </HydrationBoundary>
    </div>
  );
};

export default ReservationPage;
