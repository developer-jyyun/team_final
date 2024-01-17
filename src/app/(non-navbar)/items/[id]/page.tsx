import getPackageDetail from "@/api/items/getPackageDetail";
import DefaultHeader from "@/app/_component/common/layout/DefaultHeader";
import type { PackageResponseData } from "@/app/types";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import DetailMain from "./_component/DetailMain";

export const generateStaticParams = async () => {
  const ids = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return ids.map((id) => ({
    id: id.toString(),
  }));
};

export const generateMetadata = async ({
  params,
}: {
  params: { id: string };
}) => {
  const item: { code: number; data: PackageResponseData } =
    await getPackageDetail(Number(params.id));

  return {
    title: item.data.title,
  };
};

const ItemsPage = async ({ params }: { params: { id: string } }) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["package-detail", params.id],
    queryFn: async () => {
      return getPackageDetail(Number(params.id));
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
