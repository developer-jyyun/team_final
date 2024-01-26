import LikeButton from "@/app/_component/common/atom/LikeButton";
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
  isWish?: boolean;
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
  isWish = true,
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
    <Link href={`/items/${id}`} className="flex my-3 relative">
      <div className="bg-grey-a rounded-lg w-[90px] h-[90px] web:w-[135px] web:h-[135px] overflow-hidden">
        <Image
          width={100}
          height={100}
          src={imageUrl}
          alt="상품사진"
          className="w-[90px] h-[90px] web:w-[135px] web:h-[135px] object-cover"
        />
      </div>
      <div className="ml-[18px] w-[200px]">
        <div>
          <p className="flex text-black-2 text-base web:text-xl font-medium truncate object-cover web:mb-6">
            {title.length > 12 ? `${title.substring(0, 12)}...` : title}
          </p>
        </div>
        <div className="my-2.5 flex flex-wrap gap-1 max-w-[200px] web:mb-6">
          {hashtags
            .sort((prev, next) => prev.length - next.length)
            .slice(0, 2)
            .map((tag, index) => (
              <span
                key={index}
                className="text-black-4 text-[11px] font-normal py-1 px-2 border-[0.6px] border-black-6 rounded-[39px]"
              >
                {tag}
              </span>
            ))}
        </div>
        <p className="text-red-1 text-xxs web:text-base font-lightt">
          {lodgeDays}박{tripDays}일
          <span className="ml-1 text-sm web:text-lg font-semibold">
            {price.toLocaleString()}원
          </span>
        </p>
      </div>
      <div className="grow" />
      <div className="relative w-[51px]">
        <LikeButton id={id} isWish={isWish as boolean} />
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
