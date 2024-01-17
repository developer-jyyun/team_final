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

export interface DestinationItem {
  name: string;
  imageUrl: string;
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

export interface MyReview {
  packageId: number;
  reviewId: number;
  content: string;
  createdAt: string;
  averageStars: number;
  productScore: number;
  scheduleScore: number;
  guideScore: number;
  appointmentScore: number;
}

export interface Page {
  currentPage: number;
  totalPage: number;
  currentElements: number;
  totalElements: number;
}

export interface MyReviewData {
  packages: MyReview[];
  page: Page;
}
export interface MyOrderPackage {
  packageId: number;
  imageUrl: string;
  nationName: string;
  title: string;
  hashtags: string[];
  lodgeDays: number;
  tripDays: number;
  travelPeriod: string;
  isWish: boolean;
  reviewed: boolean;
}

export interface MyOrder {
  orderCode: string;
  availableDateId: number;
  package: MyOrderPackage;
}

export interface MyOrderList {
  data: MyOrder[];
  page: Page;
}
