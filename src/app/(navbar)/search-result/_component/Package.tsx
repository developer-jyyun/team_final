import type { PackageInfo } from "@/app/types";

interface Props {
  data: PackageInfo;
}
const Package = ({ data }: Props) => {
  return <div>{data.title}</div>;
};

export default Package;
