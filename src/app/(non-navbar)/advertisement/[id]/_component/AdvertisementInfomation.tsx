"use client";

import useAdvertisementInfoQuery from "@/hooks/query/useAdvertisementInfoQuery";
import { useParams } from "next/navigation";

const AdvertisementInfomation = () => {
  const params = useParams();

  const { data: advertisementInfo } = useAdvertisementInfoQuery(params.id);

  console.log(advertisementInfo);
  return <div>123</div>;
};

export default AdvertisementInfomation;
