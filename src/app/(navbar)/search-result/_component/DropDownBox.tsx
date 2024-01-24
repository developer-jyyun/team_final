"use client";

import { useState } from "react";
import { SORT_OPTIONS } from "@/app/constants";
import { useRouter, useSearchParams } from "next/navigation";
import DropDownOption from "./DropDownOption";

const DropDownBox = () => {
  const [selected, setSelected] = useState("출발일순");
  const [showOptions, setShowOptions] = useState(false);

  const params = useSearchParams();
  const router = useRouter();

  const handleClick = () => {
    setShowOptions((prev) => !prev);
  };

  const handleSelect = (value: string, option: string) => {
    setSelected(value);
    setShowOptions(false);

    const oldParams = params.toString();

    if (!params.get("sortBy")) {
      router.replace(`/search-result?${oldParams}&sortBy=${option}`);
    } else {
      const newParams = oldParams.split("&sortBy=")[0];
      router.replace(`/search-result?${newParams}&sortBy=${option}`);
    }
  };
  return (
    <div className="relative inline-block text-left z-10">
      <button
        onClick={handleClick}
        type="button"
        className="flex items-center font-normal py-2 px-4 text-xs text-black-4 focus:outline-none focus:shadow-outline"
      >
        <p>{selected}</p>
        <img
          src="/icons/rightArrowIcon.svg"
          alt="더보기"
          className="transition-transform duration-300 ease-in-out"
          style={
            showOptions
              ? { transform: "rotate(-90deg)" }
              : { transform: "rotate(90deg)" }
          }
        />
      </button>
      {showOptions && (
        <div className="origin-top-right absolute right-0 mt-2 w-32 rounded-md overflow-hidden shadow-lg">
          {Object.entries(SORT_OPTIONS).map(([key, value]) => (
            <DropDownOption
              key={key}
              value={value}
              option={key}
              handleSelect={handleSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDownBox;
