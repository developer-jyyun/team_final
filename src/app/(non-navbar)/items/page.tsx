import getPackageDetail from "@/api/items/getPackageDetail";
import DefaultHeader from "@/app/_component/common/layout/DefaultHeader";
import type { PackageResponseData } from "@/app/types";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import DetailMain from "./_component/DetailMain";

export const generateMetadata = async ({
  searchParams,
}: {
  searchParams: { d: string };
}) => {
  const item: { code: number; data: PackageResponseData } =
    await getPackageDetail(Number(searchParams.d));

  return {
    title: item.data.title,
  };
};

const ItemsPage = async ({ searchParams }: { searchParams: { d: string } }) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["package-detail", searchParams.d],
    queryFn: async () => {
      return getPackageDetail(Number(searchParams.d));
    },
  });
  const dehydrateState = dehydrate(queryClient);

  return (
    <div className="w-full">
      <DefaultHeader theme="main" />
      <HydrationBoundary state={dehydrateState}>
        <DetailMain />
      </HydrationBoundary>
    </div>
  );
};

export default ItemsPage;
