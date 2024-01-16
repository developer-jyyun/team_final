"use client";

import usePackageDetailQuery from "@/hooks/query/usePackageDetailQuery";
import { useParams } from "next/navigation";
import DetailSwiper from "./DetailSwiper";
import ItemDetailBottom from "./ItemDetailBottom";

const DettailMain = () => {
  const params = useParams();

  const { data: packageDetail } = usePackageDetailQuery(params.id);

  return (
    <>
      <DetailSwiper imgUrls={packageDetail.data.imageUrls} />
      <ItemDetailBottom />
    </>
  );
};

export default DettailMain;
