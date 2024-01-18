import getDestinations from "@/api/search/getDestinations";
import type { DestinationItem } from "@/app/types";
import Destination from "./Destination";

interface Props {
  type: "nation" | "continent";
}

const DestinationsList = async ({ type }: Props) => {
  const destinations = await getDestinations();

  return (
    <ul className="flex flex-wrap justify-between gap-4 mb-4">
      {destinations.data[type].map((item: DestinationItem) => (
        <Destination key={item.name} data={item} />
      ))}
    </ul>
  );
};

export default DestinationsList;
