// 데이터 패칭
export interface FetchResponse<T> {
  code: string;
  data?: T;
}

// search 페이지 관련 데이터
export interface HashtagItem {
  name: string;
  searchedCount: number;
  rank: number;
}

// mypage
export interface ListItemProps {
  title: string;
  link?: string;
  category?: string[];
  date?: string;
  theme?: "menu" | "notice" | "faq";
  iconSrc?: string;
  onClickFn?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
