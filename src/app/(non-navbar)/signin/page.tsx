import { Metadata } from "next";
import Link from "next/link";
import KakaoLoginButton from "./_component/KakaoLoginButton";
import NaverLoginButton from "./_component/NaverLoginButton";

export const metadata: Metadata = {
  title: "Let's - 로그인",
};

const SigninPage = ({
  searchParams,
}: {
  searchParams: { departDate: string };
}) => {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center items-center mt-[180px]">
        <img
          src="/assets/mainTitle.svg"
          alt="메인 타이틀"
          width="35%"
          className="mb-4"
        />
        <p className="text-lg text-black-4 font-normal web:text-2xl">
          내 손안의 최고 여행 선택!
        </p>
      </div>
      <div className="flex flex-col justify-center items-center mt-20">
        <div className="mb-4">
          <NaverLoginButton />
        </div>
        <div className="mb-8">
          <KakaoLoginButton />
        </div>
        <Link
          href={
            searchParams.redirect
              ? `/email-signin?redirect=${searchParams.redirect}`
              : `/email-signin`
          }
          className="text-black-4 text-xs font-medium web:text-base"
        >
          이메일로 시작하기 &gt;
        </Link>
      </div>
    </div>
  );
};

export default SigninPage;
