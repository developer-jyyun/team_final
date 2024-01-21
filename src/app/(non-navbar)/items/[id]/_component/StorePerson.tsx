"use client";

import DetailTypography from "./DetailTypography";

interface Props {
  text: string;
  subText: string;
  store: number;
  price: number;
  setStore: React.Dispatch<React.SetStateAction<number>>;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
}

const StorePerson = ({
  text,
  subText,
  store,
  price,
  setStore,
  setTotalPrice,
}: Props) => {
  const handleClickPlus = () => {
    if (store < 10) {
      setStore((prev) => prev + 1);
      setTotalPrice((prev) => prev + price);
    }
  };

  const handleClickMinus = () => {
    if (text === "성인" && store > 1) {
      setStore((prev) => prev - 1);
      setTotalPrice((prev) => prev - price);
    } else if (text !== "성인" && store > 0) {
      setStore((prev) => prev - 1);
      setTotalPrice((prev) => prev - price);
    }
  };

  return (
    <div className="flex items-end justify-between mb-5">
      <div>
        <div className="flex items-end">
          <DetailTypography color={6} size={10} bold={500}>
            {text}
          </DetailTypography>
          <DetailTypography color={"a"} size={10} styleClass="mb-[1px] ml-1">
            {subText}
          </DetailTypography>
        </div>
        <DetailTypography size={14} bold={600}>
          {price.toLocaleString()}원
        </DetailTypography>
      </div>
      <div className="flex">
        <button type="button" onClick={handleClickMinus}>
          <img src="/icons/minusIcon.svg" alt="빼기" className="web:w-7" />
        </button>
        <div className="flex items-center justify-center w-12">
          <DetailTypography color={1} size={16}>
            {store}
          </DetailTypography>
        </div>

        <button type="button" onClick={handleClickPlus}>
          <img src="/icons/plusIcon.svg" alt="더하기" className="web:w-7" />
        </button>
      </div>
    </div>
  );
};

export default StorePerson;
