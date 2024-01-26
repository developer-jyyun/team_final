"use client";

import useSignupInfoStore from "@/store/useSignupInfoStore";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const SignupComplete = () => {
  const signupInfo = useSignupInfoStore();

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    setTimeout(() => {
      if (searchParams.get("redirect"))
        router.push(`${searchParams.get("redirect")}`);
      else router.push("/");
    }, 1000);
  }, [router]);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div
        className="w-[250px] h-[250px] bg-cover bg-no-repeat bg-center web:w-[300px] web:h-[300px]"
        style={{ backgroundImage: "url(./assets/signupComplete.png)" }}
      />
      <p className="text-black-8 text-sm font-medium mt-14 web:mt-7 web:text-base">
        로그인 완료
      </p>
      <b className="text-center text-[28px] font-bold mt-4 web:text-3xl">
        <span className="text-[32px] text-pink web:text-4xl">
          {signupInfo.name}
        </span>
        님, <br />
        어서오세요!
      </b>
    </div>
  );
};

export default SignupComplete;
