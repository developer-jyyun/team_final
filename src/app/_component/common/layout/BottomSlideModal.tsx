import { useState } from "react";

interface Props {
  children: React.ReactNode | React.ReactNode[];
  setReservation: React.Dispatch<React.SetStateAction<boolean>>;
}

const BottomSlideModal = ({ children, setReservation }: Props) => {
  const [action, setAction] = useState(true);

  const handleOutsideClick = () => {
    setAction(false);

    setTimeout(() => {
      setReservation(false);
    }, 200);
  };

  return (
    <div
      className={`absolute top-0 left-0 w-full h-full ${
        action
          ? "animate-transparencyAnimation"
          : "animate-transparencyAnimationReverse"
      } overflow-hidden z-50`}
      onClick={handleOutsideClick}
    >
      <div
        className={`absolute ${
          action
            ? "animate-positionTopAnimation"
            : "animate-positionTopAnimationReverse"
        } left-1/2 -translate-x-1/2 w-full max-w-[500px] bg-white rounded-t-lg px-6 py-5 web:px-7 web:py-6`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="flex justify-center mb-4">
          <button type="button" onClick={handleOutsideClick}>
            <img
              src="/icons/bottomArrowIcon.svg"
              alt="창 닫기"
              className="web:w-5"
            />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};
export default BottomSlideModal;
