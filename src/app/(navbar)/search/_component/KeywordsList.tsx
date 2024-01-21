import getHashtags from "@/api/search/getHashtags";
import type { FetchResponse, HashtagNames } from "@/app/types";
import { MAX_NUM_OF_COL } from "@/app/constants";
import React from "react";
import Keyword from "./Keyword";

interface Props {
  start: number;
}

const KeywordsList = async ({ start }: Props) => {
  const hashtags: FetchResponse<HashtagNames> = await getHashtags();
  const items = hashtags.data?.hashtags.slice(start, start + MAX_NUM_OF_COL);

  return (
    <ul className="w-full px-4 flex flex-col justify-center items-start">
      {items?.map((hashtag: string, index) => (
        <Keyword key={hashtag} rank={start + index} data={hashtag} />
      ))}
    </ul>
  );
};

export default KeywordsList;
