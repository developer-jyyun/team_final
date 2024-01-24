import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import Dialog from "./Dialog";

interface Props {
  children: React.ReactNode | React.ReactNode[];
  isLogin: boolean;
  setReservation: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const BottomSlideModal = ({
  children,
  isLogin,
  setIsLogin,
  setReservation,
}: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const getUrl = () => {
    if (searchParams.get("departDate")) {
      return `${pathname}?departDate=${searchParams.get("departDate")}`;
    } else {
      return `${pathname}`;
    }
  };

  const [action, setAction] = useState(true);

  const handleOutsideClick = () => {
    setAction(false);

    setTimeout(() => {
      setReservation(false);
    }, 200);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full ${
        action
          ? "animate-transparencyAnimation"
          : "animate-transparencyAnimationReverse"
      } overflow-hidden z-[110]`}
      onClick={handleOutsideClick}
    >
      <Dialog
        isOpen={isLogin}
        type="confirm"
        theme="login"
        onClose={() => {
          setIsLogin(false);
        }}
        onConfirm={() => {
          router.push(`/signin?redirect=${getUrl()}`);
        }}
      />
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
