import getPackageDetail from "@/api/items/getPackageDetail";
import getPackageReveiws from "@/api/items/getPackageReviews";
import getPackageScore from "@/api/items/getPackageScore";
import DefaultHeader from "@/app/_component/common/layout/DefaultHeader";
import type { PackageResponseData } from "@/app/types";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import DetailMain from "./_component/DetailMain";

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
    queryKey: ["package-detail", params.id.toString()],
    queryFn: async () => {
      return getPackageDetail(Number(params.id));
    },
  });
  await queryClient.prefetchQuery({
    queryKey: ["package-detail", "score"],
    queryFn: async () => {
      return getPackageScore(Number(params.id));
    },
  });
  await queryClient.prefetchInfiniteQuery({
    queryKey: ["package-detail", "reviews"],
    queryFn: ({ pageParam = 1 }) =>
      getPackageReveiws(Number(params.id), pageParam),
    initialPageParam: 1,
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
