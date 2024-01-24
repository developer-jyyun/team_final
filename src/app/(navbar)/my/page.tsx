import getMyOrders from "@/api/my/getMyOrders";
import BottomNav from "@/app/_component/common/layout/BottomNav";
import TabsContainer from "@/app/_component/common/layout/TabsContainer";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { cookies } from "next/headers";
import InnerSection from "./_component/InnerSection";
import MyReviewTabContent from "./_component/MyReviewTabContent";
import ReservationTabContent from "./_component/ReservationTabContent";
import UpcomingPackage from "./_component/UpcomingPackage";
import UserInfo from "./_component/UserInfo";

export function generateMetadata() {
  return { title: "Let's - 마이페이지" };
}

const MyPage = async () => {
  const cookieStore = cookies();

  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: ["myOrders", "tab"],
    queryFn: ({ pageParam }) =>
      getMyOrders(pageParam, 3, cookieStore.toString()),
    initialPageParam: 1,
  });
  const dehydrateState = dehydrate(queryClient);

  const tabsData = [
    { name: "예약 내역", content: <ReservationTabContent /> },
    { name: "내가 쓴 리뷰", content: <MyReviewTabContent /> },
  ];

  return (
    <InnerSection
      text="마이페이지"
      backUrl="/"
      iconSrc="/icons/dotMenuIcon.svg"
      iconUrl="/my/menu"
      iconAlt="메뉴 아이콘"
    >
      <UserInfo showEditIcon />
      <UpcomingPackage />

      <HydrationBoundary state={dehydrateState}>
        <TabsContainer
          tabs={tabsData}
          tabButtonStyle={{
            defaultClass: "py-1 text-black-9  border-b-2 border-grey-e",
            selectedClass: "py-1 text-black  border-b-2 border-grey-a",
          }}
        />
      </HydrationBoundary>
      <BottomNav />
    </InnerSection>
  );
};

export default MyPage;
