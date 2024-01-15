"use client";

import { useState } from "react";
import DetailBottomButton from "./DetailBottomButton";
import DetailMoreButton from "./DetailMoreButton";

const ItemDetailBottom = () => {
  const [viewMore, setViewMore] = useState(false);

  const getNavStyle = () => {
    if (viewMore) return "";
    else return "fixed bottom-0 web:w-[500px]";
  };

  return (
    <div className={`${getNavStyle()} w-full`}>
      {viewMore || <DetailMoreButton setViewMore={setViewMore} />}
      <DetailBottomButton />
    </div>
  );
};

export default ItemDetailBottom;
