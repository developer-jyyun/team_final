// TODO:::이후 제거할 예정입니당

import React from "react";
import TabsContainer from "@/app/_component/common/layout/TabsContainer";
import ReservationTabContent from "./ReservationTabContent";
import MyReviewTabContent from "./MyReviewTabContent";

export const Test1 = () => {
  return <div className="text-center p-5">탭 콘텐츠 컴포넌트</div>;
};
export const Test2 = () => {
  return <div className="text-center p-5">탭 콘텐츠 컴포넌트</div>;
};
export const Test3 = () => {
  return <div className="text-center p-5">탭 콘텐츠 컴포넌트</div>;
};

const TabTest = () => {
  const tabsData = [
    { name: "예약 내역", content: <ReservationTabContent /> },
    { name: "내가 쓴 리뷰", content: <MyReviewTabContent /> },
  ];
  const tabsData1 = [
    { name: "test1", content: <Test1 /> },
    { name: "test2", content: <Test2 /> },
    { name: "test3", content: <Test3 /> },
  ];
  const tabsData2 = [
    { name: "test1", content: <Test1 /> },
    { name: "test2", content: <Test2 /> },
    { name: "test3", content: <Test3 /> },
    { name: "test4", content: <Test1 /> },
    { name: "test5", content: <Test2 /> },
    { name: "test6", content: <Test3 /> },
    { name: "test7", content: <Test1 /> },
    { name: "test8", content: <Test2 /> },
    { name: "test9", content: <Test1 /> },
    { name: "test10", content: <Test2 /> },
  ];
  return (
    <>
      <TabsContainer
        tabs={tabsData}
        tabButtonStyle={{
          defaultClass: "py-3 text-black",
          selectedClass:
            "py-3 font-black border-b border-0.5 border-solid border-black",
        }}
      />
      <TabsContainer
        tabs={tabsData1}
        tabButtonStyle={{
          defaultClass: "py-2 border-b border-1 border-gray-400",
          selectedClass:
            "py-2 text-black border-b border-1 border-pink border-solid",
        }}
      />

      <TabsContainer
        tabs={tabsData2}
        tabButtonStyle={{
          defaultClass: "pl-4 py-2",
          selectedClass: "text-pink pl-4 py-2 :last-child:pr-3",
        }}
      />
    </>
  );
};

export default TabTest;
