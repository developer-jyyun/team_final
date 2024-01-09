"use client";

import Button from "@/app/_component/common/atom/Button";

const HomeProsAndCons = () => {
  return (
    <div className="w-[90%]">
      <p className="font-bold pb-2">당신의 선택은?</p>
      <div className="flex">
        <Button
          text="여행은 휴식이지 VS 온 김에 다 해보자!"
          styleClass="w-full h-[56px] bg-pink font-bold rounded-lg"
        />
      </div>
    </div>
  );
};

export default HomeProsAndCons;
