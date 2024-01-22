// 데이터 패칭
export interface FetchResponse<T> {
  code: number;
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

export interface PackageInfo {
  packageId: number;
  imageUrl: string;
  nationName: string;
  title: string;
  hashtags: string[];
  minPrice: number;
  lodgeDays: number;
  tripDays: number;
  isWish: boolean;
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

export interface ScheduleInfo {
  day: number;
  schedule: string[];
  breakfast: string;
  lunch: string;
  dinner: string;
}

export interface PackageReview {
  reviewId: number;
  content: string;
  createdAt: string;
  averageStars: number;
  productScore: number;
  scheduleScore: number;
  guideScore: number;
  appointmentScore: number;
}

// mypage
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

export interface ListItemProps {
  text?: string;
  link?: string;
  theme?: string;
  iconSrc?: string;
  onClickFn?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export interface CommonListData {
  id: number;
  title: string;
  createdAt: string;
  categories: string[];
}

export interface NoticeData extends CommonListData {
  noticeId: number;
}

export interface FaqData extends CommonListData {
  faqId: number;
}

// balance

export interface PollsTrue {
  alreadySubmitted: boolean;
}

export interface PollsFalse {
  alreadySubmitted: boolean;
  subject: string;
  pollId: number;
  A: string[];
  B: string[];
}

export interface AdvertisementItem {
  adId: number;
  imageUrl: string;
}
