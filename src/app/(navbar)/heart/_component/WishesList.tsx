import { PackageInfo } from "@/app/types";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from "@tanstack/react-query";
import Wish from "./Wish";
import Skeleton from "../../my/_component/Skeleton";

interface Props {
  data: InfiniteData<any, unknown> | undefined;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined,
  ) => Promise<InfiniteQueryObserverResult<InfiniteData<any, unknown>, Error>>;
  hasNextPage: boolean;
  isFetching: boolean;
}

const WishesList = ({
  data,
  fetchNextPage,
  hasNextPage,
  isFetching,
}: Props) => {
  const lastElementRef = useInfiniteScroll(
    fetchNextPage,
    isFetching,
    hasNextPage,
  );

  return (
    <>
      {data?.pages.map((page, pageIndex) => {
        return (
          <ul key={pageIndex} className={"flex flex-col"}>
            {page.data.map((wish: PackageInfo, index: number) => (
              <Wish key={wish.packageId + index} data={wish} />
            ))}
          </ul>
        );
      })}

      <li ref={lastElementRef} className="w-full bg-white list-none">
        {isFetching && [0, 1, 2].map((i) => <Skeleton key={i} />)}
      </li>
    </>
  );
};

export default WishesList;
