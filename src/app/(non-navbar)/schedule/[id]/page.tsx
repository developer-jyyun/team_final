import getPackageDetail from "@/api/items/getPackageDetail";
import getAvailableDates from "@/api/schedule/getAvailableDates";
import Button from "@/app/_component/common/atom/Button";
import DefaultHeader from "@/app/_component/common/layout/DefaultHeader";
import { PackageResponseData } from "@/app/types";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import Calender from "./_component/Calender";
import SelectedProduct from "./_component/SelectedProduct";

export const generateMetadata = async ({
  params,
}: {
  params: { id: string };
}) => {
  const item: { code: number; data: PackageResponseData } =
    await getPackageDetail(Number(params.id));

  return {
    title: `일정-${item.data.title}`,
  };
};

const SchedulePage = async ({ params }: { params: { id: string } }) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["schedule-date", params.id],
    queryFn: async () => {
      return getAvailableDates(Number(params.id));
    },
  });
  await queryClient.prefetchQuery({
    queryKey: ["package-detail", params.id],
    queryFn: async () => {
      return getPackageDetail(Number(params.id));
    },
  });
  const dehydrateState = dehydrate(queryClient);

  return (
    <section>
      <DefaultHeader text="여행 일정" />
      <div className="flex flex-col h-full px-7 web:px-8">
        <HydrationBoundary state={dehydrateState}>
          <Calender />
        </HydrationBoundary>
        <SelectedProduct />
        <Button
          text="선택 완료"
          theme="wide"
          styleClass="-translate-y-1 web:-translate-y-5"
        />
      </div>
    </section>
  );
};

export default SchedulePage;
