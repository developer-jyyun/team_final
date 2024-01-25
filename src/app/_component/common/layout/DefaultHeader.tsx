"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

interface Props {
  text?: string;
  subText?: string;
  redirectUrl?: string;
  theme?: string;
  iconUrl?: string;
  iconSrc?: string;
  iconAlt?: string;
  back?: boolean;
  onIconClick?: () => void;
}

const DefaultHeader = ({
  text = "",
  subText = "",
  redirectUrl,
  theme = "default",
  iconUrl,
  iconSrc,
  iconAlt,
  onIconClick,
  back = false,
}: Props) => {
  const router = useRouter();

  return (
    <div className="flex sticky w-full h-[48px] top-0 bg-white z-20">
      {/* 
      메인 페이지인지를 판단하기 위한 외부 삼항 연산자
      넘겨받은 theme 값이 default인 경우, 내부 삼항 연산자 로직으로
      default가 아닌 경우(메인 페이지), null을 반환해 화살표 노출하지 않음
      */}
      {theme === "default" ? (
        redirectUrl ? (
          <Link
            href={redirectUrl}
            className="absolute left-[32px] top-1/2 -translate-y-1/2"
          >
            <img
              src="/icons/leftArrowIcon.svg"
              alt="왼쪽 화살표"
              width="24px"
            />
          </Link>
        ) : (
          <button
            type="button"
            className="absolute left-[32px] top-1/2 -translate-y-1/2"
            onClick={() => {
              router.back();
            }}
          >
            <img
              src="/icons/leftArrowIcon.svg"
              alt="왼쪽 화살표"
              width="24px"
            />
          </button>
        )
      ) : null}

      <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 text-[18px] text-black-2 font-semibold">
        {theme === "default" && (
          <>
            <span>{text}</span>
            <span className="font-thin">{subText}</span>
          </>
        )}
        {theme === "main" && (
          <img src="/assets/mainTitle.svg" alt="메인 로고" width={75} />
        )}
        {theme === "main-button" && (
          <button
            type="button"
            className="flex items-center justify-center"
            onClick={() => {
              router.push("/");
            }}
          >
            <img src="/assets/mainTitle.svg" alt="메인 로고" width={75} />
          </button>
        )}
      </div>

      {iconUrl && iconSrc && (
        <Link
          href={iconUrl}
          className="absolute right-[32px] top-1/2 -translate-y-1/2"
        >
          <img src={iconSrc} alt={iconAlt} width="24" />
        </Link>
      )}
      {back && (
        <button
          type="button"
          className="absolute left-[32px] top-1/2 -translate-y-1/2"
          onClick={() => {
            router.back();
          }}
        >
          <img src="/icons/leftArrowIcon.svg" alt="왼쪽 화살표" width="24px" />
        </button>
      )}
      {iconSrc && !iconUrl && (
        <button
          type="button"
          className="absolute right-[32px] top-1/2 -translate-y-1/2"
          onClick={onIconClick}
        >
          <img src={iconSrc} alt={iconAlt} width="24" />
        </button>
      )}
    </div>
  );
};

export default DefaultHeader;
