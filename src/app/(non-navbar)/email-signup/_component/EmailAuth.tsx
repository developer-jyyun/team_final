"use client";

import SigninInput from "@/app/(non-navbar)/email-signin/_component/SigninInput";
import Button from "@/app/_component/common/atom/Button";
import useGetEmailAuthQuery from "@/hooks/query/useGetEmailAuthQuery";
import usePostCertificationMutation from "@/hooks/query/usePostCertificationMutation";
import useSignupInfoStore from "@/store/useSignupInfoStore";
import useSignupStateStore from "@/store/useSignupStateStore";
import validateEmail from "@/utils/validateEmail";
import { useState } from "react";
import SignupEmailInfo from "./SignupEmailInfo";
import SignupEmailWarning from "./SignupEmailWarning";

interface Props {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const EmailAuth = ({ setStep }: Props) => {
  const signupState = useSignupStateStore();
  const signupInfo = useSignupInfoStore();

  const [certification, setCertification] = useState(false);

  const [emailValue, setEmailValue] = useState("");
  const [codeValue, setCodeValue] = useState("");

  const { mutateAsync, isPending } = usePostCertificationMutation({
    email: emailValue,
  });

  const { refetch } = useGetEmailAuthQuery(emailValue, codeValue);

  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [codeErrorMessage, setCodeErrorMessage] = useState("");

  const handleNextStep = async () => {
    if (signupState.isCertification) {
      const res = (await refetch()).data;

      if (res.code === 200) {
        signupState.setCertificated(true);
        signupInfo.updateEmail(emailValue);
        setStep(2);
      } else {
        setCodeErrorMessage(res.message);
      }
    } else {
      setCodeErrorMessage("인증 시간이 만료되었습니다. 다시 요청해 주세요!");
    }
  };

  const handleEmailInputChange = (inputValue: string) => {
    setEmailValue(inputValue);
    signupState.setIsCertification(false);
    if (emailErrorMessage !== "") setEmailErrorMessage("");
  };
  const handleCodeInputChange = (inputValue: string) => {
    setCodeValue(inputValue);
    if (codeErrorMessage !== "") setCodeErrorMessage("");
  };

  const handleCertification = async () => {
    signupState.setIsCertification(false);
    setCertification(false);
    setCodeValue("");
    setCodeErrorMessage("");
    if (!validateEmail(emailValue)) {
      setEmailErrorMessage("잘못된 유형의 이메일 입니다. 수정해주세요.");
    } else {
      setEmailErrorMessage("");

      const res = await mutateAsync();

      if (res.code === 200) {
        signupState.setIsCertification(true);
        setCertification(true);
      } else {
        setEmailErrorMessage("에러...");
      }
    }
  };
  return (
    <div className="flex flex-col items-center pt-11 h-full px-6">
      <SigninInput
        id="email-auth"
        name="email-auth"
        title="이메일"
        type="email"
        theme="button"
        errorMessage={emailErrorMessage}
        onClickFn={handleCertification}
        onInputChange={handleEmailInputChange}
        isPending={isPending}
      />
      <div className="w-full -mt-1">
        <SignupEmailWarning />
      </div>
      {certification && (
        <div className="flex justify-center w-full mt-9">
          <SigninInput
            id="certification"
            name="certification"
            title="인증번호"
            type="text"
            theme="count"
            errorMessage={codeErrorMessage}
            onInputChange={handleCodeInputChange}
          />
        </div>
      )}

      <div className="flex flex-col justify-end w-full grow mb-3">
        <SignupEmailInfo />
        <div className="mt-6">
          <Button
            text="다음"
            theme="wide"
            onClickFn={handleNextStep}
            disabled={codeValue.length !== 8}
          />
        </div>
      </div>
    </div>
  );
};

export default EmailAuth;
