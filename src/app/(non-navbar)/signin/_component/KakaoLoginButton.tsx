"use client";

// import getKakaoAuth from "@/api/signin/getKakaoAuth";
import Link from "next/link";
// import us

const KakaoLoginButton = () => {
  const handleKakaoAuth = async () => {
    await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/oauth2/authorization/naver`,
      {
        mode: "no-cors",
      },
    );
  };

  return (
    <Link
      href={`
    https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=5bcb0224a48495b71d755a468701f4d4&scope=profile_nickname%20account_email&state=HIwgADI3xA8HaZORrJEUDeoZqRzzs6JkQgQREC5w-Z8%3D&redirect_uri=https://api.winnerone.site/login/oauth2/code/kakao`}
      // type="button"
      className="w-[327px] h-14 rounded-lg bg-yellow flex justify-center items-center text-brown web:w-[435px] web:text-lg"
      onClick={handleKakaoAuth}
    >
      <div className="flex items-center justify-center w-14 h-14 mr-4">
        <img src="/icons/kakaoLogo.svg" alt="카카오 로고" />
      </div>
      <div>카카오 로그인</div>
    </Link>
    // <button
    //   type="button"
    //   className="w-[327px] h-14 rounded-lg bg-yellow flex justify-center items-center text-brown web:w-[435px] web:text-lg"
    //   onClick={handleKakaoAuth}
    // >
    //   <div className="flex items-center justify-center w-14 h-14 mr-4">
    //     <img src="/icons/kakaoLogo.svg" alt="카카오 로고" />
    //   </div>
    //   <div>카카오 로그인</div>
    // </button>
  );
};

export default KakaoLoginButton;
