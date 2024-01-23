"use client";

import { useSearchParams } from "next/navigation";

const useOptions = () => {
  const params = useSearchParams();

  const keyword = params.get("keyword")?.split(",") || [];
  const maxPrice = params.get("maxPrice")?.split(",") || [];
  const hashtags = params.get("hashtags")?.split(",") || [];
  const nations = params.get("nations")?.split(",") || [];
  const continents = params.get("continents")?.split(",") || [];

  const initialOptionsObj = {
    keyword: [...keyword],
    maxPrice: [...maxPrice],
    hashtags: [...hashtags],
    nations: [...nations],
    continents: [...continents],
  };

  const customOptionsArr = Object.entries(initialOptionsObj)
    .filter(([, value]) => value && value.length > 0)
    .map(([key, value]) => {
      if (key === "maxPrice") {
        return [key, [`${value}만원 이하`]];
      }
      return [key, value];
    });

  const updateOptions = (selected: string) => {
    const newCustomOptionsArr = customOptionsArr
      .map(([key, values]) => [
        key,
        Array.isArray(values) && values.filter((value) => value !== selected),
      ])
      .filter(([, value]) => value && value.length > 0)
      .map(([key, value]) => {
        if (key === "maxPrice") {
          return [key, [value.toString().replaceAll(/[^0-9]/g, "")]];
        }
        return [key, value];
      });

    let newParams = "?";
    newCustomOptionsArr.forEach(([key, values], idx) => {
      newParams += `${key}=${Array.isArray(values) && values?.join()}${
        idx === newCustomOptionsArr.length - 1 ? "" : "&"
      }`;
    });
    return newParams;
  };

  return { customOptionsArr, updateOptions };
};

export default useOptions;
