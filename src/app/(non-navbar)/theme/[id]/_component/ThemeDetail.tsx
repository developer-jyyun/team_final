// 무한스크롤 관련 import
import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from "@tanstack/react-query";

import { useEffect, useState } from "react";

// 대표 테마 페이지 state를 다루기 위한 type import
import { ThemeItem } from "@/app/types";
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

const ThemeDetail = ({
  data,
  fetchNextPage,
  isFetching,
  hasNextPage,
  isLoading,
}: Props) => {
  // 테마 대표 이미지와 소개 텍스트를 한번만 사용하기 위한 대표 테마 패키지를 설정하기 위한 state
  const [themeTitleData, setThemeTitleData] = useState<ThemeItem>();

  useEffect(() => {
    if (data) {
      setThemeTitleData(data?.pages[0]?.data[0]); // 가장 첫 패키지 상품으로 대표 패키지 설정
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

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
        {/* 테마 대표 이미지 */}
        <img
          src={themeTitleData?.imageUrl}
          alt="theme"
          className="w-full h-[320px] object-cover"
        />
        {/* 테마 설명 텍스트 영역 */}
        <div className="flex flex-col pt-[32px] pb-[40px] gap-4 items-center">
          <p className="text-pink text-[24px] text-center font-bold">
            {themeTitleData?.name}
          </p>
          <p className="text-black-4 text-sm w-[90%] break-keep text-center">
            {themeTitleData?.description}
          </p>
        </div>
      </div>
      {/* 테마 패키지 목록 */}
      <ThemePackageItem
        data={data}
        isFetching={isFetching}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
      />
    </div>
  );
};

export default ThemeDetail;
