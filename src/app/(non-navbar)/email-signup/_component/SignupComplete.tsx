"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const SignupComplete = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 1500);
  }, [router]);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div
        className="w-[250px] h-[250px] bg-cover bg-no-repeat bg-center web:w-[300px] web:h-[300px]"
        style={{ backgroundImage: "url(./assets/signupComplete.png)" }}
      />
      <p className="text-grey-4 text-sm font-medium mt-14 web:mt-7 web:text-base">
        로그인 완료
      </p>
      <b className="text-center text-[28px] font-bold mt-4 web:text-3xl">
        <span className="text-[32px] text-pink web:text-4xl">위너원</span>님,{" "}
        <br />
        어서오세요!
      </b>
    </div>
  );
};

export default SignupComplete;
