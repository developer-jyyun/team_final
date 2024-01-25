import DefaultHeader from "@/app/_component/common/layout/DefaultHeader";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import getAdvertisementInfo from "@/api/advertisement/getAdvertisementInfo";
import getAdsHeaderText from "@/utils/getAdsHeaderText";
import getAdvertisements from "@/api/home/getAdvertisements";
import AdvertisementDetail from "./_component/AdvertisementDetail";

const AdvertisementPage = async ({ params }: { params: { id: string } }) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["advertisements"],
    queryFn: getAdvertisements,
  });
  await queryClient.prefetchQuery({
    queryKey: ["advertisement-info", params.id.toString()],
    queryFn: async () => {
      return getAdvertisementInfo(Number(params.id));
    },
  });
  const dehydrateState = dehydrate(queryClient);

  return (
    <section className="w-full flex flex-col items-center">
      {/* adId를 기반으로 헤더 텍스트 전달 */}
      <DefaultHeader text={`${getAdsHeaderText(Number(params.id))} 특별여행`} />
      <HydrationBoundary state={dehydrateState}>
        <AdvertisementDetail />
      </HydrationBoundary>
    </section>
  );
};

export default AdvertisementPage;
