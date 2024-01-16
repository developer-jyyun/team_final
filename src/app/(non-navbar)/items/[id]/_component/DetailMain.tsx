"use client";

import CenterContainer from "@/app/_component/common/atom/CenterContainer";
import usePackageDetailQuery from "@/hooks/query/usePackageDetailQuery";
import { useParams } from "next/navigation";
import { useState } from "react";
import BadgeList from "./BadgeList";
import DetailSwiper from "./DetailSwiper";
import DetailTypography from "./DetailTypography";
import ItemDetailBottom from "./ItemDetailBottom";
import PackageInfo from "./PackageInfo";
import PackageTagBadge from "./PackageTagBadge";

const DettailMain = () => {
  const params = useParams();
  const { data: packageDetail } = usePackageDetailQuery(params.id);
  const [viewMore, setViewMore] = useState(false);

  return (
    <div
      className={`overflow-hidden ${
        viewMore ? "pb-[30px]" : "h-[700px] web:h-[630px]"
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
      </div>
      <ItemDetailBottom viewMore={viewMore} setViewMore={setViewMore} />
    </div>
  );
};

export default DettailMain;
