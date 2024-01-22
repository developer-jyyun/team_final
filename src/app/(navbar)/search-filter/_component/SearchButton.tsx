"use client";

import Link from "next/link";
import React from "react";
import useSearchCount from "../_hooks/useSearchCount";

const SearchButton = () => {
  const { data, params } = useSearchCount();
  const count = data?.data.count;

  return (
    <button
      type="button"
      disabled={count !== 0}
      className={`h-12 w-[327px] ${
        count === 0 ? `bg-grey-e text-grey-8` : `bg-pink-main text-white`
      } rounded-[80px]`}
    >
      <Link href={`/search-result${params}`} className="w-full">
        <p className="font-medium text-lg">
          검색된 <span className="font-extrabold">{count}</span>개의 상품 보기
        </p>
      </Link>
    </button>
  );
};

export default SearchButton;
