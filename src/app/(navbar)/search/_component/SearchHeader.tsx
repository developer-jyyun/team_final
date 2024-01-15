import React from "react";

const SearchHeader = () => {
  return (
    <header className="w-full h-12 py-1 px-6 mb-4 relative">
      <form className="w-full">
        <input
          type="text"
          className="box-border w-full h-10 px-4 py-2.5 bg-white-5 rounded-lg"
          placeholder="어떤 여행 상품을 찾으세요?"
        />
        <button type="button" className="size-6 absolute top-3 right-10">
          <img src="./icons/searchIcon.svg" alt="돋보기 아이콘" />
        </button>
      </form>
    </header>
  );
};

export default SearchHeader;
