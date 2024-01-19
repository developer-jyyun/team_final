"use client";

import CenterContainer from "@/app/_component/common/atom/CenterContainer";
import ScrollToUpButton from "@/app/_component/common/atom/ScrollToUpButton";
import TabsContainer from "@/app/_component/common/layout/TabsContainer";
import usePackageDetailQuery from "@/hooks/query/usePackageDetailQuery";
import { useParams, useSearchParams } from "next/navigation";
import { useState } from "react";
import BadgeList from "./BadgeList";
import ChangeDateButton from "./ChangeDateButton";
import DetailSwiper from "./DetailSwiper";
import DetailTypography from "./DetailTypography";
import Introduction from "./Introduction";
import ItemDetailBottom from "./ItemDetailBottom";
import ItemNotFound from "./ItemNotFound";
import PackageInfo from "./PackageInfo";
import PackageTagBadge from "./PackageTagBadge";
import Reviews from "./Reviews";
import ScheduleDetail from "./ScheduleDetail";
import TravelDate from "./TravelDate";
// import Dialog from "@/app/_component/common/layout/Dialog";

const DetailMain = () => {
  const params = useParams();
  const searchParams = useSearchParams();

  const { data: packageDetail } = usePackageDetailQuery(
    params.id,
    searchParams.get("departDate"),
  );
  const [viewMore, setViewMore] = useState(false);
  // 이후 로그인 유저 구분
  // const [, setIsLogin] = useState(false);

  if (packageDetail.code === 404) {
    return <ItemNotFound />;
  }

  const tabsData = [
    {
      name: "상품소개",
      content: (
        <Introduction
          introImageUrls={packageDetail.data.introImageUrls}
          inclusionList={packageDetail.data.inclusionList}
          exclusionList={packageDetail.data.exclusionList}
          totalPrice={packageDetail.data.totalPrice}
        />
      ),
    },
    {
      name: "일정표",
      content: (
        <ScheduleDetail
          departureDatetime={packageDetail.data.departureDatetime}
          endDatetime={packageDetail.data.endDatetime}
        />
      ),
    },
    {
      name: "리뷰",
      content: <Reviews user={packageDetail.data.myInfo.username} />,
    },
  ];

  return (
    <div
      className={`${!viewMore && "overflow-hidden"} ${
        viewMore ? "pb-[80px]" : "h-[700px] web:h-[630px]"
      } relative`}
    >
      {/* 이후 로그인 유저 구분 */}
      {/* <Dialog
        isOpen={isLogin}
        type="confirm"
        theme="login"
        onClose={() => {
          setIsLogin(false);
        }}
        onConfirm={() => {
          router.push("/signin");
        }}
      /> */}
      <DetailSwiper imgUrls={packageDetail.data.imageUrls} />
      <div className="px-8">
        <BadgeList>
          {packageDetail.data.hashtags.map((hashtag: string) => {
            return <PackageTagBadge key={hashtag} text={hashtag} />;
          })}
        </BadgeList>
        <DetailTypography bold={700} size={20}>
          {packageDetail.data.title}
        </DetailTypography>
        <div className="flex justify-between items-center mt-6">
          <CenterContainer>
            <div>
              <img src="/icons/starIconMini.svg" alt="리뷰 별" />
            </div>
            <DetailTypography color={3} styleClass="mx-1">
              ({packageDetail.data.averageStars})
            </DetailTypography>
            <DetailTypography color={8}>
              리뷰 {packageDetail.data.reviewCount}
            </DetailTypography>
          </CenterContainer>
          <CenterContainer>
            <DetailTypography color={4} size={10} styleClass="mr-[6px]">
              성인 1인
            </DetailTypography>
            <DetailTypography size={18} bold={600}>
              {packageDetail.data.totalPrice.adult.toLocaleString()}
            </DetailTypography>
            <DetailTypography bold={500}>원~</DetailTypography>
          </CenterContainer>
        </div>
        <PackageInfo infoData={packageDetail.data.info} />
        <TravelDate
          departureDatetime={packageDetail.data.departureDatetime}
          endDatetime={packageDetail.data.endDatetime}
          transporation={packageDetail.data.transporation}
        />
        <ChangeDateButton packageDetail={packageDetail.data} />
        <TabsContainer
          tabs={tabsData}
          tabButtonStyle={{
            defaultClass: "py-1 text-black-9  border-b-2 border-grey-e",
            selectedClass: "py-1 text-black  border-b-2 border-pink",
          }}
          sticky
          scroll
        />
      </div>
      <ItemDetailBottom
        viewMore={viewMore}
        setViewMore={setViewMore}
        // setIsLogin={setIsLogin}
        packageDetail={packageDetail.data}
      />
      <ScrollToUpButton />
    </div>
  );
};

export default DetailMain;
