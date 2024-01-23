"use client";

import Link from "next/link";

const NaverLoginButton = () => {
  return (
    <Link
      href={`https://api.winnerone.site/oauth2/authorization/kakao`}
      className="w-[327px] h-14 rounded-lg bg-[#1FBB64] flex justify-center items-center text-white web:w-[435px] web:text-lg"
    >
      <div className="flex items-center justify-center w-14 h-14 mr-4">
        <img src="/icons/naverLogo.svg" alt="네이버 로고" />
      </div>
      <div>네이버 로그인</div>
    </Link>
  );
};

export default NaverLoginButton;
