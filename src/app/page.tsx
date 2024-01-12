import BottomNav from "./_component/common/layout/BottomNav";
import DefaultHeader from "./_component/common/layout/DefaultHeader";
import HomeAdvertisements from "./_component/home/HomeAdvertisements";
import HomeHashtags from "./_component/home/HomeHashtags";
import HomePackages from "./_component/home/HomePackages";
import HomeProsAndCons from "./_component/home/HomeProsAndCons";
import HomeThemePackage from "./_component/home/HomeThemePackage";

const Home = async () => {
  return (
    <section className="web:w-[500px] mx-auto">
      <DefaultHeader text="/" theme="main" />
      <div className="w-[327px] web:w-[90%] flex flex-col items-center [&>*:nth-child(n)]:mb-10 mx-auto">
        {/* 광고구좌 */}
        <HomeAdvertisements />
        {/* 해시태그 검색 */}
        <HomeHashtags />
        {/* 패키지 컨셉 */}
        <HomeThemePackage />
        {/* 찬반토론 */}
        <HomeProsAndCons />
        {/* 초특가 패키지 목록 */}
        <HomePackages />
      </div>
      <BottomNav />
    </section>
  );
};

export default Home;
