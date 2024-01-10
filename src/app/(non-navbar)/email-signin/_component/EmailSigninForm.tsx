"use client";

import postSignin from "@/api/signin/postSignin";
import Button from "@/app/_component/common/atom/Button";
import useSignupStateStore from "@/store/useSignupStateStore";
import validateEmail from "@/utils/validateEmail";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import SigninInput from "./SigninInput";
import TermsForm from "./TermsForm";

const EmailSigninForm = () => {
  const router = useRouter();
  const signupState = useSignupStateStore();

  const [termsForm, setTermsForm] = useState(false);
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setPortalElement(document.getElementById("portal"));
  }, [termsForm]);

  useEffect(() => {
    signupState.setIsCertification(false);
    signupState.setIsSignup(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const [emailErrorMessage, setEmailErrorMessage] = useState("");

  const handleEmailInputChange = (inputValue: string) => {
    setEmailValue(inputValue);
  };
  const handlePasswordInputChange = (inputValue: string) => {
    setPasswordValue(inputValue);
  };

  const openTermsForm = () => {
    setTermsForm(true);
  };

  const handleLogin = async () => {
    if (!validateEmail(emailValue)) {
      setEmailErrorMessage("잘못된 유형의 이메일 입니다. 수정해주세요.");
    } else {
      setEmailErrorMessage("");
      const data = await postSignin({
        id: emailValue,
        password: passwordValue,
      });

      if (data.code === 200) {
        console.log("로그인 성공");
      } else if (data.code === 409) {
        setEmailErrorMessage("입력하신 이메일은 존재하지 않습니다.");
      }
    }
  };

  return (
    <form
      className="flex flex-col items-center mt-11 h-[calc(100dvh-48px-44px)] web:px-6"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <SigninInput
        title="아이디 또는 이메일"
        type="text"
        name="signin-email"
        id="signin-email"
        errorMessage={emailErrorMessage}
        onInputChange={handleEmailInputChange}
      />
      <SigninInput
        title="비밀번호"
        type="password"
        name="signin-password"
        id="signin-password"
        onInputChange={handlePasswordInputChange}
      />

      <div className="w-[327px] grow flex items-end web:w-full">
        <Button
          text="로그인"
          disabled={emailValue === "" || passwordValue === ""}
          theme="wide"
          onClickFn={handleLogin}
        />
      </div>
      <div className="flex mb-20 mt-2 items-center text-[13px] text-black-4 font-normal">
        <Button
          text="비밀번호 재설정"
          theme="md"
          onClickFn={() => {
            router.push("/signin");
          }}
        />
        <span className="w-[1px] h-[22px] bg-grey-3 my-2 mx-4" />
        <Button text="이메일로 회원가입" theme="md" onClickFn={openTermsForm} />
      </div>
      {termsForm && portalElement
        ? createPortal(<TermsForm setTermsForm={setTermsForm} />, portalElement)
        : null}
    </form>
  );
};

export default EmailSigninForm;
