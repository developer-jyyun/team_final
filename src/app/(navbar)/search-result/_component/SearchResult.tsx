import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from "@tanstack/react-query";
import DropDownBox from "./DropDownBox";
import PackagesList from "./PackagesList";

interface Props {
  data: InfiniteData<any, unknown> | undefined;
  total: number;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined,
  ) => Promise<InfiniteQueryObserverResult<InfiniteData<any, unknown>, Error>>;
  hasNextPage: boolean;
  isFetching: boolean;
}

const SearchResult = ({
  data,
  total,
  fetchNextPage,
  isFetching,
  hasNextPage,
}: Props) => {
  return (
    <div className="w-full">
      <div className="py-4 flex justify-between items-center">
        <p className="text-lg font-semibold leading-normal tracking-tighter">
          <span className=" text-pink-main">{total}</span>
          개의 패키지 상품 검색 결과
        </p>
        <DropDownBox />
      </div>
      <PackagesList
        data={data}
        isFetching={isFetching}
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
      />
    </div>
  );
};

export default SearchResult;
