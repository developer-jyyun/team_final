import { useParams } from "next/navigation";

// 테마 상세 컴포넌트 / 쿼리 import
import useThemeResult from "../_hooks/useThemeResult";
import ThemeDetail from "./ThemeDetail";

const Theme = () => {
  const { id } = useParams();
  // 하위 컴포넌트(테마)에 전달하는 props 정보 세팅
  const {
    data: packageData,
    packageFetchNextPage,
    packageHasNextPage,
    packageIsFetching,
    packageIsLoading,
  } = useThemeResult(id.toString(), "departure_date");
  return (
    <ThemeDetail
      data={packageData}
      fetchNextPage={packageFetchNextPage}
      hasNextPage={packageHasNextPage}
      isFetching={packageIsFetching}
      isLoading={packageIsLoading}
    />
  );
};

export default Theme;
