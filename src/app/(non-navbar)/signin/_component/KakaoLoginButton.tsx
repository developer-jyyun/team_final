import Link from "next/link";

const KakaoLoginButton = () => {
  return (
    <Link
      href={`${process.env.NEXT_PUBLIC_BASE_URL}/oauth2/authorization/kakao`}
      className="w-[327px] h-14 rounded-lg bg-yellow flex justify-center items-center text-brown web:w-[435px] web:text-lg"
    >
      <div className="flex items-center justify-center w-14 h-14 mr-4">
        <img src="/icons/kakaoLogo.svg" alt="카카오 로고" />
      </div>
      <div>카카오 로그인</div>
    </Link>
  );
};

export default KakaoLoginButton;
