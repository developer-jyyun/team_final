import { PackageInfo, PackagesWithPage } from "@/app/types";
import DropDownBox from "./DropDownBox";
import PackagesList from "./PackagesList";

interface Props {
  data: PackagesWithPage<PackageInfo[]>;
}

const SearchResult = ({ data }: Props) => {
  return (
    <div className="w-full">
      <div className="py-4 flex justify-between items-center">
        <p className="text-lg font-semibold leading-normal tracking-tighter">
          <span className=" text-pink-main">{data?.page.totalElements}</span>
          개의 패키지 상품 검색 결과
        </p>
        <DropDownBox />
      </div>

      <PackagesList data={data?.packages} />
    </div>
  );
};

export default SearchResult;
