"use client";

import SigninInput from "@/app/(non-navbar)/email-signin/_component/SigninInput";
import Button from "@/app/_component/common/atom/Button";
import Dialog from "@/app/_component/common/layout/Dialog";
import usePostSigninMutation from "@/hooks/query/usePostSigninMutation";
import usePostSignupMutation from "@/hooks/query/usePostSignupMutation";
import useSignupInfoStore from "@/store/useSignupInfoStore";
import useSignupStateStore from "@/store/useSignupStateStore";
import validatePassword from "@/utils/validatePassword";
import { useState } from "react";

interface Props {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const EnterPassword = ({ setStep }: Props) => {
  const signupState = useSignupStateStore();
  const signupInfo = useSignupInfoStore();

  const [passwordValue, setPasswordValue] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");

  const [modal, setModal] = useState(false);

  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [verifyErrorMessage, setVerifyErrorMessage] = useState("");

  const { mutateAsync: signup } = usePostSignupMutation({
    email: signupInfo.email,
    password: passwordValue,
    isTermsAgreed: signupState.certificated,
    username: signupInfo.name,
  });

  const { mutateAsync: signin } = usePostSigninMutation({
    email: signupInfo.email,
    password: passwordValue,
  });

  const handleNextStep = async () => {
    if (!validatePassword(passwordValue)) {
      setPasswordErrorMessage("영문+숫자+특수문자 8~20자리 입력해주세요!");
    } else {
      setPasswordErrorMessage("");
    }

    if (passwordValue !== verifyPassword) {
      setVerifyErrorMessage("비밀번호를 확인해 주세요!");
    } else {
      setVerifyErrorMessage("");
    }

    if (validatePassword(passwordValue) && passwordValue === verifyPassword) {
      const res = await signup();

      if (res.code === 200) {
        const signinRes = await signin();
        if (signinRes.code === 200) {
          signupState.setIsSignup(false);
          setStep(4);
        }
      } else if (res.message === "이미 가입된 회원입니다.") {
        setModal(true);
      }
    }
  };

  const handlePasswordInputChange = (inputValue: string) => {
    setPasswordValue(inputValue);
    if (passwordErrorMessage !== "") setPasswordErrorMessage("");
  };
  const handleVerifyInputChange = (inputValue: string) => {
    setVerifyPassword(inputValue);
    if (verifyErrorMessage !== "") setVerifyErrorMessage("");
  };

  return (
    <div className="relative flex flex-col items-center pt-11 h-full px-6">
      <Dialog
        isOpen={modal}
        type="alert"
        message="이미 가입된 회원입니다."
        onClose={() => {
          setModal(false);
        }}
      />
      <SigninInput
        id="password"
        name="password"
        title="비밀번호 (영문+숫자+특수문자 8~20자리)"
        type="password"
        onInputChange={handlePasswordInputChange}
        errorMessage={passwordErrorMessage}
      />
      <SigninInput
        id="verify-password"
        name="verify-password"
        title="비밀번호 확인"
        type="password"
        onInputChange={handleVerifyInputChange}
        errorMessage={verifyErrorMessage}
      />
      <div className="flex flex-col justify-end w-full grow mb-3">
        <div className="mt-6">
          <Button
            text="다음"
            theme="wide"
            onClickFn={handleNextStep}
            disabled={passwordValue === "" || verifyPassword === ""}
          />
        </div>
      </div>
    </div>
  );
};

export default EnterPassword;
