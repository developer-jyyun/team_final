import getPackageReveiws from "@/api/items/getPackageReviews";
import getPackageScore from "@/api/items/getPackageScore";
import getAvailableDates from "@/api/schedule/getAvailableDates";
import getPackageSchedules from "@/api/schedule/getPackageSchedules";
import type { PackageResponseData } from "@/app/types";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { cookies } from "next/headers";
import DetailMain from "./_component/DetailMain";

const prefetchPackageDetail = async (id: number, query: string | null) => {
  const cookieStore = cookies();
  let url;
  if (query) {
    url = `${process.env.NEXT_PUBLIC_BASE_URL}/v1/packages/${id}?departDate=${query}`;
  } else {
    url = `${process.env.NEXT_PUBLIC_BASE_URL}/v1/packages/${id}`;
  }

  try {
    const result = await fetch(url, {
      cache: "no-store",
      headers: {
        Cookie: cookieStore.toString(),
      },
    });

    const data = await result.json();

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const generateMetadata = async ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { departDate: string };
}) => {
  const item: { code: number; data?: PackageResponseData } =
    await prefetchPackageDetail(Number(params.id), searchParams.departDate);

  return {
    title: item.code === 200 ? item.data?.title : "아무것도 없어요...",
  };
};

const ItemsPage = async ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { departDate: string };
}) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["package-detail", "detail"],
    queryFn: async () => {
      return prefetchPackageDetail(Number(params.id), searchParams.departDate);
    },
  });
  await queryClient.prefetchQuery({
    queryKey: ["package-detail", "score"],
    queryFn: async () => {
      return getPackageScore(Number(params.id));
    },
  });
  await queryClient.prefetchQuery({
    queryKey: ["package-detail", "schedule"],
    queryFn: async () => {
      return getPackageSchedules(Number(params.id));
    },
  });
  await queryClient.prefetchInfiniteQuery({
    queryKey: ["package-detail", "reviews"],
    queryFn: ({ pageParam = 1 }) =>
      getPackageReveiws(Number(params.id), pageParam),
    initialPageParam: 1,
  });

  await queryClient.prefetchQuery({
    queryKey: ["schedule-date", params.id],
    queryFn: async () => {
      return getAvailableDates(Number(params.id));
    },
  });
  const dehydrateState = dehydrate(queryClient);

  return (
    <div className="w-full">
      <HydrationBoundary state={dehydrateState}>
        <DetailMain />
      </HydrationBoundary>
    </div>
  );
};

export default ItemsPage;
