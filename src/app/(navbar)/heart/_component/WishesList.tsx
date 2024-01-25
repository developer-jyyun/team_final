import { PackageInfo } from "@/app/types";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from "@tanstack/react-query";
import Wish from "./Wish";

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
          <ul key={pageIndex} className={"flex flex-col gap-6"}>
            {page.data.map((wish: PackageInfo, index: number) => (
              <Wish key={wish.packageId + index} data={wish} />
            ))}
          </ul>
        );
      })}

      <li
        ref={lastElementRef}
        className="w-full text-center text-black-6 h-20 list-none"
      >
        {isFetching && <div>loading..🎈</div>}
      </li>
    </>
  );
};

export default WishesList;
