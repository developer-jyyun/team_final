import { PackageInfo } from "@/app/types";
import Wish from "./Wish";

interface Props {
  data: PackageInfo[];
}

const WishesList = ({ data }: Props) => {
  return (
    <ul className={"flex flex-col gap-6"}>
      {data?.map((wish) => <Wish key={wish.packageId} data={wish} />)}
    </ul>
  );
};

export default WishesList;
