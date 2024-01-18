import Link from "next/link";
import React from "react";

interface Props {
  disabled: boolean;
  children: React.ReactNode;
}
const SearchButton = ({ disabled, children }: Props) => {
  return (
    <button
      type="button"
      disabled={disabled}
      className={`h-12 w-[327px] ${
        disabled ? `bg-grey-e text-grey-8` : `bg-pink-main text-white`
      } rounded-[80px]`}
    >
      <Link href={`/search-result`} className="w-full">
        {children}
      </Link>
    </button>
  );
};

export default SearchButton;
