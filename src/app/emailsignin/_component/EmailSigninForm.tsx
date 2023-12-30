"use client";

import useInput from "@/hooks/useInput";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import SigninButton from "./SigninButton";

const EmailSigninForm = () => {
  const router = useRouter();

  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const passwordInputRef = useRef<HTMLInputElement | null>(null);

  const emailInput = useInput("");
  const passwordInput = useInput("");

  const handleEmaildleFocus = () => {
    if (emailInputRef.current) {
      emailInputRef.current.focus();
    }
  };
  const handlePasswordFocus = () => {
    if (passwordInputRef.current) {
      passwordInputRef.current.focus();
    }
  };

  return (
    <form className="flex flex-col items-center mt-11  h-[calc(100dvh-48px-44px)]">
      <div className="relative flex flex-col w-[90%] mb-12">
        <div
          className={`absolute ${emailFocus ? "-top-2" : "top-1/2"} ${
            emailFocus ? "left-0" : "left-[16px]"
          } -translate-y-1/2 ${
            emailFocus ? "text-black-2" : "text-grey-4"
          } duration-500 ${emailFocus ? "text-[13px]" : "text-[16px]"}`}
          onClick={handleEmaildleFocus}
        >
          아이디 또는 이메일
        </div>
        <input
          className="h-[50px] bg-grey-1 outline-none border-none rounded-lg pl-[16px] caret-blue"
          type="text"
          name="signin-email"
          id="signin-email"
          value={emailInput.value}
          onChange={emailInput.onChange}
          ref={emailInputRef}
          onFocus={() => {
            setEmailFocus(true);
          }}
          onBlur={() => {
            if (emailInput.value === "") setEmailFocus(false);
          }}
        />
      </div>
      <div className="relative flex flex-col w-[90%]">
        <div
          className={`absolute ${passwordFocus ? "-top-2" : "top-1/2"} ${
            passwordFocus ? "left-0" : "left-[16px]"
          } -translate-y-1/2 ${
            passwordFocus ? "text-black-2" : "text-grey-4"
          } duration-500 ${passwordFocus ? "text-[13px]" : "text-[16px]"}`}
          onClick={handlePasswordFocus}
        >
          비밀번호
        </div>
        <input
          className="h-[50px] bg-grey-1 outline-none border-none rounded-lg pl-[16px] caret-blue"
          type="password"
          name="signin-password"
          id="signin-password"
          value={passwordInput.value}
          ref={passwordInputRef}
          autoComplete="on"
          onChange={passwordInput.onChange}
          onFocus={() => {
            setPasswordFocus(true);
          }}
          onBlur={() => {
            if (passwordInput.value === "") setPasswordFocus(false);
          }}
        />
      </div>
      <div className="w-[90%] grow flex items-end">
        <SigninButton
          emailInput={emailInput.value}
          passwordInput={passwordInput.value}
        />
      </div>
      <div className="flex mb-20 mt-2 items-center text-[13px] text-black-4 font-[400]">
        <button
          type="button"
          className="p-[8px] ml-[8px] cursor-pointer"
          onClick={() => {
            router.push("/signin");
          }}
        >
          비밀번호 재설정
        </button>
        <span className="w-[1px] h-[22px] bg-grey-3 m-[8px]" />
        <button
          type="button"
          className="p-[8px] mr-[8px] cursor-pointer"
          onClick={() => {
            router.push("/signin");
          }}
        >
          이메일로 회원가입
        </button>
      </div>
    </form>
  );
};

export default EmailSigninForm;
