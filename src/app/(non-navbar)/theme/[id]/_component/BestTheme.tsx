// 베스트 테마 상세 컴포넌트 / 쿼리 import
import useBestThemeResult from "../_hooks/useBestThemeResult";
import BestThemeDetail from "./BestThemeDetail";

const BestTheme = () => {
  // 하위 컴포넌트(베스트)에 전달하는 props 정보 세팅
  const {
    data: bestPackageData,
    bestPackageFetchNextPage,
    bestPackageHasNextPage,
    bestPackageIsFetching,
    bestPackageIsLoading,
  } = useBestThemeResult();

  return (
    <BestThemeDetail
      data={bestPackageData}
      fetchNextPage={bestPackageFetchNextPage}
      hasNextPage={bestPackageHasNextPage}
      isFetching={bestPackageIsFetching}
      isLoading={bestPackageIsLoading}
    />
  );
};

export default BestTheme;
