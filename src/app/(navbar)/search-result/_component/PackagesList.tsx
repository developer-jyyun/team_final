import type { PackageInfo } from "@/app/types";
import type {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from "@tanstack/react-query";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import Package from "./Package";

interface Props {
  data: InfiniteData<any, unknown> | undefined;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined,
  ) => Promise<InfiniteQueryObserverResult<InfiniteData<any, unknown>, Error>>;
  hasNextPage: boolean;
  isFetching: boolean;
}

const PackagesList = ({
  data,
  fetchNextPage,
  isFetching,
  hasNextPage,
}: Props) => {
  const lastElementRef = useInfiniteScroll(
    fetchNextPage,
    isFetching,
    hasNextPage,
  );

  return (
    <>
      {data?.pages.map((item, index) => (
        <div key={index} className="flex flex-wrap justify-between">
          {item.data.map((value: PackageInfo, index2: number) => {
            return <Package key={index2} data={value} />;
          })}
        </div>
      ))}
      <li
        ref={lastElementRef}
        className="w-full text-center text-black-6 h-20 list-none"
      >
        {isFetching && <div>loading..🎈</div>}
      </li>
    </>
  );
};

export default PackagesList;
