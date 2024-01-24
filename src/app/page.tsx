import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import getAdvertisements from "@/api/home/getAdvertisements";
import getThemePackages from "@/api/home/getThemePackages";
import getPollsMain from "@/api/balance/getPollsMain";
import getSalePackages from "@/api/home/getSalePackages";

import BottomNav from "./_component/common/layout/BottomNav";
import DefaultHeader from "./_component/common/layout/DefaultHeader";
import HomeAdvertisements from "./_component/home/HomeAdvertisements";
import HomeHashtags from "./_component/home/HomeHashtags";
import HomeSalePackages from "./_component/home/HomeSalePackages";
import HomeProsAndCons from "./_component/home/HomeProsAndCons";
import HomeThemePackage from "./_component/home/HomeThemePackage";
import ContentsContainer from "./_component/common/layout/ContentsContainer";

const Home = async () => {
  const queryClient = new QueryClient();

  // await queryClient.prefetchQuery({
  //   queryKey: [],
  //   queryFn: ,
  // })
  await queryClient.prefetchQuery({
    queryKey: ["themes"],
    queryFn: getThemePackages,
  });
  await queryClient.prefetchQuery({
    queryKey: ["advertisements"],
    queryFn: getAdvertisements,
  });
  await queryClient.prefetchQuery({
    queryKey: ["polls"],
    queryFn: getPollsMain,
  });
  await queryClient.prefetchQuery({
    queryKey: ["sales"],
    queryFn: () => getSalePackages(1, "전체", ""),
  });

  const dehydrateState = dehydrate(queryClient);

  return (
    <>
      <main>
        <section className="w-full">
          <DefaultHeader text="/" theme="main" />
          <HydrationBoundary state={dehydrateState}>
            <div className="flex flex-col items-center">
              {/* 광고구좌 */}
              <HomeAdvertisements />
              {/* 해시태그 검색 */}
              <HomeHashtags />
              {/* 패키지 컨셉 */}
              <ContentsContainer title="여행 테마 패키지">
                <HomeThemePackage />
              </ContentsContainer>
              {/* 찬반토론 */}
              <ContentsContainer title="찬반 토론 참여">
                <HomeProsAndCons />
              </ContentsContainer>
              {/* 초특가 패키지 목록 */}
              <ContentsContainer title="지금 핫한 초특가 상품">
                <HomeSalePackages />
              </ContentsContainer>
            </div>
          </HydrationBoundary>
        </section>
      </main>
      <BottomNav />
    </>
  );
};

export default Home;
