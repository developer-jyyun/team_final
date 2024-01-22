"use client";

import getKakaoAuth from "@/api/signin/getKakaoAuth";

const KakaoLoginButton = () => {
  const handleKakaoAuth = async () => {
    const res = await getKakaoAuth();

    console.log(res);
  };

  return (
    <button
      type="button"
      className="w-[327px] h-14 rounded-lg bg-yellow flex justify-center items-center text-brown web:w-[435px] web:text-lg"
      onClick={handleKakaoAuth}
    >
      <div className="flex items-center justify-center w-14 h-14 mr-4">
        <img src="/icons/kakaoLogo.svg" alt="카카오 로고" />
      </div>
      <div>카카오 로그인</div>
    </button>
  );
};

export default KakaoLoginButton;
