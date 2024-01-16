import React from "react";
import { CATEGORY_COLORS } from "@/app/constants";
import Concept from "./Concept";

const dummy = [
  {
    name: "자연",
    imageUrl:
      "https://i.pinimg.com/564x/c7/f3/13/c7f31359d0e2717a54f7bd115b1d146d.jpg",
  },
  {
    name: "휴양/레저",
    imageUrl:
      "https://i.pinimg.com/564x/c7/f3/13/c7f31359d0e2717a54f7bd115b1d146d.jpg",
  },
  {
    name: "문화/역사",
    imageUrl:
      "https://i.pinimg.com/564x/c7/f3/13/c7f31359d0e2717a54f7bd115b1d146d.jpg",
  },
  {
    name: "체험/액티비티",
    imageUrl:
      "https://i.pinimg.com/564x/c7/f3/13/c7f31359d0e2717a54f7bd115b1d146d.jpg",
  },
  {
    name: "건강/웰니스",
    imageUrl:
      " https://i.pinimg.com/564x/c7/f3/13/c7f31359d0e2717a54f7bd115b1d146d.jpg",
  },
  {
    name: "스포츠/골프",
    imageUrl:
      "https://i.pinimg.com/564x/c7/f3/13/c7f31359d0e2717a54f7bd115b1d146d.jpg",
  },
  {
    name: "쇼핑",
    imageUrl:
      "https://i.pinimg.com/564x/c7/f3/13/c7f31359d0e2717a54f7bd115b1d146d.jpg",
  },
  {
    name: "로컬",
    imageUrl:
      "https://i.pinimg.com/564x/c7/f3/13/c7f31359d0e2717a54f7bd115b1d146d.jpg",
  },
  {
    name: "다이닝/미식",
    imageUrl:
      "https://i.pinimg.com/564x/c7/f3/13/c7f31359d0e2717a54f7bd115b1d146d.jpg",
  },
  {
    name: "허니문",
    imageUrl:
      "https://i.pinimg.com/564x/c7/f3/13/c7f31359d0e2717a54f7bd115b1d146d.jpg",
  },
];
const ConceptsList = () => {
  return (
    <ul className="flex flex-wrap items-center justify-between gap-6">
      {dummy.map((concept, idx) => {
        const bgColor = `bg-[${CATEGORY_COLORS[idx % 4]}]`;
        return (
          <Concept key={concept.name} concept={concept} bgColor={bgColor} />
        );
      })}
    </ul>
  );
};

export default ConceptsList;
