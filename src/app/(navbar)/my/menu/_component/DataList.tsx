import { FaqData, NoticeData } from "@/app/types";
import Link from "next/link";
import DataListItem from "./DataListItem";

interface Props {
  data?: (NoticeData | FaqData)[] | null;
  theme: string;
}

function getItemId(theme: string, item: NoticeData | FaqData): number {
  if (theme === "notice") {
    return (item as NoticeData).noticeId;
  } else if (theme === "faq") {
    return (item as FaqData).faqId;
  }
  return 0; // 기본값 설정
}

const DataList = ({ data, theme }: Props) => {
  if (data && data.length > 0) {
    return (
      <>
        {data.map((item) => (
          <Link
            key={`${item.id}-${item.title}`}
            href={`/my/menu/${theme}/${getItemId(theme, item)}`}
          >
            <DataListItem
              key={`${item.id}-${item.title}`}
              data={item}
              theme={theme}
            />
          </Link>
        ))}
      </>
    );
  } else {
    return null; // 데이터가 없는 경우 null 반환
  }

  /*   } else {
    return <p>작성된 게시물이 없습니다.</p>;
  } */
};

export default DataList;
