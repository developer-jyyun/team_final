import getPackageDetail from "@/api/items/getPackageDetail";
import DefaultHeader from "@/app/_component/common/layout/DefaultHeader";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import DettailMain from "./_component/DettailMain";

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
        <DettailMain />
      </HydrationBoundary>
    </div>
  );
};

export default ItemsPage;
