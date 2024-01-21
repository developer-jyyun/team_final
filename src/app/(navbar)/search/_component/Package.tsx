"use client";

import LikeButton from "@/app/_component/common/atom/LikeButton";
import type { PackageInfo } from "@/app/types";
import { useRouter } from "next/navigation";
import Hashtag from "./Hashtag";

interface Props {
  data: PackageInfo;
}

const Package = ({ data }: Props) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/items/${data.packageId}`);
  };

  return (
    <div className="inline-block mr-3" onClick={handleClick}>
      <div className="w-[158px] relative">
        <img
          className="h-[180px] w-full object-cover rounded-[12px]"
          src={data.imageUrl}
          alt={data.title}
        />
        <LikeButton id={data.packageId} isWish={data.isWish} />
      </div>
      <div className="w-[158px] flex flex-col justify-between gap-1">
        <p className="w-full text-lg font-semibold truncate overflow-hidden">
          {data.title}
        </p>
        <div className="flex gap-1">
          {data.hashtags.slice(0, 3).map((hashtag) => (
            <Hashtag key={hashtag} tagName={hashtag} />
          ))}
        </div>
        <div className="text-sm text-black-2 font-extrabold">
          {`${data.minPrice.toLocaleString()}원~`}
        </div>
      </div>
    </div>
  );
};

export default Package;
