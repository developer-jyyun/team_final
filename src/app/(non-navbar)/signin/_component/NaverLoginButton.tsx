"use client";

// import getNaverAuth from "@/api/signin/getNaverAuth";

const NaverLoginButton = () => {
  const handleNaverAuth = async () => {
    await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/oauth2/authorization/naver`,
    );
  };

  return (
    <button
      type="button"
      className="w-[327px] h-14 rounded-lg bg-[#1FBB64] flex justify-center items-center text-white web:w-[435px] web:text-lg"
      onClick={handleNaverAuth}
    >
      <div className="flex items-center justify-center w-14 h-14 mr-4">
        <img src="/icons/naverLogo.svg" alt="네이버 로고" />
      </div>
      <div>네이버 로그인</div>
    </button>
  );
};

export default NaverLoginButton;
