import getHashtags from "@/api/search/getHashtags";
import type { FetchResponse, HashtagNames } from "@/app/types";
import React from "react";
import Hashtag from "./Hashtag";

interface Props {
  start: number;
}

const HashtagsList = async ({ start }: Props) => {
  const hashtags: FetchResponse<HashtagNames> = await getHashtags();
  const items = hashtags.data?.hashtags.slice(start, start + 5);

  return (
    <ul className="w-full px-4 flex flex-col justify-center items-start">
      {items?.map((hashtag: string, index) => (
        <Hashtag key={hashtag} rank={start + index} data={hashtag} />
      ))}
    </ul>
  );
};

export default HashtagsList;
