import DefaultHeader from "@/app/_component/common/layout/DefaultHeader";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import getThemeDetail from "@/api/theme/getThemeDetail";
import ThemeDetail from "./_component/ThemeDetail";

const ThemePage = async ({ params }: { params: { id: string } }) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["advertisement-info", params.id.toString()],
    queryFn: async () => {
      return getThemeDetail(Number(params.id), "departure_date", 1, 10);
    },
  });
  const dehydrateState = dehydrate(queryClient);

  return (
    <section className="w-full flex flex-col items-center">
      <DefaultHeader theme="main" back />
      <HydrationBoundary state={dehydrateState}>
        <ThemeDetail />
      </HydrationBoundary>
    </section>
  );
};

export default ThemePage;
