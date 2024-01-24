"use client";

import type { DestinationItem } from "@/app/types";
import useSearchFilterStore from "@/store/useSearchFilterStore";
import { useState } from "react";

interface Props {
  data: DestinationItem;
  type: "nations" | "continents";
}

const Destination = ({ data, type }: Props) => {
  const [selected, setSelected] = useState(false);
  const { setContinents, setNations } = useSearchFilterStore();

  const handleClick = () => {
    if (type === "continents") setContinents(data.name);
    if (type === "nations") setNations(data.name);
    setSelected((prev) => !prev);
  };
  return (
    <div className="w-[98px]" onClick={handleClick}>
      <div
        className={`w-full h-[100px] py-2.5 px-[9px] bg-grey-e rounded-[12px] ${
          selected && "opacity-50"
        }`}
      >
        <img
          src={data.imageUrl}
          alt={`${data.name} 이미지`}
          className="w-20 h-20"
        />
      </div>
      <p className="text-base font-medium leading-5 tracking-tighter text-center py-2">
        {data.name}
      </p>
    </div>
  );
};

export default Destination;
