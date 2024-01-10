"use client";

import Image from "next/image";

const HomeAdvertisements = () => {
  // 레이아웃 작업 이후 swiper 적용 예정입니다.
  return (
    <div className="w-[90%]">
      <Image
        src="https://images.theconversation.com/files/318067/original/file-20200302-18287-i7bt82.jpg?ixlib=rb-1.1.0&rect=21%2C5%2C3496%2C2747&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip"
        alt="테스트이미지"
        width={300}
        height={300}
        style={{ width: "100%", height: "240px" }}
        className="rounded-lg"
      />
    </div>
  );
};

export default HomeAdvertisements;
