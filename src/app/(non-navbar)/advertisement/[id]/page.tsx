import DefaultHeader from "@/app/_component/common/layout/DefaultHeader";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import getAdvertisementInfo from "@/api/advertisement/getAdvertisementInfo";
import AdvertisementInfomation from "./_component/AdvertisementInfomation";

const AdvertisementPage = async ({ params }: { params: { id: string } }) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["advertisement-info", params.id.toString()],
    queryFn: async () => {
      return getAdvertisementInfo(Number(params.id));
    },
  });
  const dehydrateState = dehydrate(queryClient);
  return (
    <section className="w-full flex flex-col items-center">
      <DefaultHeader theme="default" text="hi" />
      <HydrationBoundary state={dehydrateState}>
        <AdvertisementInfomation />
      </HydrationBoundary>
    </section>
  );
};

export default AdvertisementPage;
