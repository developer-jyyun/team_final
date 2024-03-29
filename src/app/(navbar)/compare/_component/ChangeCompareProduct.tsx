import DetailTypography from "@/app/(non-navbar)/items/[id]/_component/DetailTypography";
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
  setIsCompareComplete: React.Dispatch<React.SetStateAction<boolean>>;
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

const ChangeCompareProduct = ({
  products,
  onChangeA,
  onChangeB,
  compareIndex,
  compared,
  setIsCompareComplete,
  setCompareIndex,
}: Props) => {
  const searchParam = useSearchParams();

  const { data: packageDetail } = usePackageDetailQuery({
    id: searchParam.get("lid") as string,
    date: null,
    start: true,
  });

  const [viewMore, setViewMore] = useState(false);
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

  const isShoppingSame = (leftShoppingCount ?? 0) === (rightShoppingCount ?? 0);

  useEffect(() => {
    if (!searchParam.get("lid")) return;
    const fixedPackageId = Number(searchParam.get("lid"));
    const comparePackageId = !searchParam.get("rid")
      ? compared?.packageId
      : compareIndex === 0
        ? Number(searchParam.get("rid"))
        : compared?.packageId;
    console.log(compared?.packageId);

    fetchPackageData(fixedPackageId, comparePackageId)
      .then((data) => {
        console.log(data);
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
      })
      .catch((error) => {
        console.error("An error occurred while fetching package data:", error);
      });
  }, [compared?.packageId, searchParam.get("rid"), searchParam.get("lid")]);

  return (
    <div className="mx-6">
      <div className="flex justify-between mt-3">
        <div className="w-1/2">
          <span className="text-black-8 text-xs font-semibold border-[0.6px] border-grey-e rounded-xl px-2 py-1">
            고정상품
          </span>
          <h3 className="text-black-2 text-lg font-bold h-14 overflow-hidden line-clamp-2 mt-4">
            {packageData
              ? packageData.data.fixedPackage.title
              : packageDetail?.data?.title || "불러오는 중..."}
          </h3>
          <Button
            text={"비교 상품 바꾸기"}
            styleClass={`w-full text-white text-xs web:text-sm font-medium rounded-lg bg-custom-gradient-pink mt-3 py-3 px-8 cursor-pointer
            `}
            onClickFn={onChangeA}
          />
        </div>
        <SectionMargin />
        <div className="w-1/2">
          <span className="text-black-8 text-xs font-semibold border-[0.6px] border-grey-e rounded-xl px-2 py-1">
            비교상품
          </span>
          <h3 className="text-black-2 text-lg font-bold h-14 overflow-hidden line-clamp-2 mt-4">
            {myPicProducts ? myPicProducts.title : "불러오는 중..."}
          </h3>
          <Button
            text={"비교 상품 바꾸기"}
            styleClass={`w-full text-white text-xs web:text-sm font-medium rounded-lg bg-custom-gradient-green mt-3 py-3 px-8 cursor-pointer
            `}
            onClickFn={onChangeB}
          />
        </div>
      </div>
      {compared ? (
        <>
          <div className="mt-14">
            <div className="py-3">
              <div className="flex justify-between">
                <span
                  className={`${
                    (priceLeft ?? 0) < (priceRight ?? 0)
                      ? "text-pink-main text-[13px] web:text-[17px] font-semibold"
                      : "text-black-9 text-xs web:text-base"
                  }`}
                >
                  {priceLeft?.toLocaleString()}원
                </span>
                <span className="text-black-4 text-sm font-semibold">가격</span>
                <span
                  className={`${
                    (priceLeft ?? 0) < (priceRight ?? 0)
                      ? "text-black-9 text-xs web:text-base"
                      : "text-lime-sub3 text-[13px] web:text-[17px] font-semibold"
                  }`}
                >
                  {(myPicProducts?.price || 0).toLocaleString()}원
                </span>
              </div>
              <div className="flex justify-between">
                <LeftProgressBar
                  rating={(priceLeft ?? 0) < (priceRight ?? 0) ? 5 : 4}
                  isLower={(priceLeft ?? 0) > (priceRight ?? 0)}
                  isSameRating={false}
                  isZeroCount={false}
                />
                <SectionMargin />
                <RightProgressBar
                  rating={(priceLeft ?? 0) > (priceRight ?? 0) ? 5 : 4}
                  isLower={(priceLeft ?? 0) < (priceRight ?? 0)}
                  isSameRating={false}
                  isZeroCount={false}
                />
              </div>
            </div>

            <div className="py-3">
              <div className="flex justify-between">
                <span
                  className={`${
                    (leftHotelStars ?? 0) === (rightHotelStars ?? 0)
                      ? "text-blue-main text-[13px] web:text-[17px] font-semibold"
                      : (leftHotelStars ?? 0) < (rightHotelStars ?? 0)
                        ? "text-black-9 text-xs web:text-base"
                        : "text-pink-main text-[13px] web:text-[17px]"
                  }`}
                >
                  {leftHotelStars ? `${leftHotelStars}성급` : "정보 없음"}
                </span>
                <span className="text-black-4 text-sm font-semibold">
                  숙소 등급
                </span>
                <span
                  className={`${
                    (leftHotelStars ?? 0) === (rightHotelStars ?? 0)
                      ? "text-blue-main text-[13px] web:text-[17px] font-semibold"
                      : (leftHotelStars ?? 0) > (rightHotelStars ?? 0)
                        ? "text-black-9 text-xs web:text-base"
                        : "text-lime-sub3 text-[13px] web:text-[17px] font-semibold"
                  }`}
                >
                  {rightHotelStars ? `${rightHotelStars}성급` : "정보 없음"}
                </span>
              </div>

              <div className="flex justify-between">
                <LeftProgressBar
                  rating={
                    (leftHotelStars ?? 0) < (rightHotelStars ?? 0) ? 4 : 5
                  }
                  isLower={(leftHotelStars ?? 0) < (rightHotelStars ?? 0)}
                  isSameRating={
                    (leftHotelStars ?? 0) === (rightHotelStars ?? 0)
                  }
                  isZeroCount={false}
                />
                <SectionMargin />
                <RightProgressBar
                  rating={
                    (leftHotelStars ?? 0) > (rightHotelStars ?? 0) ? 4 : 5
                  }
                  isLower={(leftHotelStars ?? 0) > (rightHotelStars ?? 0)}
                  isSameRating={
                    (leftHotelStars ?? 0) === (rightHotelStars ?? 0)
                  }
                  isZeroCount={false}
                />
              </div>
            </div>

            <div className="py-3">
              <div className="flex justify-between">
                <span
                  className={`${
                    isShoppingSame
                      ? "text-blue-main text-[13px] web:text-[17px] font-semibold"
                      : (leftShoppingCount ?? 0) > (rightShoppingCount ?? 0)
                        ? "text-black-9 text-xs web:text-base"
                        : "text-pink-main text-[13px] web:text-[17px] font-semibold"
                  }`}
                >
                  총 {leftShoppingCount ?? "정보 없음"}개
                </span>
                <span className="text-black-4 text-sm font-semibold">
                  쇼핑센터 방문 일정
                </span>
                <span
                  className={`${
                    isShoppingSame
                      ? "text-blue-main text-[13px] web:text-[17px] font-semibold"
                      : (leftShoppingCount ?? 0) < (rightShoppingCount ?? 0)
                        ? "text-black-9 text-xs web:text-base"
                        : "text-lime-sub3 text-[13px] web:text-[17px] font-semibold"
                  }`}
                >
                  총 {rightShoppingCount ?? "정보 없음"}개
                </span>
              </div>
              <div className="flex justify-between">
                <LeftProgressBar
                  rating={
                    (leftShoppingCount ?? 0) < (rightShoppingCount ?? 0) ? 5 : 4
                  }
                  isLower={(leftShoppingCount ?? 0) > (rightShoppingCount ?? 0)}
                  isSameRating={isShoppingSame}
                  isZeroCount={leftShoppingCount === 0}
                />
                <SectionMargin />
                <RightProgressBar
                  rating={
                    (leftShoppingCount ?? 0) > (rightShoppingCount ?? 0) ? 5 : 4
                  }
                  isLower={(leftShoppingCount ?? 0) < (rightShoppingCount ?? 0)}
                  isSameRating={isShoppingSame}
                  isZeroCount={rightShoppingCount === 0 || true}
                />
              </div>
            </div>
          </div>

          <div className="my-12">
            <h3 className="mb-6 text-black-2 text-lg font-semibold">
              상품 요약
            </h3>
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
            <div
              className={`relative ${
                viewMore ? "h-full" : "h-[450px]"
              } overflow-hidden`}
            >
              <h3 className="mb-4 text-black-2 text-lg font-semibold">
                일정 둘러보기
              </h3>
              <div className="flex">
                <div className="flex w-full flex-col">
                  {schedules.map((item, index) => {
                    return (
                      <div className="mb-4" key={index}>
                        <h1 className="text-black-4 text-sm web:text-base font-medium">
                          {index + 1}일차
                        </h1>
                        <div className="relative">
                          <ul
                            className="w-[95%] rounded-lg before:content-[''] before:h-[calc(100%-30px)] web:before:h-[calc(100%-30px)] before:w-[0.6px] 
                            before:bg-[#FFBFD1] before:absolute before:left-[13.5px] web:before:left-[18.3px] before:top-1/2
                              before:-translate-y-1/2 
                              bg-pink-3 p-2"
                          >
                            {item.schedule.map((detail, detailIndex) => {
                              return (
                                <li
                                  key={detailIndex}
                                  className={`relative flex pl-6 pb-2 last-of-type:pb-0 after:last-of-type:contant-['']
                                after:last-of-type:border-2 after:last-of-type:border-solid after:last-of-type:border-pink-3
                                after:last-of-type:absolute after:last-of-type:left-[5px] after:last-of-type:top-[12px] after:last-of-type:w-[1px] 
                                after:last-of-type:h-[calc(100%-13px)] web:after:last-of-type:left-[9px] web:after:last-of-type:top-[14px]
                                before:contant-[''] z-10 before:h-[6px] before:w-[6px] web:before:h-2 web:before:w-2 before:bg-pink before:rounded-[50%] 
                                before:absolute before:left-[3px] web:before:left-[7px] before:top-[6px]`}
                                >
                                  <div className="">
                                    <DetailTypography
                                      color={3}
                                      size={10}
                                      bold={500}
                                    >
                                      {detail}
                                    </DetailTypography>
                                  </div>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="flex w-full flex-col items-end">
                  {comparedSchedules?.map((item, index) => {
                    return (
                      <div className="relative w-[95%] mb-4" key={index}>
                        <h1 className="text-black-4 text-sm web:text-base font-medium">
                          {index + 1}일차
                        </h1>
                        <div className="relative">
                          <ul
                            className="w-[95%] rounded-lg before:content-[''] before:h-[calc(100%-30px)] web:before:h-[calc(100%-30px)] before:w-[0.6px] 
                     before:bg-[#AAE3A8] before:absolute before:left-[13.5px] web:before:left-[18.3px] before:top-1/2
                       before:-translate-y-1/2 
                       bg-[#E8FFE7] p-2"
                          >
                            {item.schedule.map((detail, detailIndex) => {
                              return (
                                <li
                                  key={detailIndex}
                                  className={`relative flex pl-6 pb-2 last-of-type:pb-0 after:last-of-type:contant-['']
                                 after:last-of-type:border-2 after:last-of-type:border-solid after:last-of-type:border-[#E8FFE7]
                                 after:last-of-type:absolute after:last-of-type:left-[5px] after:last-of-type:top-[12px] after:last-of-type:w-[1px] 
                                 after:last-of-type:h-[calc(100%-13px)] web:after:last-of-type:left-[9px] web:after:last-of-type:top-[14px]
                                 before:contant-[''] z-10 before:h-[6px] before:w-[6px] web:before:h-2 web:before:w-2 before:bg-[#05B200] before:rounded-[50%] 
                                 before:absolute before:left-[3px] web:before:left-[7px] before:top-[6px]`}
                                >
                                  <div className="pl-9">
                                    <DetailTypography
                                      color={3}
                                      size={10}
                                      bold={500}
                                    >
                                      {detail}
                                    </DetailTypography>
                                  </div>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            {!viewMore && (
              <div className="z-30 absolute bottom-0 left-0 w-full flex items-center justify-center h-40 bg-gradient-white web:h-20">
                <Button
                  text="더보기"
                  onClickFn={() => {
                    setViewMore(true);
                  }}
                  styleClass="border-[0.6px] border-solid border-grey-a rounded-[52px] py-1 px-2 text-black-6 bg-white"
                />
              </div>
            )}
          </div>

          <div>
            <h3 className="mt-14 mb-4 text-black-2 text-lg font-semibold">
              내가 고른 상품과 유사한 추천 상품 보기
            </h3>
            <div className="flex flex-col">
              {products.map((product, index) => {
                return (
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
                    setCompareIndex={setCompareIndex}
                    isWish={product.isWish}
                  />
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <div className="mt-12 text-center flex flex-col items-center justify-center">
          <img src="/assets/mainTitle.svg" alt="메인 로고" className="w-40" />
          <h1 className="mt-4 text-black-2 text-lg font-bold">
            비교 상품을 골라 주세요
          </h1>
        </div>
      )}
    </div>
  );
};

export default ChangeCompareProduct;
