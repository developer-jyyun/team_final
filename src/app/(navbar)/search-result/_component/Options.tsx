"use client";

import { useSearchParams } from "next/navigation";
import Option from "./Option";

const Options = () => {
  const params = useSearchParams();
  const keyword = params.get("keyword");
  const maxPrice = params.get("maxPrice") || null;
  const hashtags = params.get("hashtags")?.split(",") || [];
  const nations = params.get("nations")?.split(",") || [];
  const continents = params.get("continents")?.split(",") || [];

  const optionsArr = [keyword, maxPrice, ...hashtags, ...nations, ...continents]
    .filter((i) => i)
    .map((i) => {
      if (!Number.isNaN(Number(i))) {
        return `${i}만원 이하`;
      }
      return i;
    });

  return (
    <div className="flex flex-wrap gap-2 my-5">
      {optionsArr.map((tagName) => (
        <Option tagName={tagName} />
      ))}
    </div>
  );
};

export default Options;
