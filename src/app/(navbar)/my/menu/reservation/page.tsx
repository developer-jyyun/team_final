import InnerSection from "../../_component/InnerSection";
import ReservationItem from "../../_component/ReservationItem";

// TODO:: 여백 색상 상세 디자인 확정 시 작업
const ReservationPage = () => {
  return (
    <InnerSection
      text="예약 내역"
      backUrl="/my"
      iconSrc="/icons/dotMenuIcon.svg"
      iconUrl="/my/menu"
      iconAlt="메뉴 아이콘"
    >
      <h2 className="font-bold text-black-2 text-lg mb-8">
        총 <span className="text-pink-main ">N</span>
        개의 패키지 상품
      </h2>
      <ul>
        <ReservationItem theme="reservationMenu" hashTag />
      </ul>
    </InnerSection>
  );
};

export default ReservationPage;
