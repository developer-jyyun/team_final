import React from "react";
import { CATEGORY_COLORS } from "@/app/constants";
import getConcepts from "@/api/search/getConcepts";
import type { ConceptItem } from "@/app/types";
import Concept from "./Concept";

const ConceptsList = async () => {
  const concepts = await getConcepts();
  return (
    <ul className="flex flex-wrap items-center justify-between gap-6">
      {concepts.data.map((concept: ConceptItem, idx: number) => {
        const bgColor =
          Math.floor(idx / 4) % 2
            ? CATEGORY_COLORS[(idx + 3) % 4]
            : CATEGORY_COLORS[idx % 4];
        return (
          <Concept key={concept.name} concept={concept} bgColor={bgColor} />
        );
      })}
    </ul>
  );
};

export default ConceptsList;
