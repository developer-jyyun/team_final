import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Button from "@/app/_component/common/atom/Button";
import usePaymentStore from "@/store/usePaymentStore";
import BottomMyPageMenu from "./BottomMyPageMenu";
import AgreeSection from "./AgreeSection";
import ProgressBar from "./ProgressBar";

interface Props {
  onComplete: () => void;
}

const ReservationInfo = ({ onComplete }: Props) => {
  const { paymentData, setPaymentData } = usePaymentStore((state) => ({
    paymentData: state.paymentData,
    setPaymentData: state.setPaymentData,
  }));
  const [selectedAdult, setSelectedAdult] = useState(paymentData.adult);
  const [selectedChild, setSelectedChild] = useState(paymentData.infant);
  const [selectedInfant, setSelectedInfant] = useState(paymentData.baby);
  const [adultClass, setAdultClass] = useState("text-grey-c");
  const [childClass, setChildClass] = useState("text-grey-c");
  const [infantClass, setInfantClass] = useState("text-grey-c");
  const [adultSelected, setAdultSelected] = useState(false);
  const [childSelected, setChildSelected] = useState(false);
  const [infantSelected, setInfantSelected] = useState(false);
  const [isReservationButtonActive, setIsReservationButtonActive] =
    useState(false);
  const [progress, setProgress] = useState(0);
  const [sectionStatus, setSectionStatus] = useState({
    section1: false,
    section2: false,
    section3: false,
    section4: false,
  });

  const updateProgress = useCallback(() => {
    const sectionsCompleted = [
      adultSelected,
      childSelected,
      infantSelected,
      sectionStatus.section1,
      sectionStatus.section2,
      sectionStatus.section3,
      sectionStatus.section4,
    ].filter(Boolean).length;

    const newProgress = (sectionsCompleted / 7) * 100;
    setProgress(newProgress);
    setIsReservationButtonActive(newProgress === 100);
  }, [
    adultSelected,
    childSelected,
    infantSelected,
    sectionStatus.section1,
    sectionStatus.section2,
    sectionStatus.section3,
    sectionStatus.section4,
  ]);

  const [allAgreedImageSrc, setAllAgreedImageSrc] = useState(
    "/icons/checkIcon2.svg",
  );

  const handleSectionChange = (section: string, isActive: boolean) => {
    setSectionStatus((prev) => {
      const newStatus = { ...prev, [section]: isActive };
      updateProgress();
      return newStatus;
    });
  };

  useEffect(() => {
    updateProgress();
    const allSectionsActive = Object.values(sectionStatus).every(
      (status) => status,
    );
    if (
      (allSectionsActive && allAgreedImageSrc !== "/icons/checkedIcon2.svg") ||
      (!allSectionsActive && allAgreedImageSrc !== "/icons/checkIcon2.svg")
    ) {
      setAllAgreedImageSrc(
        allSectionsActive ? "/icons/checkedIcon2.svg" : "/icons/checkIcon2.svg",
      );
    }
  }, [
    sectionStatus,
    allAgreedImageSrc,
    adultClass,
    childClass,
    infantClass,
    updateProgress,
  ]);

  useEffect(() => {
    setSelectedAdult(paymentData.adult);
    setSelectedChild(paymentData.infant);
    setSelectedInfant(paymentData.baby);
  }, [paymentData.adult, paymentData.infant, paymentData.baby]);

  useEffect(() => {
    setAdultClass(selectedAdult > 0 ? "text-pink-main" : "text-grey-c");
  }, [selectedAdult]);

  useEffect(() => {
    setChildClass(selectedChild > 0 ? "text-pink-main" : "text-grey-c");
  }, [selectedChild]);

  useEffect(() => {
    setInfantClass(selectedInfant > 0 ? "text-pink-main" : "text-grey-c");
  }, [selectedInfant]);

  const handleAdultChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newAdultCount = parseInt(event.target.value, 10);
    setSelectedAdult(newAdultCount);
    setPaymentData({ ...paymentData, adult: newAdultCount });
    setAdultSelected(true);
    updateProgress();
  };

  const handleChildChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newChildCount = parseInt(event.target.value, 10);
    setSelectedInfant(newChildCount);
    setPaymentData({ ...paymentData, infant: newChildCount });
    setChildSelected(true);
    updateProgress();
  };

  const handleInfantChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newInfantCount = parseInt(event.target.value, 10);
    setSelectedInfant(newInfantCount);
    setPaymentData({ ...paymentData, baby: newInfantCount });
    setInfantSelected(true);
    updateProgress();
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return `${text.substring(0, maxLength)}...`;
  };

  return (
    <div>
      <div className="sticky top-0 pb-2 bg-white z-10">
        <ProgressBar progress={progress} />
      </div>
      <div className="p-4">
        <div className="py-3 ml-3">
          <h4 className="text-lg text-black-2 font-semibold">예약상품정보</h4>
        </div>
        {paymentData && (
          <div className="ml-2 p-3.5 bg-pink-transparent rounded-lg">
            <div className="flex gap-12 items-center my-2 ml-3">
              <span className="min-w-max mr-3 text-xs text-black-4 font-normal">
                상품명
              </span>
              {paymentData.title && (
                <p className="text-sm text-black-2 font-semibold truncate w-[22ch]">
                  {truncateText(paymentData.title, 22)}
                </p>
              )}
            </div>
            <div className="flex gap-12 items-center my-2 ml-3">
              <span className="min-w-max text-xs text-black-4 font-normal">
                여행기간
              </span>
              <div className="mt-4">
                {paymentData.tripDay && (
                  <p className="text-pink-main text-sm font-bold ">
                    {paymentData.tripDay}
                  </p>
                )}
                {paymentData.departureDate &&
                  paymentData.departureDate.date &&
                  paymentData.endDate &&
                  paymentData.endDate.date && (
                    <p className="text-black-2 text-sm font-semibold">
                      {paymentData.departureDate.date}(
                      {paymentData.departureDate.dayOfWeek}) ~
                      {paymentData.endDate.date}({paymentData.endDate.dayOfWeek}
                      )
                    </p>
                  )}
              </div>
            </div>
            <div className="flex gap-12 items-start my-4 ml-3">
              <span className="min-w-max mt-0.5 text-xs text-black-4 font-normal">
                결제정보
              </span>
              <div>
                <p className="text-pink-main text-sm font-bold">상담 후 결제</p>
                <p className="w-4/5 text-xs text-black-6 font-normal">
                  예약을 신청한 후 담당자와 상담을 통해 가격 및 예약을
                  확정합니다.
                </p>
              </div>
            </div>
          </div>
        )}
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
        </div>
      </div>

      <div className="p-4 relative">
        <div className="py-3 ml-3">
          <h4 className="text-black-2 text-lg font-semibold">여행자 정보</h4>
        </div>
        <div className="flex justify-around">
          <div className="flex flex-col relative">
            <span className="px-2 mb-2 text-xxs text-black-6">
              성인 <b className="text-grey-a">(만 12세 이상)</b>
            </span>
            <select
              className={`w-[97px] h-[32px] border border-black-9 rounded-md px-8 appearance-none text-base ${adultClass}`}
              value={selectedAdult}
              onChange={handleAdultChange}
            >
              {Array.from({ length: 21 }, (_, i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute top-9 right-0 flex items-center px-2  text-sm">
              <Image
                src="/icons/bottomArrowIcon.svg"
                alt="하단화살표"
                width={18}
                height={18}
              />
            </div>
          </div>

          <div className="flex flex-col relative">
            <span className="px-2 mb-2 text-xxs text-black-6">
              소아 <b className="text-grey-a">(만 12세 미만)</b>
            </span>
            <select
              className={`w-[97px] h-[32px] border border-black-9 rounded-md px-8 appearance-none text-base ${childClass}`}
              value={selectedChild}
              onChange={handleChildChange}
            >
              {Array.from({ length: 21 }, (_, i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute top-9 right-0 flex items-center px-2 text-sm">
              <Image
                src="/icons/bottomArrowIcon.svg"
                alt="하단화살표"
                width={18}
                height={18}
              />
            </div>
          </div>

          <div className="flex flex-col relative">
            <span className="px-2 mb-2 text-xxs text-black-6">
              유아 <b className="text-grey-a">(만 2세 미만)</b>
            </span>
            <select
              className={`w-[97px] h-[32px] border border-black-9 rounded-md px-8 appearance-none text-base ${infantClass}`}
              value={selectedInfant}
              onChange={handleInfantChange}
            >
              {Array.from({ length: 21 }, (_, i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute top-9 right-0 flex items-center px-2 text-sm">
              <Image
                src="/icons/bottomArrowIcon.svg"
                alt="하단화살표"
                width={18}
                height={18}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="py-3 ml-3">
          <h4 className="text-black-2 text-lg font-semibold">
            요청사항
            <b className="text-black-6 text-sm font-normal">(선택)</b>
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
              <b className="text-black-4 text-xxs font-normal">원</b>
            </p>
            <p>
              0<b className="text-black-4 text-xxs font-normal">원</b>
            </p>
            <p>
              0<b className="text-black-4 text-xxs font-normal">원</b>
            </p>
          </div>
        </div>

        <div className="flex justify-between mx-2 pt-4 px-8">
          <div className="flex items-center text-pink text-xs font-medium">
            <p>총 결제금액</p>
          </div>
          <div className="text-pink-main text-xl font-bold">
            <p>
              100,000<b>원</b>
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

      <div className="p-1">
        <div className="py-3 ml-3">
          <h4 className="ml-2 text-black-2 text-lg font-semibold">
            약관동의
            <b className="text-black-4 text-sm font-medium">(필수)</b>
          </h4>

          <div className="mt-4 mx-4">
            <div className="flex ml-2 mb-4">
              <Image
                src={allAgreedImageSrc}
                alt="체크전이미지"
                width={24}
                height={24}
              />
              <p className="ml-2 text-black-2 text-lg font-semibold">
                전체동의
                <b className="ml-1 text-xs font-normal">(선택 포함)</b>
              </p>
            </div>

            <AgreeSection
              title="취소수수료 동의"
              defaultSrc="/icons/checkIcon2.svg"
              activeSrc="/icons/checkedIcon2.svg"
              isActive={sectionStatus.section1}
              onSectionChange={(isActive: boolean) =>
                handleSectionChange("section1", isActive)
              }
            >
              {
                <div>
                  <h5 className="text-black-4 text-sm font-bold mb-3">
                    개인정보 수집 및 이용 목적
                  </h5>
                  <p className="text-black-6 text-xs font-bold">
                    1.제1조 (목적)
                  </p>
                  <p className="text-black-7 text-xs font-normal leading-normal mb-3">
                    이 약관은 LET’S(이하 ‘당사’라 함)과 여행자가 체결한 국외여행
                    <br />
                    계약의 세부 이행 및 준수사항을 정함을 목적으로 합니다.
                  </p>
                  <p className="text-black-6 text-xs font-bold">
                    2.제2조 (용어의 정의)
                  </p>
                  <p className="text-black-7 text-xs font-normal leading-normal mb-3">
                    여행의 종류 및 정의, 해외여행수속대행업의 정의는 다음과
                    같습니다.
                    <br /> 1. 기획여행 : 당사가 미리 여행목적지 및 관광일정,
                    여행자에게 제공될 운송 및 숙식서비스 내용(이하
                    ‘여행서비스’라 함), 여행요금을 정하여 광고 또는 기타
                    방법으로 여행자를 모집하여 실시하는 여행.
                    <br /> 2. 희망여행 : 여행자(개인 또는 단체)가 희망하는
                    여행조건에 따라 당사가 운송ㆍ숙식ㆍ관광 등 여행에 관한
                    전반적인 계획을 수립하여 실시하는 여행.
                    <br /> 3. 해외여행 수속대행(이하 ‘수속대행계약’이라 함) :
                    당사가 여행자로부터 소정의 수속대행요금을 받기로 약정하고,
                    여행자의 위탁에 따라 다음에 열거하는 업무(이하
                    ‘수속대행업무’라 함)를 대행하는 것.
                    <br /> 1) 사증, 재입국 허가 및 각종 증명서 취득에 관한 수속
                    <br /> 2) 출입국 수속서류 작성 및 기타 관련업무
                  </p>
                  <p className="text-black-6 text-xs font-bold">
                    3.제3조 (당사와 여행자 의무)
                  </p>
                  <p className="text-black-7 text-xs font-normal leading-normal mb-3">
                    ① 당사는 여행자에게 안전하고 만족스러운 여행서비스를
                    제공하기 위하여 여행알선 및 안내ㆍ운송ㆍ숙박 등 여행계획의
                    수립 및 실행과정에서 맡은 바 임무를 충실히 수행하여야
                    합니다.
                    <br /> ② 여행자는 안전하고 즐거운 여행을 위하여 여행자간
                    화합도모 및 당사의 여행질서 유지에 적극 협조하여야 합니다.
                  </p>
                  <p className="text-black-6 text-xs font-bold">
                    4.제4조 (계약의 구성)
                  </p>
                  <p className="text-black-7 text-xs font-normal leading-normal mb-3">
                    ① 여행계약은 여행계약서(붙임)와 여행약관ㆍ여행일정표(또는
                    여행 설명서)를 계약내용으로 합니다.
                    <br /> ② 여행계약서에는 당사의 상호, 소재지 및 관광진흥법
                    제9조에 따른 보증보험 등의 가입(또는 영업보증금의 예치 현황)
                    내용이 포함되어야 합니다.
                    <br /> ③ 여행일정표(또는 여행설명서)에는 여행일자별 여행지와
                    관광내용ㆍ교통수단ㆍ쇼핑횟수ㆍ숙박장소ㆍ식사 등 여행실시일정
                    및 당사 제공 서비스 내용과 여행자 유의사항이 포함되어야
                    합니다.
                  </p>
                  <p className="text-black-6 text-xs font-bold">
                    5.제5조 (계약체결의 거절)
                  </p>
                  <p className="text-black-7 text-xs font-normal leading-normal mb-3">
                    당사는 여행자에게 다음 각 호의 1에 해당하는 사유가 있을
                    경우에는 여행자와의 계약체결을 거절할 수 있습니다.
                    <br /> 1. 질병, 신체이상 등의 사유로 개별관리가 필요하거나,
                    단체여행(다른 여행자의 여행에 지장을 초래하는 등)의 원활한
                    실시에 지장이 있다고 인정되는 경우
                    <br />
                    2. 계약서에 명시한 최대행사인원이 초과된 경우
                  </p>
                  <p className="text-black-6 text-xs font-bold">
                    6.제6조 (특약)
                  </p>
                  <p className="text-black-7 text-xs font-normal leading-normal mb-3">
                    당사와 여행자는 관련법규에 위반되지 않는 범위 내에서
                    서면(전자문서를 포함한다. 이하 같다)으로 특약을 맺을 수
                    있습니다. 이 경우 당사는 특약의 내용이 표준약관과 다르고
                    표준약관보다 우선 적용됨을 여행자에게 설명하고 별도의 확인을
                    받아야 합니다.
                  </p>
                  <p className="text-black-6 text-xs font-bold">
                    7.제7조 (계약서 등 교부 및 안전정보 제공)
                  </p>
                  <p className="text-black-7 text-xs font-normal leading-normal mb-3">
                    당사는 여행자와 여행계약을 체결한 경우 계약서와 약관 및
                    여행일정표(또는 여행설명서)를 각 1부씩 여행자에게 교부하고,
                    여행목적지에 관한 안전정보를 제공하여야 합니다. 또한 여행
                    출발 전 해당 여행지에 대한 안전정보가 변경된 경우에도 변경된
                    안전정보를 제공하여야 합니다.
                  </p>
                  <p className="text-black-6 text-xs font-bold">
                    8.제8조 (계약서 및 약관 등 교부 간주)
                  </p>
                  <p className="text-black-7 text-xs font-normal leading-normal mb-3">
                    다음 각 호의 경우 여행계약서와 여행약관 및 여행일정표(또는
                    여행설명서)가 교부된 것으로 간주합니다.
                    <br /> 1. 여행자가 인터넷 등 전자정보망으로 제공된
                    여행계약서, 약관 및 여행일정표(또는 여행설명서)의 내용에
                    동의하고 여행계약의 체결을 신청한 데 대해 당사가 전자정보망
                    내지 기계적 장치 등을 이용하여 여행자에게 승낙의 의사를
                    통지한 경우 <br />
                    2. 당사가 팩시밀리 등 기계적 장치를 이용하여 제공한
                    여행계약서, 약관 및 여행일정표(또는 여행설명서)의 내용에
                    대하여 여행자가 동의하고 여행계약의 체결을 신청하는 서면을
                    송부한 데 대해 당사가 전자정보망 내지 기계적 장치 등을
                    이용하여 여행자에게 승낙의 의사를 통지한 경우
                  </p>
                  <p className="text-black-6 text-xs font-bold">
                    9.제9조 (당사의 책임)
                  </p>
                  <p className="text-black-7 text-xs font-normal leading-normal mb-3">
                    당사는 여행 출발시부터 도착시까지 당사 본인 또는 그 고용인,
                    현지여행사 또는 그 고용인 등(이하 ‘사용인’이라 함)이
                    제3조제1항에서 규정한 당사 임무와 관련하여 여행자에게 고의
                    또는 과실로 손해를 가한 경우 책임을 집니다.
                  </p>
                  <p className="text-black-6 text-xs font-bold">
                    10.제10조 (여행요금)
                  </p>
                  <p className="text-black-7 text-xs font-normal leading-normal mb-3">
                    ① 여행계약서의 여행요금에는 다음 각 호가 포함됩니다. 다만,
                    희망여행은 당사자간 합의에 따릅니다.
                  </p>
                  <ol type="1" className="text-black-7 text-xs font-normal">
                    <li>
                      1. 항공기, 선박, 철도 등 이용운송기관의 운임(보통운임기준)
                    </li>
                    <li>2. 공항, 역, 부두와 호텔사이 등 송영버스요금 </li>
                    <li>3. 숙박요금 및 식사요금</li>
                    <li>4. 안내자경비</li>
                    <li>5. 여행 중 필요한 각종세금</li>
                    <li>6. 국내외 공항ㆍ항만세</li>
                    <li>7. 관광진흥개발기금</li>
                    <li>8. 일정표내 관광지 입장료</li>
                    <li>9. 기타 개별계약에 따른 비용</li>
                  </ol>
                  <p className="text-black-7 text-xs font-normal leading-normal mb-3">
                    ② 제1항에도 불구하고 반드시 현지에서 지불해야 하는 경비가
                    있는 경우 그 내역과 금액을 여행계약서에 별도로 구분하여
                    표시하고, 당사는 그 사유를 안내하여야 합니다. <br />③
                    여행자는 계약체결시 계약금(여행요금 중 10%이하 금액)을
                    당사에게 지급하여야 하며, 계약금은 여행요금 또는
                    손해배상액의 전부 또는 일부로 취급합니다.
                    <br />④ 여행자는 제1항의 여행요금 중 계약금을 제외한 잔금을
                    여행출발 7일전까지 당사에게 지급하여야 합니다. <br />⑤
                    여행자는 제1항의 여행요금을 당사자가 약정한 바에 따라 카드,
                    계좌이체 또는 무통장입금 등의 방법으로 지급하여야 합니다.{" "}
                    <br />⑥ 희망여행요금에 여행자 보험료가 포함되는 경우 당사는
                    보험회사명, 보상내용 등을 여행자에게 설명하여야 합니다.
                  </p>
                  <p className="text-black-6 text-xs font-bold">
                    11.제11조 (여행요금의 변경)
                  </p>
                  <p className="text-black-7 text-xs font-normal leading-normal mb-1">
                    ① 국외여행을 실시함에 있어서 이용운송ㆍ숙박기관에 지급하여야
                    할 요금이 계약체결시보다 5%이상 증감하거나 여행요금에 적용된
                    외화환율이 계약체결시보다 2% 이상 증감한 경우 당사 또는
                    여행자는 그 증감된 금액 범위 내에서 여행요금의 증감을
                    상대방에게 청구할 수 있습니다. <br />② 당사는 제1항의 규정에
                    따라 여행요금을 증액하였을 때에는 여행출발일 15일전에
                    여행자에게 통지하여야 합니다.
                  </p>
                </div>
              }
            </AgreeSection>

            <AgreeSection
              title="개인정보 수집, 이용"
              defaultSrc="/icons/checkIcon2.svg"
              activeSrc="/icons/checkedIcon2.svg"
              isActive={sectionStatus.section2}
              onSectionChange={(isActive) =>
                handleSectionChange("section2", isActive)
              }
            >
              {
                <div>
                  <h5 className="text-black-4 text-sm font-bold mb-3">
                    개인정보 수집 및 이용 목적
                  </h5>
                  <p className="text-black-6 text-xs font-bold mb-2">
                    1.상품 예약 / 상담 및 항공 보험 가입
                  </p>
                  <p className="text-black-7 text-xs font-normal leading-normal">
                    - 수집항목
                  </p>
                  <ul className="text-black-7 text-xs font-normal">
                    <li>• 예약자정보(이름, 이메일, 휴대전화, 일반전화)</li>
                    <li>
                      • 예약자정보(한글이름, 영문이름, 생년월일, 휴대번호, 성별,
                      여권번호, 여권만료일, 국적, 여권사본)
                    </li>
                  </ul>
                  <p className="text-black-6 text-xs font-bold mt-4 mb-2">
                    2.여행자보험 가입
                  </p>
                  <p className="text-black-7 text-xs font-normal leading-normal">
                    - 수집항목
                  </p>
                  <ul className="text-black-7 text-xs font-normal">
                    <li>• 한글명, 영문명, 생년월일, 성별</li>
                  </ul>
                  <p className="text-black-6 text-xs font-bold mt-4 mb-2">
                    3.대금결제서비스 제공
                  </p>
                  <p className="text-black-7 text-xs font-normal leading-normal ">
                    - 수집항목
                  </p>
                  <ul className="text-black-7 text-xs font-normal">
                    <li>
                      • 소유자 명, 카드 번호, 할부 개월, 유효 기간, 카드
                      비밀번호 앞 2자리
                    </li>
                  </ul>
                  <p className="text-black-6 text-xs font-bold mt-4 mb-2">
                    4.현금영수증 발급
                  </p>
                  <p className="text-black-7 text-xs font-normal leading-normal mb-3">
                    - 수집항목
                  </p>
                  <ul className="text-black-7 text-xs font-normal">
                    <li>• 현금영수증카드번호, 휴대폰번호</li>
                  </ul>
                  <p className="text-black-6 text-xs font-bold mt-4 mb-2">
                    5.보유 및 이용기간
                  </p>
                  <p className="text-black-7 text-xs font-normal leading-normal mb-1">
                    회원탈퇴 후 파기됩니다. 다만 관계법령에 의해 보존할 경우 그
                    의무기간 동안 별도 보관되며 불,편법 행위의 방지 및 대응의
                    목적으로 60일간 별도 보관됩니다.
                    <br />
                    <br />※ 동의를 거부할 권리 및 동의 거부에 따른 불이익
                    정보주체는 개인정보 수집 및 이용에 대해 거부할 권리가
                    있습니다.동의를 거부할 경우 상품 예약과 관련한 정보의 수집
                    및 이용이 이루어지지 않으므로 서비스 제공이 불가함을 알려
                    드립니다.
                  </p>
                </div>
              }
            </AgreeSection>

            <AgreeSection
              title="고유식별정보 수집, 이용"
              defaultSrc="/icons/checkIcon2.svg"
              activeSrc="/icons/checkedIcon2.svg"
              isActive={sectionStatus.section3}
              onSectionChange={(isActive) =>
                handleSectionChange("section3", isActive)
              }
            >
              {
                <div>
                  <h5 className="text-black-4 text-sm font-bold mb-3">
                    고유식별정보 수집 및 이용에 대한 안내
                  </h5>
                  <p className="text-black-6 text-xs font-bold mb-2">
                    수집 및 이용 목적
                  </p>
                  <p className="text-black-7 text-xs font-normal leading-normal mb-3">
                    상품 예약 시 출국 가능 여부 파악 및 여행자 본인식별
                    <br /> 수집항목 : 여권번호
                    <br /> 이용기간 : 관계법령에 따른 보존기간
                  </p>
                  <p className="text-black-6 text-xs font-bold mt-4 mb-2">
                    여행자보험 가입
                  </p>
                  <p className="text-black-7 text-xs font-normal leading-normal mb-1">
                    수집항목 : 한글명, 영문명, 생년월일, 성별
                    <br />
                    이용기간 : 관계법령에 따른 보존기간
                    <br />
                    <br />※ 동의를 거부할 권리 및 동의 거부에 따른 불이익
                    정보주체는 개인정보 수집 및 이용에 대해 거부할 권리가
                    있습니다.동의를 거부할 경우 상품 예약과 관련한 정보의 수집
                    및 이용이 이루어지지 않으므로 서비스 제공이 불가함을 알려
                    드립니다.
                  </p>
                </div>
              }
            </AgreeSection>

            <AgreeSection
              title="개인정보 제3자 제공동의"
              defaultSrc="/icons/checkIcon2.svg"
              activeSrc="/icons/checkedIcon2.svg"
              isActive={sectionStatus.section4}
              onSectionChange={(isActive) =>
                handleSectionChange("section4", isActive)
              }
            >
              {
                <div>
                  <h5 className="text-black-4 text-sm font-bold mb-3">
                    개인정보 제 3자 제공
                  </h5>
                  <p className="text-black-7 text-xs font-normal leading-normal mb-2">
                    회사는 여행상품의 예약 및 여행 관련 서비스 등의 업무처리를
                    위하여 고객으로부터 최소한의 필수정보를 수집하며, 제공한
                    모든 개인정보는 별도의 동의가 없는 한 해당 목적 이외의 다른
                    목적으로 사용하지 않습니다.
                    <br />
                    <br /> 고객님은 개인정보 수집 및 이용에 대한 동의를 거부할
                    권리가 있습니다. 동의를 거부할 경우 여행상품 예약 서비스
                    이용이 불가함을 알려드립니다.
                  </p>
                  <p className="text-black-6 text-xs font-bold mt-4 mb-2">
                    1.서비스영역 : 항공 / 해운 / 철도
                  </p>
                  <ul className="text-black-7 text-xs font-normal leading-normal mb-2">
                    <li>- 제공받는 자</li>
                    <li>
                      • 대한항공, 아시아나 항공 및 국내외 항공사,
                      철도업체(코레일), 해운업체(페리,크루즈)
                    </li>
                    <li>- 제공목적</li>
                    <li>
                      • [해외여행] 항공권 예약 및 출국가능여부 파악,
                      해운(크루즈)업체 예약 [국내여행] 항공권, 기차, 선박 예약
                    </li>
                    <li>- 제공항목</li>
                    <li>
                      • 성명(국문/영문), 생년월일, 성별, 연락처, 이메일
                      여권정보(영문명, 여권번호, 여권만료일), 항공사, 마일리지
                      정보, 카드정보
                    </li>
                  </ul>
                  <p className="text-black-6 text-xs font-bold mt-4 mb-2">
                    2.서비스 영역 : 숙박
                  </p>
                  <ul className="text-black-7 text-xs font-normal leading-normal mb-2">
                    <li>- 제공받는 자</li>
                    <li>• 국내 외 호텔 및 리조트/숙박업체</li>
                    <li>- 제공목적</li>
                    <li>• 숙박예약 진행/확인</li>
                    <li>- 제공항목</li>
                    <li>• 성명(국문/영문), 연락처</li>
                  </ul>
                  <p className="text-black-6 text-xs font-bold mt-4 mb-2">
                    3.서비스 영역 : 판매사 (셀러)
                  </p>
                  <ul className="text-black-7 text-xs font-normal leading-normal mb-2">
                    <li>- 제공받는 자</li>
                    <li>• 판매사(셀러)</li>
                    <li>- 제공목적</li>
                    <li>
                      • 투어/입장권/공연 예매, 상품배송 구매자 식별/취소/환불
                      등의 업무처리
                    </li>
                    <li>- 제공항목</li>
                    <li>• 성명, 휴대폰번호</li>
                  </ul>
                  <p className="text-black-6 text-xs font-bold mt-4 mb-2">
                    4.서비스 영역 : 여행자 보험
                  </p>
                  <ul className="text-black-7 text-xs font-normal leading-normal mb-2">
                    <li>- 제공받는 자</li>
                    <li>• 여행자보험 서비스 제공 보험사</li>
                    <li>- 제공목적</li>
                    <li>• 여행자 보험 가입(해외여행상품)</li>
                    <li>- 제공항목</li>
                    <li>• 성명, 생년월일, 성별, 여권번호</li>
                  </ul>
                  <p className="text-black-6 text-xs font-bold mt-4 mb-2">
                    5.보유 및 이용기간 : 이용 목적 달성시 까지
                  </p>
                </div>
              }
            </AgreeSection>
          </div>
        </div>
      </div>

      <div className="p-4 border-b">
        <p className="text-black-5 text-xs text-center font-normal">
          <BottomMyPageMenu href="/my/menu/terms">
            서비스 이용약관
          </BottomMyPageMenu>
          /
          <BottomMyPageMenu href="/my/menu/privacy">
            개인정보 처리방침
          </BottomMyPageMenu>
          /<BottomMyPageMenu href="/my/menu/notice">공지사항</BottomMyPageMenu>
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
            styleClass={`rounded-lg bg-pink text-white py-2 px-24 cursor-pointer ${
              !isReservationButtonActive ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClickFn={isReservationButtonActive ? onComplete : undefined}
          />
        </div>
      </div>
    </div>
  );
};

export default ReservationInfo;
