import LikeButton from "@/app/_component/common/atom/LikeButton";
import Tag from "@/app/_component/common/atom/Tag";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

interface Props {
  title: string;
  imageUrl: string;
  hashtags: string[];
  price: number;
  lodgeDays: number;
  tripDays: number;
  id: number;
  statusA?: boolean;
  statusB?: boolean;
  setIsCompareComplete: React.Dispatch<React.SetStateAction<boolean>>;
  setCompareIndex: React.Dispatch<React.SetStateAction<number>>;
}

const MyPicProduct = ({
  title,
  imageUrl,
  hashtags,
  price,
  lodgeDays,
  tripDays,
  id,
  statusA = false,
  statusB = true,
  setIsCompareComplete,
  setCompareIndex,
}: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCompare = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    const lid = searchParams.get("lid");
    const rid = searchParams.get("rid");
    setIsCompareComplete(false);

    if (statusA) {
      router.replace(`/compare?lid=${id}&rid=${rid}`);
    }
    if (statusB) {
      router.replace(`/compare?lid=${lid}&rid=${id}`);
    }

    setCompareIndex(0);
  };

  return (
    <Link href={`/items/${id}`} className="w-full my-3 h-[90px] flex gap-4">
      <div className="w-[90px] h-full rounded-[12px] overflow-hidden">
        <Image
          width={100}
          height={100}
          src={imageUrl}
          alt="상품사진"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-[10px] w-[156px]">
        <div>
          <p className="w-full truncate text-lg font-medium text-black-2">
            {title}
          </p>
        </div>
        <div className="flex gap-2">
          {hashtags
            .sort((prev, next) => prev.length - next.length)
            .slice(0, 3)
            .map((tag) => (
              <Tag key={tag} tagName={tag} />
            ))}
        </div>
        <p className="text-red-1 text-xxs font-light">
          {lodgeDays}박{tripDays}일
          <span className="ml-1 text-sm font-medium">
            {price.toLocaleString()}원
          </span>
        </p>
      </div>
      <div className="relative w-[51px]">
        <LikeButton id={id} isWish />
        <button
          type="button"
          onClick={handleCompare}
          className="w-full text-center h-[41px] text-white text-xxs font-medium p-2 leading-3 tracking-tighter bg-custom-gradient-pink gap-2 rounded-[12px] absolute bottom-0 right-0"
        >
          1:1
          <br />
          비교하기
        </button>
      </div>
    </Link>
  );
};

export default MyPicProduct;
