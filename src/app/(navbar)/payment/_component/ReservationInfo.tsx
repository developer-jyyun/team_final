import React, { useState } from "react";
import Image from "next/image";
import Button from "@/app/_component/common/atom/Button";
import EditIcon from "../../../../../public/icons/editIcon2.svg";
import BottomArrowIcon from "../../../../../public/icons/bottomArrowIcon.svg";
import RightArrowIcon from "../../../../../public/icons/rightArrowIcon.svg";
import CheckIcon from "../../../../../public/icons/checkIcon2.svg";

interface Props {
  onComplete: () => void;
}

const ReservationInfo = ({ onComplete }: Props) => {
  const [adultClass, setAdultClass] = useState("text-grey-c");
  const [childClass, setChildClass] = useState("text-grey-c");
  const [infantClass, setInfantClass] = useState("text-grey-c");

  const handleAdultChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setAdultClass(
      event.target.value === "0" ? "text-grey-c" : "text-pink-main",
    );
  };

  const handleChildChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setChildClass(
      event.target.value === "0" ? "text-grey-c" : "text-pink-main",
    );
  };

  const handleInfantChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setInfantClass(
      event.target.value === "0" ? "text-grey-c" : "text-pink-main",
    );
  };

  return (
    <div>
      <div className="p-4">
        <div className="py-3 ml-3">
          <h4 className="text-lg text-black-2 font-semibold">예약상품정보</h4>
        </div>
        <div className="ml-2 p-3.5 bg-pink-transparent rounded-lg">
          <div className="flex gap-12 items-center my-2 ml-3">
            <span className="min-w-max mr-3 text-xs text-black-4 font-normal">
              상품명
            </span>
            <p className="text-sm text-black-2 font-semibold truncate w-[14ch]">
              공백포함14글자이후로는...처리
            </p>
          </div>
          <div className="flex gap-12 items-center my-2 ml-3">
            <span className="min-w-max text-xs text-black-4 font-normal">
              여행기간
            </span>
            <div className="mt-4">
              <p className="text-pink-main text-sm font-bold ">3박 4일</p>
              <p className="text-black-2 text-sm font-semibold">
                03.05(화) ~ 03.08(금)
              </p>
            </div>
          </div>
          <div className="flex gap-12 items-start my-4 ml-3">
            <span className="min-w-max mt-0.5 text-xs text-black-4 font-normal">
              결제정보
            </span>
            <div>
              <p className="text-pink-main text-sm font-bold">상담 후 결제</p>
              <p className="w-4/5 text-xs text-black-6 font-normal">
                예약을 신청한 후 담당자와 상담을 통해 가격 및 예약을 확정합니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="py-3 ml-3">
          <h4 className="text-black-2 text-lg font-semibold">예약자 정보</h4>
        </div>
        <div className="relative ml-2 p-3.5 bg-grey-transparent rounded-lg">
          <div className="flex gap-12 items-center my-2.5 ml-3">
            <span className="min-w-max mr-4 text-black-4 text-xs font-normal">
              예약자
            </span>
            <p className="text-black-2 text-sm font-semibold">워너원</p>
          </div>
          <div className="flex gap-12 items-center my-2.5 ml-3">
            <span className="min-w-max mr-4 text-black-4 text-xs font-normal">
              이메일
            </span>
            <p className="text-black-2 text-sm font-semibold">Lets@WinnerOne</p>
          </div>
          <div className="flex gap-12 items-start my-2.5 ml-3">
            <span className="min-w-max mr-1.5 text-black-4 text-xs font-normal">
              전화번호
            </span>
            <p className="text-black-2 text-sm font-semibold">010-1234-5678</p>
          </div>
          <div className="absolute p-1 top-3.5 right-3.5">
            <Image src={EditIcon} alt="수정 아이콘" />
          </div>
        </div>
      </div>

      <div className="p-4 relative">
        <div className="py-3 ml-3">
          <h4 className="text-black-2 text-lg font-semibold">여행자 정보</h4>
        </div>
        <div className="flex justify-around">
          <div className="flex flex-col relative">
            <span className="px-2 mb-2 text-xxs text-black-6">
              성인 <strong className="text-grey-a">(만 12세 이상)</strong>
            </span>
            <select
              className={`w-[97px] h-[32px] border border-black-9 rounded-md px-8 appearance-none text-base ${adultClass}`}
              onChange={handleAdultChange}
            >
              {Array.from({ length: 11 }, (_, i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute top-9 right-0 flex items-center px-2  text-sm">
              <Image src={BottomArrowIcon} alt="하단화살표" />
            </div>
          </div>

          <div className="flex flex-col relative">
            <span className="px-2 mb-2 text-xxs text-black-6">
              소아 <strong className="text-grey-a">(만 12세 미만)</strong>
            </span>
            <select
              className={`w-[97px] h-[32px] border border-black-9 rounded-md px-8 appearance-none text-base ${childClass}`}
              onChange={handleChildChange}
            >
              {Array.from({ length: 11 }, (_, i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute top-9 right-0 flex items-center px-2 text-sm">
              <Image src={BottomArrowIcon} alt="하단화살표" />
            </div>
          </div>

          <div className="flex flex-col relative">
            <span className="px-2 mb-2 text-xxs text-black-6">
              유아 <strong className="text-grey-a">(만 2세 미만)</strong>
            </span>
            <select
              className={`w-[97px] h-[32px] border border-black-9 rounded-md px-8 appearance-none text-base ${infantClass}`}
              onChange={handleInfantChange}
            >
              {Array.from({ length: 11 }, (_, i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute top-9 right-0 flex items-center px-2 text-sm">
              <Image src={BottomArrowIcon} alt="하단화살표" />
            </div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="py-3 ml-3">
          <h4 className="text-black-2 text-lg font-semibold">
            요청사항
            <strong className="text-black-6 text-sm font-normal">(선택)</strong>
          </h4>
        </div>
        <div className="mx-2">
          <textarea
            className="w-full h-24 bg-grey-transparent p-2 rounded-lg text-xs"
            placeholder="요청사항을 입력해주세요."
          />
        </div>
      </div>

      <div className="p-4">
        <div className="py-3 ml-3">
          <h4 className="text-black-2 text-lg font-semibold">총 결제금액</h4>
        </div>
        <div className="flex justify-between mx-2 py-4 px-8 bg-pink-transparent rounded-lg">
          <div className="text-black-4 text-xs font-medium leading-loose">
            <p>상품가격</p>
            <p>옵션금액</p>
            <p>할인금액</p>
          </div>
          <div className="text-right text-black-2 text-sm font-semibold leading-normal">
            <p>
              876,543
              <strong className="text-black-4 text-xxs font-normal">원</strong>
            </p>
            <p>
              876,543
              <strong className="text-black-4 text-xxs font-normal">원</strong>
            </p>
            <p>
              100,000
              <strong className="text-black-4 text-xxs font-normal">원</strong>
            </p>
          </div>
        </div>
        
        <div className="flex justify-between mx-2 pt-4 px-8">
          <div className="flex items-center text-pink text-xs font-medium">
            <p>총 결제금액</p>

          </div>
          <div className="text-pink-main text-xl font-bold">
            <p>
              100,000<strong>원</strong>
            </p>
          </div>
        </div>
        <div className="mt-2 mx-2.5">
          <p className="text-grey-b text-xxs font-normal">
            항공권 또는 항공권이 포함된 상품의 경우, 표시되는 상품요금은 예상
            유류할증료와 제세공과금이 포함된 가격이며, 발권일/환율 등에 따라
            변동 될 수 있습니다.
          </p>
        </div>
      </div>

      <div className="p-4">
        <div className="py-3 ml-3">
          <h4 className="text-black-2 text-lg font-semibold">
            약관동의
            <strong className="text-black-4 text-sm font-medium">(필수)</strong>
          </h4>
          <div className="mt-4 mx-4">
            <div className="flex ml-2 mb-4">
              <Image src={CheckIcon} alt="체크전이미지" />
              <p className="ml-2 text-black-2 text-lg font-semibold">
                전체동의
                <strong className="ml-1 text-xs font-normal">
                  (선택 포함)
                </strong>
              </p>
            </div>
            <div className="flex bg-pink-transparent-2 p-2 my-2 rounded-lg relative">
              <Image src={CheckIcon} alt="체크전이미지" />
              <p className="ml-2 text-black-4 text-base font-normal">
                취소수수료 동의
              </p>
              <div className="absolute right-4">
                <Image src={RightArrowIcon} alt="우측화살표" />
              </div>
            </div>
            <div className="flex bg-pink-transparent-2 p-2 my-2 rounded-lg relative">
              <Image src={CheckIcon} alt="체크전이미지" />
              <p className="ml-2 text-black-4 text-base font-normal">
                개인정보 수집, 이용
              </p>
              <div className="absolute right-4">
                <Image src={RightArrowIcon} alt="우측화살표" />
              </div>
            </div>
            <div className="flex bg-pink-transparent-2 p-2 my-2 rounded-lg relative">
              <Image src={CheckIcon} alt="체크전이미지" />
              <p className="ml-2 text-black-4 text-base font-normal">
                고유식별정보 수집, 이용
              </p>
              <div className="absolute right-4">
                <Image src={RightArrowIcon} alt="우측화살표" />
              </div>
            </div>
            <div className="flex bg-pink-transparent-2 p-2 my-2 rounded-lg relative">
              <Image src={CheckIcon} alt="체크전이미지" />
              <p className="ml-2 text-black-4 text-base font-normal">
                개인정보 제3자 제공동의
              </p>
              <div className="absolute right-4">
                <Image src={RightArrowIcon} alt="우측화살표" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 border-b">
        <p className="text-black-5 text-xs text-center font-normal">
          <span className="mx-4">서비스 이용약관</span>/
          <span className="mx-4">개인정보 처리방침</span>/
          <span className="mx-4">공지사항</span>
        </p>
        <p className="text-black-4 text-xs text-center font-semibold my-5">
          LET’S
        </p>
        <p className="mx-2 mb-4 text-black-8 text-xxs font-normal">
          LET’S는 항공사가 제공하는 개별 항공권 및 여행사가 제공하는 일부 여
          행상품에 대하여 통신판매중개자의 지위를 가지며, 해당상품, 상품정보,
          거래에 관한 의무와 책임은 판매자에게 있습니다. 항공권 또는 항공권이
          포함된 경우, 표시되는 상품 요금은 예상 유류할증료와 제세공과금이
          포함된 가격이며, 발권일 / 환율 등에따라 변 동될 수 있습니다. LET’S은
          통신판매중개 자로서 통신판매의 당사자가 아니므로, 개별 판매자가 등록한
          오픈마켓 상품에대해서 LET’S은 일체 책임을 지지 않습니다.
        </p>
      </div>

      <div className="px-4">
        <div className="flex justify-around mx-4 px-6 py-2">
          <div className="flex items-center text-black-4 text-base font-semibold">
            <p>총 결제금액</p>
          </div>
          <div className="text-right">
            <p className="text-pink-main text-[26px] font-bold">100,000원</p>
          </div>
        </div>
        <p className="mx-2 mb-4 text-black-8 text-xxs font-normal">
          항공권 또는 항공권이 포함된 상품의 경우, 표시되는 상품요금은 예상
          유류할증료와 제세공과금이 포함된 가격이며, 발권일/환율 등에 따라 변동
          될 수 있습니다.
        </p>

        <div className="flex justify-center my-6">

          <Button
            text="예약하기"
            styleClass="rounded-lg bg-pink text-white py-2 px-24 cursor-pointer"
            onClickFn={onComplete}
          />
        </div>
      </div>
    </div>
  );
};

export default ReservationInfo;
