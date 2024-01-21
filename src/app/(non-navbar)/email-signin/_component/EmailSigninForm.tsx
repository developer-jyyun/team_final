"use client";

import Button from "@/app/_component/common/atom/Button";
import usePostSigninMutation from "@/hooks/query/usePostSigninMutation";
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

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const { mutateAsync } = usePostSigninMutation({
    email: emailValue,
    password: passwordValue,
  });

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

  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const handleEmailInputChange = (inputValue: string) => {
    setEmailValue(inputValue);
    if (emailErrorMessage !== "") setEmailErrorMessage("");
  };
  const handlePasswordInputChange = (inputValue: string) => {
    setPasswordValue(inputValue);
    if (passwordErrorMessage !== "") setPasswordErrorMessage("");
  };

  const openTermsForm = () => {
    setTermsForm(true);
  };

  const handleLogin = async () => {
    if (!validateEmail(emailValue)) {
      setEmailErrorMessage("잘못된 유형의 이메일 입니다. 수정해주세요.");
    } else {
      setEmailErrorMessage("");
      const res = await mutateAsync();

      if (res.code === 200) {
        router.push("/");
      } else if (res.message === "비밀번호가 틀렸습니다.") {
        setPasswordErrorMessage(res.message);
      } else {
        setEmailErrorMessage(res.message);
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
        errorMessage={passwordErrorMessage}
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
      <div className="flex mb-10 mt-2 items-center text-[13px] text-black-4 font-normal">
        <Button
          text="비밀번호 재설정"
          theme="md"
          onClickFn={() => {
            router.push("/signin");
          }}
        />
        <span className="w-[1px] h-[22px] bg-grey-c my-2 mx-4" />
        <Button text="이메일로 회원가입" theme="md" onClickFn={openTermsForm} />
      </div>
      {termsForm && portalElement
        ? createPortal(<TermsForm setTermsForm={setTermsForm} />, portalElement)
        : null}
    </form>
  );
};

export default EmailSigninForm;
