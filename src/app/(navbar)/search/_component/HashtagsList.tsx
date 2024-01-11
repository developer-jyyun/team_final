import getHashtags from "@/api/search/getHashtags";
import type { FetchResponse, HashtagNames } from "@/app/types";
import { MAX_NUM_OF_COL } from "@/app/constants";
import React from "react";
import Hashtag from "./Hashtag";

interface Props {
  start: number;
}

const HashtagsList = async ({ start }: Props) => {
  const hashtags: FetchResponse<HashtagNames> = await getHashtags();
  const items = hashtags.data?.hashtags.slice(start, start + MAX_NUM_OF_COL);

  return (
    <ul className="w-full px-4 flex flex-col justify-center items-start">
      {items?.map((hashtag: string, index) => (
        <Hashtag key={hashtag} rank={start + index} data={hashtag} />
      ))}
    </ul>
  );
};

export default HashtagsList;
