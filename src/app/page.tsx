import BottomNav from "./_component/common/layout/BottomNav";
import DefaultHeader from "./_component/common/layout/DefaultHeader";
import HomeAdvertisements from "./_component/home/HomeAdvertisements";
import HomeHashtags from "./_component/home/HomeHashtags";
// import HomePackages from "./_component/home/HomePackages";
// import HomeProsAndCons from "./_component/home/HomeProsAndCons";
import HomeThemePackage from "./_component/home/HomeThemePackage";
import ContentsContainer from "./_component/common/layout/ContentsContainer";

const Home = async () => {
  return (
    <>
      <main>
        <section className="w-full">
          <DefaultHeader text="/" theme="main" />
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
            {/* <ContentsContainer title="찬반 토론 참여">
              <HomeProsAndCons />
            </ContentsContainer> */}
            {/* 초특가 패키지 목록 */}
            {/* <ContentsContainer title="지금 핫한 초특가 상품">
              <HomePackages />
            </ContentsContainer> */}
          </div>
        </section>
      </main>
      <BottomNav />
    </>
  );
};

export default Home;
