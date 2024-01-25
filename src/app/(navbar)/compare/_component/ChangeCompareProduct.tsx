import DetailMoreButton from "@/app/(non-navbar)/items/[id]/_component/DetailMoreButton";
import Button from "@/app/_component/common/atom/Button";
import usePackageDetailQuery from "@/hooks/query/usePackageDetailQuery";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import LeftProductSummary from "./LeftProductSummary";
import LeftProgressBar from "./LeftProgressBar";
import MyPicProduct from "./MyPicProduct";
import RightProductSummary from "./RightProductSummary";
import RightProgressBar from "./RightProgressBar";
import SectionMargin from "./SectionMargin";

interface Product {
  // packageId: number;
  title: string;
  imageUrl: string;
  price: number;
  hashtags: string[];
  lodgeDays: number;
  tripDays: number;
}

interface CompareProduct {
  hashtags: string[];
  imageUrl: string;
  isWish: false;
  lodgeDays: number;
  minPrice: number;
  nationName: string;
  packageId: number;
  title: string;
  tripDays: number;
}

interface Props {
  products: CompareProduct[];
  compared: CompareProduct;
  compareIndex: number;
  onChangeA: () => void;
  onChangeB: () => void;
  // setCurrentItem: React.Dispatch<React.SetStateAction<CompareProduct | null>>;
  setIsCompareComplete: React.Dispatch<React.SetStateAction<boolean>>;
  // currentItem: CompareProduct | null;
  setCompareIndex: React.Dispatch<React.SetStateAction<number>>;
}

interface ScheduleItem {
  day: number;
  schedule: string[];
  breakfast: string;
  lunch: string;
  dinner: string;
}

interface Package {
  title: string;
  imageUrl: string;
  price: number;
  hotelStars: number;
  shoppingCount: number;
  purchasedCount: number;
  hashtags: string[];
  lodgeDays: number;
  tripDays: number;
  averageStars: number;
  reviewCount: number;
  reservationCount: number;
  minReservationCount: number;
  schedules: ScheduleItem[];
}

interface ApiResponse {
  code: number;
  data: {
    fixedPackage: Package;
    comparePackage: Package;
    schedules: ScheduleItem[];
    similarProducts: CompareProduct[];
  };
}

