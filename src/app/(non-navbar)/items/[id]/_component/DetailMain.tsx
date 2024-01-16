"use client";

import CenterContainer from "@/app/_component/common/atom/CenterContainer";
import TabsContainer from "@/app/_component/common/layout/TabsContainer";
import type { DateTime, Reservation } from "@/app/types";
import usePackageDetailQuery from "@/hooks/query/usePackageDetailQuery";
import { useParams } from "next/navigation";
import { useState } from "react";
import BadgeList from "./BadgeList";
import ChangeDateButton from "./ChangeDateButton";
import DetailSwiper from "./DetailSwiper";
import DetailTypography from "./DetailTypography";
import Introduction from "./Introduction";
import ItemDetailBottom from "./ItemDetailBottom";
import PackageInfo from "./PackageInfo";
import PackageTagBadge from "./PackageTagBadge";
import Reviews from "./Reviews";
import ScheduleDetail from "./ScheduleDetail";
import TravelDate from "./TravelDate";

const DetailMain = () => {
  const params = useParams();
  const { data: packageDetail } = usePackageDetailQuery(params.id);
  const [viewMore, setViewMore] = useState(false);

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
    { name: "일정표", content: <ScheduleDetail /> },
    { name: "리뷰", content: <Reviews /> },
  ];

  return (
    <div
      className={`overflow-hidden ${
        viewMore ? "pb-[80px]" : "h-[700px] web:h-[630px]"
      }`}
    >
      <DetailSwiper imgUrls={packageDetail.data.imageUrls} />
      <div className="px-6 web:px-4">
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
          departureDatetime={packageDetail.data.departureDatetime as DateTime}
          endDatetime={packageDetail.data.endDatetime as DateTime}
          transporation={packageDetail.data.transporation as string}
        />
        <ChangeDateButton
          reservation={packageDetail.data.reservation as Reservation}
        />
        <TabsContainer
          tabs={tabsData}
          tabButtonStyle={{
            defaultClass: "py-1 text-black-9  border-b-2 border-grey-e",
            selectedClass: "py-1 text-black  border-b-2 border-pink",
          }}
        />
      </div>
      <ItemDetailBottom viewMore={viewMore} setViewMore={setViewMore} />
    </div>
  );
};

export default DetailMain;
