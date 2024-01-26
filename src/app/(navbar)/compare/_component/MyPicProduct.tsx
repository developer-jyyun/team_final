import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

interface MyPicProductProps {
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
}: MyPicProductProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleCompare = () => {
    const lid = searchParams.get("lid");
    const rid = searchParams.get("rid");
    setIsCompareComplete(false);
    console.log(hashtags);
    if (statusA) {
      router.replace(`/compare?lid=${id}&rid=${rid}`);
    }
    if (statusB) {
      router.replace(`/compare?lid=${lid}&rid=${id}`);
    }

    setCompareIndex(0);
  };

  return (
    <div className="flex my-3 relative">
      <div className="bg-grey-a rounded-lg w-[90px] h-[90px] web:w-[145px] web:h-[145px] overflow-hidden">
        <img
          src={imageUrl}
          alt="상품사진"
          className="w-[90px] h-[90px] web:w-[145px] web:h-[145px]"
        />
      </div>
      <div className="ml-[18px] w-[215px]">
        <h3 className="flex text-black-2 text-base web:text-xl font-medium truncate object-cover web:mb-6">
          {title.length > 12 ? `${title.substring(0, 12)}...` : title}
          <img
            src="/icons/likeActiveButtonIcon.svg"
            alt="하트"
            className="absolute top-0 right-0 web:w-8"
          />
        </h3>
        <div className="my-2.5 flex flex-wrap gap-1 max-w-[200px] web:mb-6">
          <span className="text-black-4 text-[11px] font-normal py-1 px-2 border-[0.6px] border-black-6 rounded-[39px]">
            {hashtags[0]}
          </span>
          <span className="text-black-4 text-[11px] font-normal py-1 px-2 border-[0.6px] border-black-6 rounded-[39px]">
            {hashtags[1]}
          </span>
        </div>
        <div className="mt-2.5">
          <p className="text-red-1 text-xxs web:text-base font-light">
            <b>{lodgeDays}</b>박 <b>{tripDays}</b>일
            <b className="ml-1 text-sm web:text-lg font-semibold">{price}원</b>
          </p>
        </div>
        <button
          type="button"
          className="text-white text-xxs font-medium p-1.5 web:p-3 bg-custom-gradient-pink gap-2 rounded-[16px] absolute right-0 bottom-0"
          onClick={handleCompare}
        >
          1:1
          <br />
          비교하기
        </button>
      </div>
    </div>
  );
};

export default MyPicProduct;
