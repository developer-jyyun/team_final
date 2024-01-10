import getHashtags from "@/api/search/getHashtags";
import { FetchResponse, HashtagItem } from "@/app/types";
import React from "react";
import Hashtag from "../atom/Hashtag";

const HashtagsContainer = async () => {
  const hashtags: FetchResponse<HashtagItem[]> = await getHashtags();

  return (
    <section className="w-full flex flex-wrap gap-2 justify-between">
      {hashtags.data?.map((hashtag: HashtagItem) => <Hashtag data={hashtag} />)}
    </section>
  );
};

export default HashtagsContainer;
