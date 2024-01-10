"use client";

import Button from "@/app/_component/common/atom/Button";
import SigninInput from "@/app/(non-navbar)/email-signin/_component/SigninInput";
import { useState } from "react";
import validatePassword from "@/utils/validatePassword";
import postSignup from "@/api/signin/postSignup";
import useSignupInfoStore from "@/store/useSignupInfoStore";
import useSignupStateStore from "@/store/useSignupStateStore";
import postSignin from "@/api/signin/postSignin";

interface Props {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const EnterPassword = ({ setStep }: Props) => {
  const signupState = useSignupStateStore();
  const signupInfo = useSignupInfoStore();

  const [passwordValue, setPasswordValue] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");

  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [verifyErrorMessage, setVerifyErrorMessage] = useState("");

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
      const data = await postSignup({
        email: signupInfo.email,
        password: passwordValue,
        isTermsAgreed: signupState.certificated,
        username: signupInfo.name,
      });

      if (data.code === 200) {
        const signinData = await postSignin({
          id: signupInfo.email,
          password: passwordValue,
        });
        if (signinData.code === 200) {
          signupState.setIsSignup(false);
          setStep(4);
        }
      }
    }
  };

  const handlePasswordInputChange = (inputValue: string) => {
    setPasswordValue(inputValue);
  };
  const handleVerifyInputChange = (inputValue: string) => {
    setVerifyPassword(inputValue);
  };

  return (
    <div className="flex flex-col items-center pt-11 h-full px-6">
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
