import DefaultHeader from "@/app/_component/common/layout/DefaultHeader";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import getBestPackages from "@/api/home/getBestPackages";
import getThemeDetail from "@/api/theme/getThemeDetail";
import ThemeDetail from "./_component/ThemeDetail";
import BestThemeDetail from "./_component/BestThemeDetail";

const ThemePage = async ({ params }: { params: { id: string } }) => {
  const queryClient = new QueryClient();
  if (Number(params.id) === 0) {
    await queryClient.prefetchQuery({
      queryKey: ["best-theme-info", params.id.toString()],
      queryFn: () => getBestPackages(1, 10),
    });
  } else {
    await queryClient.prefetchQuery({
      queryKey: ["theme-info", params.id.toString()],
      queryFn: () => getThemeDetail(Number(params.id), "departure_date", 1, 10),
    });
  }
  const dehydrateState = dehydrate(queryClient);

  return (
    <section className="w-full flex flex-col items-center">
      <DefaultHeader theme="main" back />
      <HydrationBoundary state={dehydrateState}>
        {Number(params.id) === 0 ? <BestThemeDetail /> : <ThemeDetail />}
      </HydrationBoundary>
    </section>
  );
};

export default ThemePage;
