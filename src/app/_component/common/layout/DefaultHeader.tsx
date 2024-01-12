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
}

const DefaultHeader = ({
  text = "",
  subText = "",
  redirectUrl,
  theme = "default",
  iconUrl,
  iconSrc,
  iconAlt,
}: Props) => {
  const router = useRouter();

  return (
    <div className="flex relative w-full h-[48px]">
      {redirectUrl ? (
        <Link
          href={redirectUrl}
          className="absolute left-[32px] top-1/2 -translate-y-1/2"
        >
          <img src="/icons/leftArrowIcon.svg" alt="왼쪽 화살표" width="24px" />
        </Link>
      ) : (
        <div
          className="absolute left-[32px] top-1/2 -translate-y-1/2"
          onClick={() => {
            router.back();
          }}
        >
          <img src="/icons/leftArrowIcon.svg" alt="왼쪽 화살표" width="24px" />
        </div>
      )}

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
      </div>

      {iconUrl && iconSrc && (
        <Link
          href={iconUrl}
          className="absolute right-[32px] top-1/2 -translate-y-1/2"
        >
          <img src={iconSrc} alt={iconAlt} width="24" />
        </Link>
      )}
    </div>
  );
};

export default DefaultHeader;
