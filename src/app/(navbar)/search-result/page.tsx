"use client";

import DefaultHeader from "@/app/_component/common/layout/DefaultHeader";
import { useSearchParams } from "next/navigation";
import SearchEmpty from "./_component/SearchEmpty";
import useKeywordResult from "./_hooks/useKeywordResult";
import SearchResult from "./_component/SearchResult";
import Options from "./_component/Options";
// import { PackagePages } from "./_component/SearchResult";
// import useHashtagResult from "./_hooks/useHashtagResult";

const SearchResultPage = () => {
  const params = useSearchParams();
  const keyword = params.get("keyword");

  const {
    data: keywordData,
    keywordDataFirst,
    keywordFetchNextPage,
    keywordHasNextPage,
    keywordIsFetching,
  } = useKeywordResult();
  // const { hashtagData } = useHashtagResult();

  // console.log(keywordData);
  // console.log(hashtagData);

  // if (keyword) {
  return (
    <div className="flex flex-col w-full">
      <DefaultHeader text="내가 원하는 여행 리스트" />
      <section className="w-full px-6 flex flex-col">
        <Options />
        {keywordDataFirst?.page.totalElements ? (
          <SearchResult
            data={keywordData}
            page={keywordDataFirst.page}
            fetchNextPage={keywordFetchNextPage}
            hasNextPage={keywordHasNextPage}
            isFetching={keywordIsFetching}
          />
        ) : (
          <SearchEmpty keyword={keyword} />
        )}
      </section>
    </div>
  );
  // }

  // return (
  //   <div className="flex flex-col w-full">
  //     <DefaultHeader text="내가 원하는 여행 리스트" />
  //     <section className="w-full px-6 flex flex-col">
  //       <Options />
  //       <SearchResult data={hashtagData?.data} page={hashtagData.page} />
  //     </section>
  //   </div>
  // );
};
export default SearchResultPage;
