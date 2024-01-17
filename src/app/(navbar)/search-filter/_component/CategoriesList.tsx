import getDestinations from "@/api/search/getDestinations";
import type { CategoryItem } from "@/app/types";
import Category from "./Category";

interface Props {
  type: "nation" | "continent";
}

const CategoriesList = async ({ type }: Props) => {
  const destinations = await getDestinations();

  return (
    <ul className="flex flex-wrap justify-between gap-4 mb-4">
      {destinations.data[type].map((item: CategoryItem) => (
        <Category data={item} />
      ))}
    </ul>
  );
};

export default CategoriesList;
