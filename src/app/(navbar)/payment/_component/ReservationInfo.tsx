import React from "react";

const ReservationInfo = () => {
  return (
    <div>
      <div className="p-4 border-b-2 font-bold">
        <div className="py-3">
          <h4 className="text-lg">예약상품정보</h4>
        </div>
        <div className="ml-4">
          <div className="flex gap-4 items-center my-2">
            <span className="min-w-max mr-3">상품명</span>
            <p>[베스트셀러][북해도4일]가족과함께~</p>
          </div>
          <div className="flex gap-4 items-center my-2">
            <span className="min-w-max">여행기간</span>
            <div>
              <p className="text-red">3월 4일</p>
              <p>03.05(화) ~ 03.08(금)</p>
            </div>
          </div>
          <div className="flex gap-4 items-start my-2">
            <span className="min-w-max">결제정보</span>
            <div>
              <p className="text-red">상담 후 결제</p>
              <p>
                예약을 신청한 후 담당자와 상담을 통해 가격 및 예약을 확정합니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 border-b-2 font-bold relative">
        <div className="py-3">
          <h4 className="text-lg">예약자 정보</h4>
        </div>
        <div className="ml-4">
          <div className="flex gap-4 items-center my-2">
            <span className="min-w-max mr-4">예약자</span>
            <p>김렛츠고</p>
          </div>
          <div className="flex gap-4 items-center my-2">
            <span className="min-w-max mr-4">이메일</span>
            <p>letswinnerone@naver.com</p>
          </div>
          <div className="flex gap-4 items-start my-2">
            <span className="min-w-max">전화번호</span>
            <p>010-1234-5678</p>
          </div>
        </div>
        <div className="absolute p-1 top-4 right-4 rounded-3xl bg-pink text-white text-xs">
          예약 정보 수정
        </div>
      </div>

      <div className="p-4 border-b-2 font-bold relative">
        <div className="py-3">
          <h4 className="text-lg">여행자 정보</h4>
        </div>
        <div className="flex justify-around">
          <div className="flex flex-col relative">
            <span className="px-6 mb-2">성인</span>
            <select className="border-2 px-6 appearance-none">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
            <div className="pointer-events-none absolute top-9 right-0 flex items-center px-2 text-pink text-sm">
              ▼
            </div>
          </div>

          <div className="flex flex-col relative">
            <span className="px-6 mb-2">소아</span>
            <select className="border-2 px-6 appearance-none">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
            <div className="pointer-events-none absolute top-9 right-0 flex items-center px-2 text-pink text-sm">
              ▼
            </div>
          </div>

          <div className="flex flex-col relative">
            <span className="px-6 mb-2">유아</span>
            <select className="border-2 px-6 appearance-none">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
            <div className="pointer-events-none absolute top-9 right-0 flex items-center px-2 text-pink text-sm">
              ▼
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 border-b-2 font-bold ">
        <div className="py-3">
          <h4 className="text-lg">요청사항(선택)</h4>
        </div>
        <div className="mx-4">
          <textarea
            className="shadow-lg p-4 border rounded w-full"
            placeholder="요청사항을 입력해주세요."
          />
        </div>
      </div>

      <div className="p-4 border-b-2 font-bold ">
        <div className="py-3">
          <h4 className="text-lg">총 결제금액</h4>
        </div>
        <div className="flex justify-between mx-4 p-6 border-2">
          <div>
            <p>상품가격 :</p>
            <p>옵션금액 :</p>
            <p>할인금액 :</p>
            <p className="text-red text-lg">총결제금액 :</p>
          </div>
          <div className="text-right">
            <p>4,196,000원</p>
            <p>0원</p>
            <p>0원</p>
            <p className="text-red text-lg">4,196,000원</p>
          </div>
        </div>
        <div className="mt-6 mb-4">
          <p className="text-sm">
            항공권 또는 항공권이 포함된 상품의 경우, 표시되는 상품요금은 예상 유
            류할증료와 제세공과금이 포함된 가격이며, 발권일/환율 등에 따라 변동
            될 수 있습니다.
          </p>
        </div>
      </div>

      <div className="p-4 border-b-2 font-bold ">
        <div className="py-3">
          <h4 className="text-lg">약관동의(필수)</h4>
        </div>
        <div className="flex justify-between mx-4 p-6 border-2">
          <div>
            <p>모든 약관에 동의</p>
            <p>취소수수료 특약</p>
          </div>
          <div className="text-right">
            <p>
              <input type="checkbox" />
              동의
            </p>
            <p>
              <input type="checkbox" />
              동의
            </p>
          </div>
        </div>
        <div className="mt-6 mb-4">
          <p className="text-xs">
            • 취소수수료 적용 기준: 표준약관
            <br />
            - 여행개시 30일 전까지 통보 시 : 계약금 환급 (위약금 없이 계약 취소)
            <br />
            - 여행개시 20일 전까지 통보 시 : 여행요금의 10% 배상
            <br />
            - 여행개시 10일 전까지 통보 시 : 여행요금의 15% 배상
            <br />
            - 여행개시 8일 전까지 통보 시 : 여행요금의 20% 배상
            <br />
            - 여행개시 1일 전까지 통보 시 : 여행요금의 30% 배상
            <br />
            - 여행 당일 통보시 : 여행요금의 50% 배상
            <br />
            ※단, 항공권 발권 이후에는 위 수수료 외에 항공권 취소 수수료가 별
            도로 부과됩니다. (1인 12만원)
            <br />
            <br />
            자세히 보기를 통해 전체 취소수수료 적용 기준을 반드시 확인 부탁드
            립니다.
            <br />
            <br />
            • 여행 취소시 국외여행표준약관 제16조 제1항에 따라 소비자분쟁
            해결규정(공정거래위원회 고시)를 적용하여 위의 비율로 취소수수료 가
            부과됩니다.
            <br />
            <br />
            • 당사의 귀책사유로 여행이 취소되는 경우에도 위 여행 취소수수료
            비율을 적용하여 고객에게 배상합니다.
            <br />
            <br />
            • 본 여행상품은 청약에 대한 승인의 의사표시로써 예약금을 지불한
            시점부터 계약이 성립되며, 계약해제 요청 시에는 귀책사유에 따라
            취소수수료가 부과됩니다.
            <br />
            <br />• 취소는 업무시간 내 접수 시 확인 및 적용이 가능합니다. 업무시
            간 외 접수한 경우에는 익일(영업일이 아닌 경우 다음 영업일)에 접수 한
            것으로 간주됩니다.
            <u>
              업무시간은 월요일~금요 일 09:00~18:00 이며, 주말 및 공휴일 그리고
              주주중 09:00~18:00 외 시간은 업무시간에 해당되지 않습니다.
            </u>
            (예. 토/일/월요일 출발상품은 금요일 업무 종료 전까지 취소 하 셔야
            합니다.)
            <br />
            <br />
            • 고객은 계약 취소와 관련하여 취소수수료(여행사 인건비 포함) 부 과
            내역에 관한 구체적 증빙과 설명을 여행사에 요구할 수 있으며, 여행사는
            관련 설명과 증빙을 제시하고 취소수수료 규정과 차액이 있 는 경우
            환급합니다. (단, 항공사 및 숙박업체 등의 증빙을 여행사 가 확보하는
            시점까지 고객에게 증빙 제공을 유예할 수 있습니다.)
            <br />
            <br />
            <u>
              • 최소 출발인원이 미충족되어 여행출발이 불가한 경우에는 국외여
              행표준약관 제17조에 따라 여행사는 여행출발 7일 전까지 여행계의 을
              해제하고 고객님께 통복하여 드립니다.
            </u>
            <br />
            - 여행 개시 7일 전까지 계약 해제 통지 : 계약금 환급 <br />
            - 여행 개시 1일 전까지 계약 해제 통지 : 여행요금의 30% 배상 <br />
            - 여행 출발 당일 계약 해제 통지 : 여행요금의 50% 배상
            <br />
            <br />
            <b className="text-red">
              • 발권이 완료 된 후 취소 시 약관상 수수료 + 발권취소수수료 1인
              12만원씩 별도 발생 됩니다.
            </b>
            <br />
            <br />
            •※ 항공 및 호텔은 현지 사정에 따라 변경될 수 있으며, 최소출발인원 이
            구성되지 않으면, 여행이 취소될 수 있습니다.
          </p>
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            className="rounded-lg bg-pink text-white py-2 px-24 cursor-pointer"
          >
            동의합니다.
          </button>
        </div>
        <div className="flex justify-between mx-10 p-6">
          <div className="text-base">
            <p>여행약관</p>
            <p>개인정보 수집, 이용</p>
            <p>고유식별정보 수집, 이용</p>
            <p>개인정보 제 3자 제공 동의</p>
          </div>
          <div className="text-right text-base">
            <p>
              <input type="checkbox" />
              동의
            </p>
            <p>
              <input type="checkbox" />
              동의
            </p>
            <p>
              <input type="checkbox" />
              동의
            </p>
            <p>
              <input type="checkbox" />
              동의
            </p>
          </div>
        </div>
      </div>

      <div className="p-4 border-b-4 font-bold ">
        <div className="py-3" />
        <p className="text-xs text-center">
          서비스 이용약관 / 개인정보 처리방침 / 여행자보험 가입안내 / 공지사항
        </p>
        <p className="text-xs text-center my-4">LET’S</p>
        <p className="text-xs text-center">
          LET’S는 항공사가 제공하는 개별 항공권 및 여행사가 제공하는 일부 여
          행상품에 대하여 통신판매중개자의 지위를 가지며, 해당상품, 상품정보,
          거래에 관한 의무와 책임은 판매자에게 있습니다. 항공권 또는 항공권이
          포함된 경우, 표시되는 상품 요금은 예상 유류할증료와 제세공과금이
          포함된 가격이며, 발권일 / 환율 등에따라 변 동될 수 있습니다. LET’S은
          통신판매중개 자로서 통신판매의 당사자가 아니므로, 개별 판매자가 등록한
          오픈마켓 상품에대해서 LET’S은 일체 책임을 지지 않습니다.
        </p>
      </div>

      <div className="p-4 font-bold ">
        <div className="py-3" />
        <div className="flex justify-around mx-4 p-6">
          <div>
            <p>총결제금액</p>
          </div>
          <div className="text-right">
            <p className="text-red text-lg">4,196,000원</p>
          </div>
        </div>
        <p className="text-xs text-grey-3 mb-4">
          항공권 또는 항공권이 포함된 상품의 경우, 표시되는 상품요금은 예상
          유류할증료와 제세공과금이 포함된 가격이며, 발권일/환율 등에 따라 변동
          될 수 있습니다.
        </p>
        <div className="flex justify-center">
          <button
            type="button"
            className="rounded-lg bg-pink text-white py-2 px-24 cursor-pointer"
          >
            예약하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReservationInfo;
