import { PackageInfo } from "@/app/types";
import type {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from "@tanstack/react-query";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import Package from "./Package";

interface Props {
  data: PackageInfo[];
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
      <div className="flex flex-wrap justify-between">
        {data?.map((item: PackageInfo) => (
          <Package key={item.packageId} data={item} />
        ))}
      </div>
      <li ref={lastElementRef} className="w-full h-20 list-none">
        {isFetching && <div>loading..🎈</div>}
      </li>
    </>
  );
};

export default PackagesList;
