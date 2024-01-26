// 무한스크롤 관련 import
import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from "@tanstack/react-query";

// 테마 페이지 최초 렌더링시 보여줄 스피너 import
import Spinner from "@/app/_component/common/layout/Spinner";
// 테마 패키지 컴포넌트 import
import ThemePackageItem from "./ThemePackageItem";

interface Props {
  data: InfiniteData<any, unknown> | undefined;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined,
  ) => Promise<InfiniteQueryObserverResult<InfiniteData<any, unknown>, Error>>;
  hasNextPage: boolean;
  isFetching: boolean;
  isLoading: boolean;
}

const BestThemeDetail = ({
  data,
  fetchNextPage,
  isFetching,
  hasNextPage,
  isLoading,
}: Props) => {
  // 테마 페이지에서 최초 렌더링시 isLoading boolean 값 여부에 따라 스피너 노출
  if (isLoading) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="w-full">
      <div>
        {/* 베스트 테마 대표 이미지 */}
        <div className="w-full h-[320px] object-cover">
          <img
            src="/assets/bestTheme.png"
            alt="bestImg"
            className="w-full h-full"
          />
        </div>
        {/* 베스트 테마 설명 텍스트 영역 */}
        <div className="flex flex-col pt-[32px] pb-[40px] gap-4 items-center">
          <p className="text-pink text-[24px] text-center font-bold">
            {"베스트 여행 모음전"}
          </p>
          <p className="text-black-4 text-sm w-[90%] break-keep text-center">
            {"나에게 가장 잘맞는 여행 LET'S와 함께 주간 베스트 여행 모음전"}
          </p>
        </div>
      </div>
      <div>
        {/* 베스트 테마 패키지 목록 */}
        <ThemePackageItem
          data={data}
          isFetching={isFetching}
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isBest // 베스트 테마 전용 prop
        />
      </div>
    </div>
  );
};

export default BestThemeDetail;
