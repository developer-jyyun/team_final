import Image from "next/image";
import type { CompleteData } from "../page";
import ProgressBar from "./ProgressBar";
import Step from "./Step";

interface Props {
  complete: CompleteData;
}

const ReservationDone = ({ complete }: Props) => {
  return (
    <div className="mx-4">
      <div className="sticky top-0 pb-2 bg-white">
        <ProgressBar progress={100} />
      </div>
      <div className="mt-10 mb-5">
        <h3 className="flex">
          <Image
            src="/icons/checkIcon3.svg"
            alt="완료 아이콘"
            width={20}
            height={20}
            className="mr-2"
          />
          예약이 정상적으로 접수되었습니다.
        </h3>
      </div>
      <div
        className="p-4 bg-pink-2
     rounded-lg"
      >
        <div className="flex gap-12 items-center my-2 ml-3">
          <span className="min-w-max mr-3 text-xs text-black-4 font-normal">
            예약번호
          </span>
          <p className="ml-3 text-sm text-black-2 font-semibold">
            {complete.orderCode}
          </p>
        </div>
        <div className="flex gap-12 my-3 ml-3">
          <span className="min-w-max mr-3 text-xs text-black-4 font-normal">
            예약자 정보
          </span>
          <div className="flex flex-col leading-normal">
            <p className="text-sm text-black-2 font-semibold">
              {complete.myInfo.username}
            </p>
            <p className="text-sm text-black-2 font-semibold">
              {complete.myInfo.email}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10 ml-2">
        <h4 className="text-black-4 text-sm font-semibold">
          예약하기가 완료되셨나요?
          <b className="ml-1 text-black-6 text-xs font-normal">
            (예약하기 이후 단계입니다.)
          </b>
        </h4>
      </div>
      <div className="mt-3 px-6 py-3 bg-grey-transparent rounded-lg">
        <Step number="1" description="예약접수 / 완료 (현재단계)" current />
        <Step number="2" description="예약접수 / 완료 (현재단계)" current />
        <Step number="3" description="상품 결제" current />
        <Step number="4" description="예약 확정" current />
        <Step number="5" description="출발" current />
      </div>
    </div>
  );
};

export default ReservationDone;
