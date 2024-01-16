// 데이터 패칭
export interface FetchResponse<T> {
  code: string;
  data?: T;
}

// search 페이지 관련 데이터
export interface HashtagNames {
  hashtags: string[];
}

export interface ConceptItem {
  name: string;
  imageUrl: string;
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

// schdule

export interface DateInfo {
  availableDateId: number;
  date: string;
  adultPrice: number;
  lodgeDays: number;
  tripDays: number;
}

export interface ScheduleResponseData {
  code: number;
  data: DateInfo[];
}

// items

export interface DateTime {
  date: string;
  dayOfWeek: string;
  time: string;
}

export interface Price {
  adult: number;
  infant: number;
  baby: number;
}

export interface Reservation {
  current: number;
  remain: number;
  min: number;
}

export interface InclusionExclusion {
  title: string;
  description: string;
}

export interface PackageResponseData {
  packageId: number;
  hashtags: string[];
  departureDatetime: DateTime;
  endDatetime: DateTime;
  imageUrls: string[];
  nationName: string;
  continentName: string;
  title: string;
  averageStars: number;
  totalPrice: Price;
  reservation: Reservation;
  transporation: string;
  info: string[];
  introImageUrls: string[];
  inclusionList: InclusionExclusion[];
  exclusionList: InclusionExclusion[];
  lodgeDays: number;
  tripDays: number;
  reviewCount: number;
  myInfo: {
    username: string;
    email: string;
    phone: string;
  };
  isWish: boolean;
}
