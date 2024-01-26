"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchHeader = () => {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value.trim());
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (keyword) router.push(`/search-result?keyword=${keyword}`);
  };

  return (
    <header className="w-full h-12 py-1 px-6 mb-4 relative">
      <form className="w-full" onSubmit={handleSubmit}>
        <input
          type="text"
          className="box-border w-full h-10 px-4 py-2.5 bg-white-5 rounded-lg"
          placeholder="어떤 여행 상품을 찾으세요?"
          value={keyword}
          onChange={handleChange}
        />
        <button type="submit" className="size-6 absolute top-3 right-10">
          <img src="./icons/searchIcon.svg" alt="돋보기 아이콘" />
        </button>
      </form>
    </header>
  );
};

export default SearchHeader;
