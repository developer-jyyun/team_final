import React from "react";

interface MyPicProductProps {
  title: string;
  imageUrl: string;
  hashtags: string[];
  price: number;
  lodgeDays: number;
  tripDays: number;
}

const MyPicProduct = ({
  title,
  imageUrl,
  hashtags,
  price,
  lodgeDays,
  tripDays,
}: MyPicProductProps) => {
  return (
    <div className="flex my-3 items-center justify-center w-[330px] relative">
      <div className="bg-grey-a rounded-lg mx-0 my-auto w-[115px]">
        <img src={imageUrl} alt="상품사진" className="w-[115px] h-[120px]" />
      </div>
      <div className="ml-[18px] w-[215px]">
        <h3 className="flex text-black-2 text-base font-medium truncate">
          {title.length > 12 ? `${title.substring(0, 12)}...` : title}
          <img
            src="/icons/likeActiveButtonIcon.svg"
            alt="하트"
            className="absolute right-0"
          />
        </h3>
        <div className="my-2.5 flex flex-wrap gap-1 max-w-[200px]">
          {hashtags.map((tag, index) => (
            <span
              key={index}
              className="text-black-4 text-[11px] font-normal py-1 px-1 border-[0.6px] border-black-6 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-2.5">
          <p className="text-red-1 text-xxs font-light">
            <b>{lodgeDays}</b>박 <b>{tripDays}</b>일
            <b className="ml-1 text-sm font-medium">{price}원</b>
          </p>
        </div>
        <button
          type="button"
          className="text-white text-xxs font-medium p-1.5 bg-custom-gradient-pink gap-2 rounded-[16px] absolute right-0 bottom-0"
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
