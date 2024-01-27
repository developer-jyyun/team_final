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
  const { addContinents, deleteContinents, addNations, deleteNations } =
    useSearchFilterStore();

  const handleClick = () => {
    if (type === "continents") {
      if (!selected) addContinents(data.name);
      if (selected) deleteContinents(data.name);
    }

    if (type === "nations") {
      if (!selected) addNations(data.name);
      if (selected) deleteNations(data.name);
    }
    setSelected((prev) => !prev);
  };
  return (
    <div className="w-[98px] web:w-[130px]" onClick={handleClick}>
      <div
        className={`w-full h-[100px] web:h-[130px] py-2.5 px-[9px] bg-grey-e rounded-[12px] flex justify-center items-center ${
          selected && "opacity-50"
        }`}
      >
        <img
          src={data.imageUrl}
          alt={`${data.name} 이미지`}
          className="w-20 h-20 web:w-24 web:h-24"
        />
      </div>
      <p className="text-base font-medium leading-5 tracking-tighter text-center py-2">
        {data.name}
      </p>
    </div>
  );
};

export default Destination;