const fetchPackageData = async (
  fixedPackageId: number,
  comparePackageId: number,
): Promise<ApiResponse> => {
  const endpoint = `https://api.winnerone.site/v1/packages/compare`;
  const url = `${endpoint}?fixedPackageId=${fixedPackageId}&comparePackageId=${comparePackageId}`;

  try {
    const response = await fetch(url, {
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const result: ApiResponse = await response.json();
    return result;
  } catch (error) {
    console.error("Failed to fetch package data:", error);
    throw error;
  }
};

// const fetchSimilarProducts = async (
//   fixedPackageId: number,
// ): Promise<CompareProduct[]> => {
//   const url = `https://api.winnerone.site/v1/packages/similar-packages?fixedPackageId=${fixedPackageId}`;

//   const response = await fetch(url, {
//     credentials: "include",
//   });

//   if (!response.ok) {
//     throw new Error(`Error: ${response.status}`);
//   }

//   const result = await response.json();
//   return result.data;
// };

const ChangeCompareProduct = ({
  products,
  onChangeA,
  onChangeB,
  compareIndex,
  compared,
  // setCurrentItem,
  setIsCompareComplete,
  // currentItem,
  setCompareIndex,
}: Props) => {
  const searchParam = useSearchParams();

  const { data: packageDetail } = usePackageDetailQuery({
    id: searchParam.get("lid") as string,
    date: null,
    start: true,
  });

  const [, setViewMore] = useState(false);
  const [leftRating] = useState(5);
  const [rightRating, setRightRating] = useState<number>(3);
  const isLeftLower = leftRating < rightRating;
  const isRightLower = rightRating < leftRating;
  const [priceLeft, setPriceLeft] = useState<number | null>(null);
  const [priceRight, setPriceRight] = useState<number | null>(null);
  const [packageData, setPackageData] = useState<ApiResponse | null>(null);
  const [leftHotelStars, setLeftHotelStars] = useState<number | null>(null);
  const [rightHotelStars, setRightHotelStars] = useState<number | null>(null);
  const [leftShoppingCount, setLeftShoppingCount] = useState<number | null>(
    null,
  );
  const [rightShoppingCount, setRightShoppingCount] = useState<number | null>(
    null,
  );
  const [leftPurchasedCount, setLeftPurchasedCount] = useState<number | null>(
    null,
  );
  const [rightPurchasedCount, setRightPurchasedCount] = useState<number | null>(
    null,
  );
  const [leftImageUrl, setLeftImageUrl] = useState<string | null>(null);
  const [rightImageUrl, setRightImageUrl] = useState<string | null>(null);
  const [leftHashtags, setLeftHashtags] = useState<string[]>([]);
  const [rightHashtags, setRightHashtags] = useState<string[]>([]);
  const [leftLodgeDays, setLeftLodgeDays] = useState<number>(0);
  const [leftTripDays, setLeftTripDays] = useState<number>(0);
  const [rightLodgeDays, setRightLodgeDays] = useState<number>(0);
  const [rightTripDays, setRightTripDays] = useState<number>(0);
  const [leftAverageStars, setLeftAverageStars] = useState<number>(0.0);
  const [leftReviewCount, setLeftReviewCount] = useState<number>(0);
  const [rightAverageStars, setRightAverageStars] = useState<number>(0.0);
  const [rightReviewCount, setRightReviewCount] = useState<number>(0);
  const [leftReservationCount, setLeftReservationCount] = useState<number>(0);
  const [leftMinReservationCount, setLeftMinReservationCount] =
    useState<number>(0);
  const [rightReservationCount, setRightReservationCount] = useState<number>(0);
  const [rightMinReservationCount, setRightMinReservationCount] =
    useState<number>(0);

  const [schedules, setSchedules] = useState<ScheduleItem[]>([]);
  const [comparedSchedules, setComparedSchedules] = useState<ScheduleItem[]>(
    [],
  );

  const [myPicProducts, setMyPicProducts] = useState<Product | null>(null);

  const isPriceLeftHigher =
    priceLeft !== null && priceRight !== null && priceLeft < priceRight;
  const leftRate = isPriceLeftHigher ? 4 : 3;
  const rightRate = isPriceLeftHigher ? 3 : 4;

  const isShoppingVisitsLeftHigher =
    leftShoppingCount !== null &&
    rightShoppingCount !== null &&
    leftShoppingCount < rightShoppingCount;

  const shoppingRatingLeft = isShoppingVisitsLeftHigher ? 4 : 3;
  const shoppingRatingRight = isShoppingVisitsLeftHigher ? 3 : 4;

  const isHotelStars =
    leftHotelStars !== null &&
    rightHotelStars !== null &&
    leftHotelStars === rightHotelStars;

  useEffect(() => {
    if (!searchParam.get("rid") || !searchParam.get("lid")) return;
    // if (compareIndex === -1 && compared?.packageId) return;
    const fixedPackageId = Number(searchParam.get("lid"));
    const comparePackageId =
      compareIndex === 0 ? Number(searchParam.get("rid")) : compared?.packageId;
    // console.log(comparePackageId);

    fetchPackageData(fixedPackageId, comparePackageId)
      .then((data) => {
        // console.log(data);
        const mappedfixSchedules: ScheduleItem[] =
          data.data.fixedPackage.schedules.map((sch) => ({
            day: sch.day,
            schedule: sch.schedule,
            breakfast: sch.breakfast || "불포함",
            lunch: sch.lunch || "불포함",
            dinner: sch.dinner || "불포함",
          }));

        const mappedComSchedules: ScheduleItem[] =
          data.data.comparePackage.schedules.map((sch) => ({
            day: sch.day,
            schedule: sch.schedule,
            breakfast: sch.breakfast || "불포함",
            lunch: sch.lunch || "불포함",
            dinner: sch.dinner || "불포함",
          }));

        setPackageData(data);

        setSchedules(mappedfixSchedules);
        setComparedSchedules(mappedComSchedules);

        setPriceLeft(data.data.fixedPackage.price);
        setPriceRight(data.data.comparePackage.price);

        setLeftHotelStars(data.data.fixedPackage.hotelStars);
        setRightHotelStars(data.data.comparePackage.hotelStars);

        setLeftShoppingCount(data.data.fixedPackage.shoppingCount);
        setRightShoppingCount(data.data.comparePackage.shoppingCount);

        setRightRating(data.data.comparePackage.hotelStars);

        setLeftPurchasedCount(data.data.fixedPackage.purchasedCount);
        setRightPurchasedCount(data.data.comparePackage.purchasedCount);

        setLeftImageUrl(data.data.fixedPackage.imageUrl);
        setRightImageUrl(data.data.comparePackage.imageUrl);

        setLeftHashtags(data.data.fixedPackage.hashtags);
        setRightHashtags(data.data.comparePackage.hashtags);

        setLeftLodgeDays(data.data.fixedPackage.lodgeDays);
        setRightLodgeDays(data.data.comparePackage.lodgeDays);

        setLeftTripDays(data.data.fixedPackage.tripDays);
        setRightTripDays(data.data.comparePackage.tripDays);

        setLeftReviewCount(data.data.fixedPackage.reviewCount);
        setRightReviewCount(data.data.comparePackage.reviewCount);

        setLeftAverageStars(data.data.fixedPackage.averageStars);
        setRightAverageStars(data.data.comparePackage.averageStars);

        setLeftMinReservationCount(data.data.fixedPackage.minReservationCount);
        setLeftReservationCount(data.data.fixedPackage.reservationCount);
        setRightReservationCount(data.data.comparePackage.reservationCount);
        setRightMinReservationCount(
          data.data.comparePackage.minReservationCount,
        );
        setMyPicProducts({
          title: data.data.comparePackage.title,
          imageUrl: data.data.comparePackage.imageUrl,
          hashtags: data.data.comparePackage.hashtags,
          lodgeDays: data.data.comparePackage.lodgeDays,
          tripDays: data.data.comparePackage.tripDays,
          price: data.data.comparePackage.price,
        });

        // if (data.data.fixedPackage.schedules) {
        //   // API 응답에서 받은 스케줄을 ScheduleItem[] 형식으로 매핑합니다.
        //   const mappedfixSchedules: ScheduleItem[] =
        //     data.data.fixedPackage.schedules.map((sch) => ({
        //       day: sch.day,
        //       schedule: sch.schedule,
        //       breakfast: sch.breakfast || "불포함",
        //       lunch: sch.lunch || "불포함",
        //       dinner: sch.dinner || "불포함",
        //     }));
        //   setSchedules(mappedfixSchedules);
        // } else if (data.data.comparePackage.schedules) {
        //   const mappedComSchedules: ScheduleItem[] =
        //     data.data.comparePackage.schedules.map((sch) => ({
        //       day: sch.day,
        //       schedule: sch.schedule,
        //       breakfast: sch.breakfast || "불포함",
        //       lunch: sch.lunch || "불포함",
        //       dinner: sch.dinner || "불포함",
        //     }));
        //   setComparedSchedules(mappedComSchedules);
        // } else {
        //   console.error("고정 패키지 스케줄 데이터가 누락되었습니다.");
        // }
      })
      .catch((error) => {
        console.error("An error occurred while fetching package data:", error);
      });
  }, [compared?.packageId, searchParam.get("rid"), searchParam.get("lid")]);

  // useEffect(() => {
  //   console.log(searchParam.get("rid"));
  // }, [searchParam.get("rid")]);
  // useEffect(() => {
  //   console.log(myPicProducts);
  // }, [myPicProducts]);

  return (
    <div className="mx-6">
      <div className="flex justify-between mt-3">
        <div className="w-1/2">
          <span className="text-black-8 text-xs font-semibold border-[0.6px] border-grey-e rounded-xl px-2 py-1">
            고정상품
          </span>
          <h3 className="text-black-2 text-lg font-bold h-14 overflow-hidden line-clamp-2">
            {packageData
              ? packageData.data.fixedPackage.title
              : packageDetail?.data?.title || "불러오는 중..."}
          </h3>
          <Button
            text={"비교 상품 바꾸기"}
            styleClass={`w-full text-white text-sm font-medium rounded-lg bg-custom-gradient-pink mt-3 py-2 px-7 cursor-pointer
            `}
            onClickFn={onChangeA}
          />
        </div>
        <SectionMargin />
        <div className="w-1/2">
          <span className="text-black-8 text-xs font-semibold border-[0.6px] border-grey-e rounded-xl px-2 py-1">
            비교상품
          </span>
          <h3 className="text-black-2 text-lg font-bold h-14 overflow-hidden line-clamp-2">
            {!searchParam.get("rid")
              ? "상품을 선택하세요"
              : myPicProducts
                ? myPicProducts.title
                : "불러오는 중..."}
          </h3>
          <Button
            text={"비교 상품 바꾸기"}
            styleClass={`w-full text-white text-sm font-medium rounded-lg bg-custom-gradient-green mt-3 py-2 px-7 cursor-pointer
            `}
            onClickFn={onChangeB}
          />
        </div>
      </div>

      <div className="mt-14">
        <div className="py-3">
          <div className="flex justify-between">
            <span
              className={`${
                isPriceLeftHigher
                  ? "text-pink-main text-[13px]"
                  : "text-black-9 text-xs"
              } font-normal`}
            >
              {priceLeft?.toLocaleString()}원
            </span>
            <span className="text-black-4 text-sm font-semibold">가격</span>
            <span
              className={`${
                isPriceLeftHigher
                  ? "text-black-9 text-xs"
                  : "text-lime-sub3 text-[13px]"
              } font-semibold`}
            >
              {(myPicProducts?.price || 0).toLocaleString()}원
            </span>
          </div>
          <div className="flex justify-between">
            <LeftProgressBar
              rating={leftRate}
              isLower={!isPriceLeftHigher}
              isSameRating={false}
              isZeroCount={false}
            />
            <SectionMargin />
            <RightProgressBar
              rating={rightRate}
              isLower={isPriceLeftHigher}
              isSameRating={false}
              isZeroCount={false}
            />
          </div>
        </div>

        <div className="py-3">
          <div className="flex justify-between">
            <span
              className={`${
                isHotelStars
                  ? "text-blue-main text-[13px]"
                  : leftHotelStars !== null &&
                      rightHotelStars !== null &&
                      leftHotelStars >= rightHotelStars
                    ? "text-pink-main text-[13px]"
                    : "text-black-9 text-xs"
              } font-semibold`}
            >
              {leftHotelStars ? `${leftHotelStars}성급` : "정보 없음"}
            </span>
            <span className="text-black-4 text-sm font-semibold">
              숙소 등급
            </span>
            <span
              className={`${
                isHotelStars
                  ? "text-blue-main text-[13px]"
                  : leftHotelStars !== null &&
                      rightHotelStars !== null &&
                      rightHotelStars >= leftHotelStars
                    ? "text-pink-main text-[13px]"
                    : "text-black-9 text-xs"
              } font-semibold`}
            >
              {!searchParam.get("rid")
                ? "0"
                : rightHotelStars
                  ? `${rightHotelStars}성급`
                  : "정보 없음"}
            </span>
          </div>

          <div className="flex justify-between">
            <LeftProgressBar
              rating={leftRating}
              isLower={!isHotelStars && isLeftLower}
              isSameRating={isHotelStars}
              isZeroCount={false}
            />
            <SectionMargin />
            <RightProgressBar
              rating={rightRating}
              isLower={!isHotelStars && isRightLower}
              isSameRating={isHotelStars}
              isZeroCount={false}
            />
          </div>
        </div>

        <div className="py-3">
          <div className="flex justify-between">
            <span
              className={`${
                leftShoppingCount === 0
                  ? "text-black-9 text-xs"
                  : isShoppingVisitsLeftHigher
                    ? "text-pink-main text-[13px]"
                    : "text-black-9 text-xs"
              } font-normal`}
            >
              총 {leftShoppingCount ?? "정보 없음"}개
            </span>
            <span className="text-black-4 text-sm font-semibold">
              쇼핑센터 방문 일정
            </span>
            <span
              className={`${
                !searchParam.get("rid") || rightShoppingCount === 0
                  ? "text-black-9 text-xs"
                  : isShoppingVisitsLeftHigher
                    ? "text-black-9 text-xs"
                    : "text-lime-sub3 text-[13px]"
              } font-semibold`}
            >
              총
              {!searchParam.get("rid")
                ? "0"
                : rightShoppingCount ?? "정보 없음"}
              개
            </span>
          </div>
          <div className="flex justify-between">
            <LeftProgressBar
              rating={shoppingRatingLeft}
              isLower={!isShoppingVisitsLeftHigher}
              isSameRating={false}
              isZeroCount={leftShoppingCount === 0}
            />
            <SectionMargin />
            <RightProgressBar
              rating={shoppingRatingRight}
              isLower={isShoppingVisitsLeftHigher}
              isSameRating={false}
              isZeroCount={!searchParam.get("rid") || rightShoppingCount === 0}
            />
          </div>
        </div>
      </div>

      <div className="my-12">
        <h3 className="mb-6 text-black-2 text-lg font-semibold">상품 요약</h3>
        <div className="flex justify-between">
          <LeftProductSummary
            purchasedCount={leftPurchasedCount}
            imageUrl={leftImageUrl}
            hashtags={leftHashtags}
            lodgeDays={leftLodgeDays}
            tripDays={leftTripDays}
            averageStars={leftAverageStars}
            reviewCount={leftReviewCount}
            reservationCount={leftReservationCount}
            minReservationCount={leftMinReservationCount}
          />
          <SectionMargin />
          <RightProductSummary
            purchasedCount={rightPurchasedCount}
            imageUrl={rightImageUrl}
            hashtags={rightHashtags}
            lodgeDays={rightLodgeDays}
            tripDays={rightTripDays}
            averageStars={rightAverageStars}
            reviewCount={rightReviewCount}
            reservationCount={rightReservationCount}
            minReservationCount={rightMinReservationCount}
          />
        </div>
      </div>

      <div className="relative">
        <h3 className="mb-4 text-black-2 text-lg font-semibold">
          일정 둘러보기
        </h3>
        <div className="flex w-full">
          <div className="px-1 py-2 bg-pink-3 rounded-lg relative w-1/2 m-1">
            {schedules.map((item, index) => (
              <div key={index} className="day-schedule text-xxs">
                <h4>Day {item.day}</h4>
                <ul>
                  {item.schedule.map((event, idx) => (
                    <li key={idx}>{event}</li>
                  ))}
                </ul>
                <p>아침: {item.breakfast || "불포함"}</p>
                <p>점심: {item.lunch || "불포함"}</p>
                <p>저녁: {item.dinner || "불포함"}</p>
                <br />
              </div>
            ))}
          </div>

          <div className="px-1 py-2 bg-[#E8FFE7] rounded-lg relative w-1/2 m-1">
            {comparedSchedules?.map((item, index) => {
              return (
                <div key={index} className="day-schedule text-xxs">
                  <h4>Day {item.day}</h4>
                  <ul>
                    {item.schedule.map((event, idx) => (
                      <li key={idx}>{event}</li>
                    ))}
                  </ul>
                  <p>아침: {item.breakfast || "불포함"}</p>
                  <p>점심: {item.lunch || "불포함"}</p>
                  <p>저녁: {item.dinner || "불포함"}</p>
                  <br />
                </div>
              );
            })}
          </div>
          {/* <div className="px-1 py-2 bg-lime-sub4 rounded-lg relative" /> */}
        </div>
        <DetailMoreButton setViewMore={setViewMore} />
      </div>

      <div>
        <h3 className="mt-14 mb-4 text-black-2 text-lg font-semibold">
          내가 고른 상품과 유사한 추천 상품 보기
        </h3>
        <div className="flex flex-col items-center justify-center">
          {products.map((product, index) => (
            <MyPicProduct
              key={index}
              title={product.title}
              imageUrl={product.imageUrl}
              price={product.minPrice}
              hashtags={product.hashtags}
              lodgeDays={product.lodgeDays}
              tripDays={product.tripDays}
              id={product.packageId}
              setIsCompareComplete={setIsCompareComplete}
              // setCurrentItem={setCurrentItem}
              setCompareIndex={setCompareIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChangeCompareProduct;
