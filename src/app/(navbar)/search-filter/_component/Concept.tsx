"use client";

import type { ConceptItem } from "@/app/types";
import useSearchFilterStore from "@/store/useSearchFilterStore";
import { useState } from "react";

interface Props {
  concept: ConceptItem;
  bgColor: string;
}

const Concept = ({ concept, bgColor }: Props) => {
  const [selected, setSelected] = useState(false);
  const { setConcepts } = useSearchFilterStore();

  const handleClick = () => {
    setConcepts(concept.name);
    setSelected((prev) => !prev);
  };
  return (
    <div
      onClick={handleClick}
      className={`flex justify-center items-center gap-5 h-20 w-[150px] rounded-lg ${
        selected && "opacity-50"
      }`}
      style={{ backgroundColor: bgColor }}
    >
      <img
        className="w-8 h-8"
        src={concept.imageUrl}
        alt={`${concept.name} 이미지`}
      />
      <p className="flex items-center whitespace-pre-line w-14 h-[42px] text-black text-base font-medium leading-5 tracking-tighter">
        {concept.name.replace("/", "\n")}
      </p>
    </div>
  );
};

export default Concept;
