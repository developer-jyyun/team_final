"use client";

import Button from "@/app/_component/common/atom/Button";
import { useRouter } from "next/navigation";

const HomeHashtags = () => {
  const router = useRouter();
  return (
    <section className="w-full px-6 pb-4 flex items-center justify-center">
      <Button
        text="3초만에 내가 원하는 여행 찾기 >"
        styleClass="flex items-center justify-center w-full h-[64px] pl-4 py-5 web:h-20
                    text-[18px] web:text-[22px] font-bold bg-custom-gradient-pink-4 text-white text-center tracking-widest rounded-lg"
        onClickFn={() => router.push("/search-filter")}
      />
    </section>
  );
};

export default HomeHashtags;
