import ReservationItem from "../../_component/ReservationItem";
import MenuSection from "../_component/MenuSection";

// TODO:: 여백 색상 상세 디자인 확정 시 작업
const ReservationPage = () => {
  return (
    <MenuSection text="예약 내역" backUrl="/my">
      <h2 className="font-bold text-black-2 text-lg mb-8">
        총 <span className="text-pink-main ">N</span>
        개의 패키지 상품
      </h2>
      <ul>
        <ReservationItem theme="reservationMenu" hashTag />
      </ul>
    </MenuSection>
  );
};

export default ReservationPage;
