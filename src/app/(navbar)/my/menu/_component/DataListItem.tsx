import { CommonListData } from "@/app/types";
import Chip from "../../_component/Chip";

interface Props {
  data: CommonListData;
  theme: string;
}
const DataListItem = ({ data, theme = "notice" }: Props) => {
  const listTitleClass =
    "w-full flex p-4 rounded-[10px] bg-grey-e flex-col gap-2 items-between justify-center bg-opacity-20";

  return (
    <li className={listTitleClass}>
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <Chip chipData={data?.categories} borderColor="border-black-6" />
        </div>

        {theme === "notice" && (
          <span className="text-[10px] text-black-4">{data?.createdAt}</span>
        )}
      </div>
      {theme === "notice" && (
        <p className="text-black-2 font-semibold leading-[22px] truncate">
          {data?.title}
        </p>
      )}
      {theme === "faq" && (
        <p className="before:content-['Q.'] before:mr-1.5  leading-[22px] text-black-2 font-semibold truncate">
          {data?.title}
        </p>
      )}
    </li>
  );
};

export default DataListItem;
