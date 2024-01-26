// 무한스크롤 관련 import
import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from "@tanstack/react-query";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";

// isFetching 단계에서 보여줄 스켈레톤 레이아웃
import SkeletonItem from "@/app/(navbar)/search/_component/SkeletonItem";

// PackageInfo: 베스트 테마 패키지 데이터 type / ThemeItem: 일반 테마 패키지 데이터 type
import { PackageInfo, ThemeItem } from "@/app/types";
import { useRouter } from "next/navigation";

// isBest: 베스트 테마 여부 prop
interface Props {
  data: InfiniteData<any, unknown> | undefined;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined,
  ) => Promise<InfiniteQueryObserverResult<InfiniteData<any, unknown>, Error>>;
  hasNextPage: boolean;
  isFetching: boolean;
  isBest?: boolean;
}

const ThemePackageItem = ({
  data,
  fetchNextPage,
  isFetching,
  hasNextPage,
  isBest,
}: Props) => {
  const router = useRouter();
  const lastElementRef = useInfiniteScroll(
    fetchNextPage,
    isFetching,
    hasNextPage,
  );

  return (
    <>
      {data?.pages.map((pageData, index) => (
        <div key={index}>
          {isBest ? (
            // 베스트 테마
            <div
              id="bestThemePackage"
              className="px-6 grid grid-cols-2 grid-rows-2 gap-[17px]"
            >
              {pageData.data.map((value: PackageInfo, index2: number) => (
                <div
                  key={index2}
                  className="cursor-pointer"
                  onClick={() => router.push(`/items/${value.packageId}`)} // 클릭시 상세 페이지 연결
                >
                  <img
                    src={value.imageUrl}
                    alt="packageImg"
                    className="object-cover w-full h-[180px] web:w-full mb-2 rounded-lg"
                  />
                  <div className="flex flex-col gap-[14px]">
                    <p className="w-full h-[30px] web:w-full text-black-6 text-xs font-normal overflow-hidden">
                      {value.title}
                    </p>
                    <p className="text-black text-base font-bold">
                      {`${value.minPrice.toLocaleString()}원~`}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // 일반 테마
            <div
              id="normalThemePackage"
              className="px-6 grid grid-cols-2 grid-rows-2 gap-[17px]"
            >
              {pageData.data.map((value: ThemeItem, index2: number) => (
                <div
                  key={index2}
                  className="cursor-pointer"
                  onClick={() =>
                    router.push(`/items/${value.packages[0].packageId}`)
                  } // 클릭시 상세 페이지 연결
                >
                  <img
                    src={value.packages[0].imageUrl}
                    alt="packageImg"
                    className="object-cover w-full h-[180px] web:w-full mb-2 rounded-lg"
                  />
                  <div className="flex flex-col gap-[14px]">
                    <p className="w-full h-[30px] web:w-full text-black-6 text-xs font-normal overflow-hidden">
                      {value.packages[0].title}
                    </p>
                    <p className="text-black text-base font-bold">
                      {`${value.minPrice.toLocaleString()}원~`}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}

      <li
        ref={lastElementRef}
        className="w-full text-center text-black-6 h-20 list-none"
      >
        {/* pageSize 개수만큼 새롭게 받아와 fetch하는 과정에서의 스켈레톤 */}
        {isFetching && (
          <div className="px-6 w-full grid grid-cols-2 grid-rows-2 gap-[17px]">
            {[0, 1, 2, 3].map((i) => (
              <SkeletonItem key={i} />
            ))}
          </div>
        )}
        {/* 마지막 데이터까지 전부 불러온 경우 */}
        {!isFetching && !hasNextPage && (
          <div className="mt-4 p-4">마지막 목록입니다!</div>
        )}
      </li>
    </>
  );
};

export default ThemePackageItem;
