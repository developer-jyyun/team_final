"use client";

import Link from "next/link";
import useMyUpcomingPackageQuery from "@/hooks/query/useMyUpcomingPackageQuery";
import Chip from "./Chip";

const UpcomingPackages = () => {
  const { data, isLoading, isError, error } = useMyUpcomingPackageQuery();

  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>⚠ {error.message} ⚠</div>;
  return (
    <article className="mx-auto mt-8 mb-10">
      <h2 className="w-full font-semibold text-lg tracking-[0.18px] mb-6">
        다가오는 패키지가 있어요!
      </h2>
      <div className="flex flex-wrap relative gap-[18px]">
        <div className=" w-[90px] rounded-md overflow-hidden">
          <img
            className="w-full h-full"
            src="//source.unsplash.com/66x66?osaka"
            alt="다가오는 패키지"
          />
        </div>
        <div className=" flex w-2/3  justify-between items-center">
          <div className="flex flex-col justify-center gap-1 overflow-hidden">
            <p>
              <span className="font-semibold text-xs text-white bg-pink px-2 py-1 rounded-lg">
                D- {data.dday}
              </span>
            </p>
            <h2 className="font-medium text-md truncate max-w-[70%]">
              {data.title}
            </h2>
            <p className="flex flex-row items-center gap-2 text-grey-4">
              <Chip name={data.nationName} />
              <span className="text-[11px] py-1">
                {data.departureDate} - {data.endDate}
              </span>
            </p>
          </div>
          <Link href={`/items/${data.packageId}`}>
            <img src="/icons/rightArrowIcon.svg" alt="자세히 보기 아이콘" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default UpcomingPackages;
