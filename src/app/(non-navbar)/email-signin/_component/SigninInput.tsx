"use client";

import Button from "@/app/_component/common/atom/Button";
import useInput from "@/hooks/useInput";
import useSignupStateStore from "@/store/useSignupStateStore";
import { useRef, useState } from "react";
import CertificationCount from "./CertificationCount";
import SignupErrorText from "./SignupErrorText";

interface Props {
  title: string;
  type: string;
  name: string;
  id: string;
  theme?: string;
  errorMessage?: string;
  onClickFn?: VoidFunction;
  onInputChange?: (value: string) => void;
}

const SigninInput = ({
  title,
  type,
  name,
  id,
  theme,
  errorMessage,
  onClickFn,
  onInputChange,
}: Props) => {
  const signupState = useSignupStateStore();

  const [focus, setFocus] = useState(false);
  const input = useInput("");

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    input.onChange(e);
    if (onInputChange) {
      onInputChange(e.target.value);
    }
  };

  return (
    <div className="relative flex flex-col w-[327px] mb-12 web:w-full">
      <div
        className={`absolute ${focus ? "-top-2" : "top-1/2"} ${
          focus ? "left-0" : "left-4"
        } -translate-y-1/2 ${
          focus ? "text-black-2" : "text-grey-4"
        } duration-500 ${focus ? "text-[13px]" : "text-4"}`}
        onClick={handleFocus}
      >
        {title}
      </div>
      <input
        className="h-[50px] bg-grey-1 outline-none border-none rounded-lg pl-4 caret-blue"
        type={type}
        name={name}
        id={id}
        value={input.value}
        onChange={handleInputChange}
        ref={inputRef}
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => {
          if (input.value === "") setFocus(false);
        }}
      />

      {theme === "button" && (
        <Button
          text={signupState.isCertification ? "다시 요청" : "인증 요청"}
          theme="md"
          styleClass="text-blue rounded-lg bg-white absolute top-1/2 right-[6px] -translate-y-1/2  disabled:text-blue-transparent  disabled:bg-[rgba(255,255,255,0.7)]"
          disabled={input.value === ""}
          onClickFn={onClickFn}
        />
      )}

      {theme === "count" && (
        <div className="text-blue text-sm absolute top-1/2 right-4 -translate-y-1/2 web:right-6">
          <CertificationCount />
        </div>
      )}

      {errorMessage && (
        <div className="absolute top-[calc(100%+8px)] left-4">
          <SignupErrorText text={errorMessage} />
        </div>
      )}
    </div>
  );
};

export default SigninInput;
