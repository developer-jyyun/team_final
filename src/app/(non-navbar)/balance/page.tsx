import getPolls from "@/api/balance/getPolls";
import getPollsResult from "@/api/balance/getPollsResult";
import DefaultHeader from "@/app/_component/common/layout/DefaultHeader";
// import { FetchResponse, PollsFalse } from "@/app/types";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import ViewOption from "./_component/ViewOption";

export const generateMetadata = async () => {
  // const polls: FetchResponse<PollsFalse> = await getPolls();

  return {
    // title: polls.data?.alreadySubmitted
    //   ? "Let's - 여행 찬반 토론"
    //   : polls.data?.subject,
    titile: "Let's - 여행 찬반 토론",
  };
};

const BalancePage = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["polls"],
    queryFn: getPolls,
  });
  await queryClient.prefetchQuery({
    queryKey: ["polls-result"],
    queryFn: getPollsResult,
  });

  const dehydrateState = dehydrate(queryClient);

  return (
    <div className="w-full">
      <DefaultHeader text="여행 찬반 토론" />
      <HydrationBoundary state={dehydrateState}>
        <ViewOption />
      </HydrationBoundary>
    </div>
  );
};
export default BalancePage;
