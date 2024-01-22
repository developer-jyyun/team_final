import { PackageInfo } from "@/app/types";
import Package from "./Package";

interface Props {
  data: PackageInfo[];
}

const PackagesList = ({ data }: Props) => {
  return (
    <div>
      {data?.map((item: PackageInfo) => (
        <Package key={item.packageId} data={item} />
      ))}
    </div>
  );
};

export default PackagesList;
