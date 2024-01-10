"use client";

import SigninInput from "@/app/(non-navbar)/email-signin/_component/SigninInput";
import Button from "@/app/_component/common/atom/Button";
import useSignupInfoStore from "@/store/useSignupInfoStore";
import { useState } from "react";

interface Props {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const EnterName = ({ setStep }: Props) => {
  const signupInfo = useSignupInfoStore();

  const [nameValue, setNameValue] = useState("");

  const handleNextStep = () => {
    signupInfo.updateName(nameValue);
    setStep(3);
  };

  const handleNameInputChange = (inputValue: string) => {
    setNameValue(inputValue);
  };

  return (
    <div className="flex flex-col items-center pt-11 h-full px-6">
      <SigninInput
        id="name"
        name="name"
        title="이름"
        type="text"
        onInputChange={handleNameInputChange}
      />
      <div className="flex flex-col justify-end w-full grow mb-3">
        <div className="mt-6">
          <Button
            text="다음"
            theme="wide"
            onClickFn={handleNextStep}
            disabled={nameValue === ""}
          />
        </div>
      </div>
    </div>
  );
};

export default EnterName;
