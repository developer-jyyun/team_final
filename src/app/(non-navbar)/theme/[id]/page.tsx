"use client";

import DefaultHeader from "@/app/_component/common/layout/DefaultHeader";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { useParams } from "next/navigation";

// 베스트 테마 / 일반 테마 컴포넌트 import
import BestThemeDetail from "./_component/BestThemeDetail";
import ThemeDetail from "./_component/ThemeDetail";
import useBestThemeResult from "./_hooks/useBestThemeResult";
import useThemeResult from "./_hooks/useThemeResult";

const ThemePage = () => {
  // id 값을 통한 구분 -> 0의 경우 베스트 테마, 이외에는 각각의 테마
  const { id } = useParams();
  const queryClient = new QueryClient();
  const dehydrateState = dehydrate(queryClient);

  // 하위 컴포넌트(베스트)에 전달하는 props 정보 세팅
  const {
    data: bestPackageData,
    bestPackageFetchNextPage,
    bestPackageHasNextPage,
    bestPackageIsFetching,
    bestPackageIsLoading,
  } = useBestThemeResult();

  // 하위 컴포넌트(테마)에 전달하는 props 정보 세팅
  const {
    data: packageData,
    packageFetchNextPage,
    packageHasNextPage,
    packageIsFetching,
    packageIsLoading,
  } = useThemeResult(id.toString(), "departure_date");

  return (
    <section className="w-full flex flex-col items-center">
      <DefaultHeader theme="main" back />
      <HydrationBoundary state={dehydrateState}>
        {/* id == 0 -> 베스트 테마 id != 0 -> 일반 테마 */}
        {Number(id) === 0 ? (
          <BestThemeDetail
            data={bestPackageData}
            fetchNextPage={bestPackageFetchNextPage}
            hasNextPage={bestPackageHasNextPage}
            isFetching={bestPackageIsFetching}
            isLoading={bestPackageIsLoading}
          />
        ) : (
          <ThemeDetail
            data={packageData}
            fetchNextPage={packageFetchNextPage}
            hasNextPage={packageHasNextPage}
            isFetching={packageIsFetching}
            isLoading={packageIsLoading}
          />
        )}
      </HydrationBoundary>
    </section>
  );
};

export default ThemePage;
