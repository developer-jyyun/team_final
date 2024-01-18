import { CommonListData } from "@/app/types";
import DataListItem from "./DataListItem";

interface Props {
  data?: CommonListData[] | null;
  theme: string;
}

const DataList = ({ data, theme }: Props) => {
  if (data && data.length > 0) {
    return (
      <>
        {data.map((item) => (
          <DataListItem
            key={`${item.id}-${item.title}`}
            data={item}
            theme={theme}
          />
        ))}
      </>
    );
  } else {
    return <p>작성된 게시물이 없습니다.</p>;
  }
};

export default DataList;
