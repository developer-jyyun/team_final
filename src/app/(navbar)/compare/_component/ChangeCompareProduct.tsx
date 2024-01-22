import React, { useState } from "react";
import Button from "@/app/_component/common/atom/Button";
import DetailMoreButton from "@/app/(non-navbar)/items/[id]/_component/DetailMoreButton";
import LeftProgressBar from "./LeftProgressBar";
import RightProgressBar from "./RightProgressBar";
import SectionMargin from "./SectionMargin";
import ProductSummary from "./ProductSummary";
import Schedule from "./Schedule";
import { scheduleItems1, scheduleItems2 } from "./ScheduleItems";
import MyPicProduct from "./MyPicProduct";

interface Props {
  onChange: () => void;
}

const ChangeCompareProduct = ({ onChange }: Props) => {
  const [, setViewMore] = useState(false);
  const [leftRating] = useState(5);
  const [rightRating] = useState(3);
  const isLeftLower = leftRating < rightRating;
  const isRightLower = rightRating < leftRating;
  const [priceLeft] = useState(940000);
  const [priceRight] = useState(870000);
  const [shoppingVisitsLeft] = useState(9);
  const [shoppingVisitsRight] = useState(7);

  const isPriceLeftHigher = priceLeft < priceRight;
  const leftRate = isPriceLeftHigher ? 4 : 3;
  const rightRate = isPriceLeftHigher ? 3 : 4;

  const isShoppingVisitsLeftHigher = shoppingVisitsLeft < shoppingVisitsRight;
  const shoppingRatingLeft = isShoppingVisitsLeftHigher ? 4 : 3;
  const shoppingRatingRight = isShoppingVisitsLeftHigher ? 3 : 4;

  return (
    <div className="mx-6">
      <div className="flex justify-between mt-3">
        <div className="w-1/2">
          <span className="text-black-8 text-xs font-semibold border-[0.6px] border-grey-e rounded-xl px-2 py-1">
            고정상품
          </span>
          <h3 className="text-black-2 text-lg font-bold h-14 overflow-hidden line-clamp-2">
            청룡의 해 얼리버드 특가
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
            오사카/교토 3박 4일 올인원 패키지
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
              {priceLeft.toLocaleString()}원
            </span>
            <span className="text-black-4 text-sm font-semibold">가격</span>
            <span
              className={`${
                isPriceLeftHigher
                  ? "text-black-9 text-xs"
                  : "text-lime-sub3 text-[13px]"
              } font-semibold`}
            >
              {priceRight.toLocaleString()}원
            </span>
          </div>
          <div className="flex justify-between">
            <LeftProgressBar rating={leftRate} isLower={!isPriceLeftHigher} />
            <SectionMargin />
            <RightProgressBar rating={rightRate} isLower={isPriceLeftHigher} />
          </div>
        </div>

        <div className="py-3">
          <div className="flex justify-between">
            <span
              className={`${
                leftRating >= rightRating
                  ? "text-pink-main text-[13px]"
                  : "text-black-9 text-xs"
              } font-semibold`}
            >
              {leftRating}성급
            </span>
            <span className="text-black-4 text-sm font-semibold">
              숙소 등급
            </span>
            <span
              className={`${
                rightRating > leftRating
                  ? "text-lime-sub3 text-[13px]"
                  : "text-black-9 text-xs"
              } font-semibold`}
            >
              {rightRating}성급
            </span>
          </div>
          <div className="flex justify-between">
            <LeftProgressBar rating={leftRating} isLower={isLeftLower} />
            <SectionMargin />
            <RightProgressBar rating={rightRating} isLower={isRightLower} />
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
              총 {shoppingVisitsLeft}개
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
              총 {shoppingVisitsRight}개
            </span>
          </div>
          <div className="flex justify-between">
            <LeftProgressBar
              rating={shoppingRatingLeft}
              isLower={!isShoppingVisitsLeftHigher}
            />
            <SectionMargin />
            <RightProgressBar
              rating={shoppingRatingRight}
              isLower={isShoppingVisitsLeftHigher}
            />
          </div>
        </div>
      </div>

      <div className="my-12">
        <h3 className="mb-6 text-black-2 text-lg font-semibold">상품 요약</h3>
        <div className="flex justify-between">
          <ProductSummary />
          <SectionMargin />
          <ProductSummary />
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
                          before:left-[7px] web:before:left-[6.7px] before:top-1/2 before:-translate-y-1/2"
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
          <div className="px-1 py-2.5 bg-lime-sub4 rounded-lg">
            <ul>
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
                          before:left-[7px] web:before:left-[6.7px] before:top-1/2 before:-translate-y-1/2"
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
          <div className="px-1 py-2.5 bg-lime-sub4 rounded-lg">
            <ul>
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
