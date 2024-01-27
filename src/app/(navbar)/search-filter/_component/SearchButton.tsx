"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import useScrollUp from "@/hooks/useScrollUp";
import useSearchCount from "../_hooks/useSearchCount";

const SearchButton = () => {
  const { data, params } = useSearchCount();
  const count = data?.data.count;

  const isScrollUp = useScrollUp();
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      setIsScrolling(true);

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const setPosition = () => {
    if (isScrollUp || !isScrolling) return "60px";
    return "4px";
  };

  return (
    <div
      className={`sticky w-full flex justify-center`}
      style={{ bottom: setPosition() }}
    >
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
    </div>
  );
};

export default SearchButton;
