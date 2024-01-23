import React, { useState, useEffect } from "react";
import Button from "@/app/_component/common/atom/Button";
import DetailMoreButton from "@/app/(non-navbar)/items/[id]/_component/DetailMoreButton";
import LeftProgressBar from "./LeftProgressBar";
import RightProgressBar from "./RightProgressBar";
import SectionMargin from "./SectionMargin";
import Schedule from "./Schedule";
import { scheduleItems1, scheduleItems2 } from "./ScheduleItems";
import MyPicProduct from "./MyPicProduct";
import LeftProductSummary from "./LeftProductSummary";
import RightProductSummary from "./RightProductSummary";

interface Props {
  onChange: () => void;
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
}

interface ApiResponse {
  code: number;
  data: {
    fixedPackage: Package;
    comparePackage: Package;
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

const ChangeCompareProduct = ({ onChange }: Props) => {
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

  const isPriceLeftHigher =
    priceLeft !== null && priceRight !== null && priceLeft < priceRight;
  const leftRate = isPriceLeftHigher ? 4 : 3;
  const rightRate = isPriceLeftHigher ? 3 : 4;

  const isShoppingVisitsLeftHigher =
    leftShoppingCount !== null &&
    rightShoppingCount !== null &&
    leftShoppingCount > rightShoppingCount;

  const shoppingRatingLeft = isShoppingVisitsLeftHigher ? 4 : 3;
  const shoppingRatingRight = isShoppingVisitsLeftHigher ? 3 : 4;

  const isHotelStars =
    leftHotelStars !== null &&
    rightHotelStars !== null &&
    leftHotelStars === rightHotelStars;

  useEffect(() => {
    const fixedPackageId = 24042217462;
    const comparePackageId = 24031110220;

    fetchPackageData(fixedPackageId, comparePackageId)
      .then((data) => {
        setPackageData(data);
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
        setLeftTripDays(data.data.fixedPackage.tripDays);
        setRightLodgeDays(data.data.comparePackage.lodgeDays);
        setRightTripDays(data.data.comparePackage.tripDays);
        setLeftAverageStars(data.data.fixedPackage.averageStars);
        setLeftReviewCount(data.data.fixedPackage.reviewCount);
        setRightAverageStars(data.data.comparePackage.averageStars);
        setRightReviewCount(data.data.comparePackage.reviewCount);
        setLeftReservationCount(data.data.fixedPackage.reservationCount);
        setLeftMinReservationCount(data.data.fixedPackage.minReservationCount);
        setRightReservationCount(data.data.comparePackage.reservationCount);
        setRightMinReservationCount(
          data.data.comparePackage.minReservationCount,
        );
      })
      .catch((error) => {
        console.error("An error occurred while fetching package data:", error);
      });
  }, []);

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
              : "불러오는 중..."}
          </h3>
          <Button
            text={"비교 상품 바꾸기"}
            styleClass={`w-full text-white text-sm font-medium rounded-lg bg-custom-gradient-pink mt-3 py-2 px-7 cursor-pointer
            `}
            onClickFn={onChange}
          />
        </div>
        <SectionMargin />
        <div className="w-1/2">
          <span className="text-black-8 text-xs font-semibold border-[0.6px] border-grey-e rounded-xl px-2 py-1">
            비교상품
          </span>
          <h3 className="text-black-2 text-lg font-bold h-14 overflow-hidden line-clamp-2">
            {packageData
              ? packageData.data.comparePackage.title
              : "불러오는 중..."}
          </h3>
          <Button
            text={"비교 상품 바꾸기"}
            styleClass={`w-full text-white text-sm font-medium rounded-lg bg-custom-gradient-green mt-3 py-2 px-7 cursor-pointer
            `}
            onClickFn={onChange}
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
              {priceRight?.toLocaleString()}원
            </span>
          </div>
          <div className="flex justify-between">
            <LeftProgressBar
              rating={leftRate}
              isLower={!isPriceLeftHigher}
              isSameRating={false}
            />
            <SectionMargin />
            <RightProgressBar
              rating={rightRate}
              isLower={isPriceLeftHigher}
              isSameRating={false}
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
              {rightHotelStars ? `${rightHotelStars}성급` : "정보 없음"}
            </span>
          </div>

          <div className="flex justify-between">
            <LeftProgressBar
              rating={leftRating}
              isLower={!isHotelStars && isLeftLower}
              isSameRating={isHotelStars}
            />
            <SectionMargin />
            <RightProgressBar
              rating={rightRating}
              isLower={!isHotelStars && isRightLower}
              isSameRating={isHotelStars}
            />
          </div>
        </div>

        <div className="py-3">
          <div className="flex justify-between">
            <span
              className={`${
                isShoppingVisitsLeftHigher
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
                isShoppingVisitsLeftHigher
                  ? "text-black-9 text-xs"
                  : "text-lime-sub3 text-[13px]"
              } font-semibold`}
            >
              총 {rightShoppingCount ?? "정보 없음"}개
            </span>
          </div>
          <div className="flex justify-between">
            <LeftProgressBar
              rating={shoppingRatingLeft}
              isLower={!isShoppingVisitsLeftHigher}
              isSameRating={false}
            />
            <SectionMargin />
            <RightProgressBar
              rating={shoppingRatingRight}
              isLower={isShoppingVisitsLeftHigher}
              isSameRating={false}
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
        <span className="text-black-4 text-sm font-medium">1일차</span>
        <div className="flex justify-between my-3">
          <div className="px-1 py-2.5 bg-pink-3 rounded-lg relative">
            <ul
              className="before:content-[''] before:h-[calc(100%-31px)] web:before:h-[calc(100%-30px)] before:w-[0.6px] before:bg-[#FFBFD1] before:absolute 
                          before:left-[6.6px] web:before:left-[6.7px] before:top-1/2 before:-translate-y-1/2"
            >
              {scheduleItems1.map((item) => (
                <Schedule
                  key={item.id}
                  text={item.text}
                  iconSrc={item.iconSrc}
                  iconAlt={item.iconAlt}
                />
              ))}
            </ul>
          </div>
          <div className="px-1 py-2.5 bg-lime-sub4 rounded-lg relative">
            <ul
              className="before:content-[''] before:h-[calc(100%-31px)] web:before:h-[calc(100%-30px)] before:w-[0.6px] before:bg-[#AAE3A8] before:absolute 
                          before:right-[142.5px] web:before:right-[142.7px] before:top-1/2 before:-translate-y-1/2"
            >
              {scheduleItems2.map((item) => (
                <Schedule
                  key={item.id}
                  text={item.text}
                  iconSrc={item.iconSrc}
                  iconAlt={item.iconAlt}
                />
              ))}
            </ul>
          </div>
        </div>
        <span className="text-black-4 text-sm font-medium">2일차</span>
        <div className="flex justify-between mt-3">
          <div className="px-1 py-2.5 bg-pink-3 rounded-lg relative">
            <ul
              className="before:content-[''] before:h-[calc(100%-31px)] web:before:h-[calc(100%-30px)] before:w-[0.6px] before:bg-[#FFBFD1] before:absolute 
                          before:left-[6.6px] web:before:left-[6.7px] before:top-1/2 before:-translate-y-1/2"
            >
              {scheduleItems1.map((item) => (
                <Schedule
                  key={item.id}
                  text={item.text}
                  iconSrc={item.iconSrc}
                  iconAlt={item.iconAlt}
                />
              ))}
            </ul>
          </div>
          <div className="px-1 py-2.5 bg-lime-sub4 rounded-lg relative">
            <ul
              className="before:content-[''] before:h-[calc(100%-31px)] web:before:h-[calc(100%-30px)] before:w-[0.6px] before:bg-[#AAE3A8] before:absolute 
                          before:right-[142.5px] web:before:right-[142.7px] before:top-1/2 before:-translate-y-1/2"
            >
              {scheduleItems2.map((item) => (
                <Schedule
                  key={item.id}
                  text={item.text}
                  iconSrc={item.iconSrc}
                  iconAlt={item.iconAlt}
                />
              ))}
            </ul>
          </div>
        </div>
        <DetailMoreButton setViewMore={setViewMore} />
      </div>

      <div>
        <h3 className="mt-14 mb-4 text-black-2 text-lg font-semibold">
          내가 고른 상품과 유사한 추천 상품 보기
        </h3>
        <div className="flex flex-col items-center">
          <MyPicProduct />
          <MyPicProduct />
          <MyPicProduct />
          <MyPicProduct />
          <MyPicProduct />
        </div>
      </div>
    </div>
  );
};

export default ChangeCompareProduct;
