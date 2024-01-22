import TabsContainer from "@/app/_component/common/layout/TabsContainer";
import BottomNav from "@/app/_component/common/layout/BottomNav";
import ReservationTabContent from "./_component/ReservationTabContent";
import MyReviewTabContent from "./_component/MyReviewTabContent";
import UserInfo from "./_component/UserInfo";
import UpcomingPackage from "./_component/UpcomingPackage";
import InnerSection from "./_component/InnerSection";

export function generateMetadata() {
  return { title: "Let's - 마이페이지" };
}

const MyPage = async () => {
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
      <TabsContainer
        tabs={tabsData}
        tabButtonStyle={{
          defaultClass: "py-1 text-black-9  border-b-2 border-grey-e",
          selectedClass: "py-1 text-black  border-b-2 border-grey-a",
        }}
      />
      <BottomNav />
    </InnerSection>
  );
};

export default MyPage;
