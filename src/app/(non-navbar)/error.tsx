"use client";

import DefaultHeader from "@/app/_component/common/layout/DefaultHeader";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import DetailTypography from "./items/[id]/_component/DetailTypography";

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="w-full">
      <DefaultHeader theme="main" />
      <div className="mt-28">
        <DetailTypography variant="h1" color={4} size={18} align="center">
          오류가 발생했습니다..
        </DetailTypography>
        <div className="flex justify-center mt-6">
          <button
            type="button"
            className="border-[1px] border-solid border-pink-sub3 rounded-[6px] px-2 py-1 m-3"
            onClick={() => reset()}
          >
            다시 시도하기
          </button>
          <button
            type="button"
            className="border-[1px] border-solid border-pink-sub3 rounded-[6px] px-2 py-1 m-3"
            onClick={() => router.push("/")}
          >
            홈으로 돌아가기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
