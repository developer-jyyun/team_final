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

  // let optionsStr = `?maxPrice=${maxPrice}`;
  // if (hashtags) optionsStr += `&hashtags=${hashtags}`;
  // if (nations) optionsStr += `&nations=${nations}`;
  // if (continents) optionsStr += `&continents=${continents}`;

  const customOptionsArr = Object.entries(initialOptionsObj)
    .filter(([, value]) => value && value.length > 0)
    .map(([key, value]) => {
      if (key === "maxPrice") {
        return [key, [`${value}만원 이하`]];
      }
      return [key, value];
    });

  // const updateOptions = (selected: string) => {
  //   setOptionsArr(initialOptionsArr.filter((item) => item !== selected));
  // };

  return { customOptionsArr };
};

export default useOptions;
