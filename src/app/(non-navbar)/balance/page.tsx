import getPolls from "@/api/balance/getPolls";
import getPollsMain from "@/api/balance/getPollsMain";
import getPollsResult from "@/api/balance/getPollsResult";
import DefaultHeader from "@/app/_component/common/layout/DefaultHeader";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { cookies } from "next/headers";
import ViewOption from "./_component/ViewOption";

export const generateMetadata = async () => {
  const polls = await getPollsMain();

  const title =
    polls.code === 200
      ? `${
          polls.data.subject
        } - ${polls.data.A.join()} or ${polls.data.B.join()}`
      : "등록된 이벤트가 없습니다...";

  return {
    title: title,
  };
};

const BalancePage = async () => {
  const cookieStore = cookies();

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["polls", "main"],
    queryFn: getPollsMain,
  });
  await queryClient.prefetchQuery({
    queryKey: ["polls"],
    queryFn: async () => {
      return getPolls(cookieStore.toString());
    },
  });
  await queryClient.prefetchQuery({
    queryKey: ["polls-result"],
    queryFn: async () => {
      return getPollsResult(cookieStore.toString());
    },
  });

  const dehydrateState = dehydrate(queryClient);

  return (
    <div className="w-full">
      <DefaultHeader text="여행 찬반 토론" redirectUrl="/" />
      <HydrationBoundary state={dehydrateState}>
        <ViewOption />
      </HydrationBoundary>
    </div>
  );
};
export default BalancePage;
