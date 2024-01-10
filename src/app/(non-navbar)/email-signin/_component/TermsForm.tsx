"use client";

import Button from "@/app/_component/common/atom/Button";
import useSignupStateStore from "@/store/useSignupStateStore";
import { useRouter } from "next/navigation";
import { useState } from "react";
import AllselectCheckbox from "./AllselectCheckbox";
import Checkbox from "./Checkbox";

interface Props {
  setTermsForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const TermsForm = ({ setTermsForm }: Props) => {
  const signupState = useSignupStateStore();
  const router = useRouter();

  const [action, setAction] = useState(true);

  const handleOutsideClick = () => {
    setAction(false);
    setTimeout(() => {
      setTermsForm(false);
    }, 200);
  };

  const handleAgree = () => {
    signupState.setIsSignup(true);
    router.push("/email-signup");
  };

  return (
    <div
      className={`absolute top-0 left-0 w-full h-full ${
        action
          ? "animate-transparencyAnimation"
          : "animate-transparencyAnimationReverse"
      } overflow-hidden`}
      onClick={handleOutsideClick}
    >
      <div
        className={`absolute ${
          action
            ? "animate-positionTopAnimation"
            : "animate-positionTopAnimationReverse"
        } left-1/2 -translate-x-1/2 w-full max-w-[500px] bg-white rounded-t-lg`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="relative h-16">
          <button
            type="button"
            className="absolute left-5 top-1/2 -translate-y-1/2"
            onClick={handleOutsideClick}
          >
            <img src="./icons/exitButtonIcon.svg" alt="나가기 버튼" />
          </button>
          <span className="text-lg text-black-1 font-semibold absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
            약관 동의
          </span>
        </div>
        <div className="w-[87%] m-auto">
          <AllselectCheckbox text="전체 동의" subText="(선택 포함)" />
          <Checkbox
            required
            text="만 14세 이상 이용, 서비스 이용약관, 개인정보 수집 및 동의"
          />
          <Checkbox required={false} text="개인 정보 수집 및 이용 동의" />
          <Checkbox
            required={false}
            text="숙소 특가, 쿠폰 등 마케팅 수신 동의"
            subText="마케팅 정보는 문자, E-mail, Push 알림으로 받을 수 있으며 동의
                여부는 알림 설정에서 확인 가능합니다."
          />
          <Checkbox required={false} text="위치 정보 이용 약관 동의" />
        </div>

        <div className="w-[327px] m-auto my-4 web:w-[87%]">
          <Button
            text="동의하고 계속하기"
            onClickFn={handleAgree}
            theme="wide"
          />
        </div>
      </div>
    </div>
  );
};

export default TermsForm;
