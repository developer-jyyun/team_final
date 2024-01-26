"use client";

import Link from "next/link";
import useMyUpcomingPackageQuery from "@/hooks/query/useMyUpcomingPackageQuery";
import { TITLE_CLASS } from "@/app/constants";
import Chip from "./Chip";
import NoItem from "./NoItem";
import SkeletonTitle from "./SkeletonTitle";

const UpcomingPackage = () => {
  const { data, isLoading, isError, error } = useMyUpcomingPackageQuery();
  if (isLoading) return <SkeletonTitle />;
  if (isError) return <div>⚠ {error.message} ⚠</div>;
  const noItem = !data || Object.keys(data).length === 0;

  return (
    <article className="mx-auto mt-8 mb-10">
      <h2 className={TITLE_CLASS}>다가오는 패키지가 있어요!</h2>
      {noItem && <NoItem text="다가오는 패키지 내역이 없습니다." img={false} />}

      {!noItem && (
        <div className="flex flex-nowrap relative gap-[18px] h-[90px]">
          <div className="w-[90px] h-[90px] shrink-0 rounded-md overflow-hidden">
            <img
              className="w-full h-full"
              src={data.imageUrl}
              alt={data.title}
            />
          </div>
          <div className=" flex w-2/3  justify-between items-center">
            <div className="flex flex-col justify-center gap-1 overflow-hidden">
              <p>
                <span className="font-semibold text-xs text-white bg-pink px-2 py-1 rounded-lg">
                  D - {data.dday}
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
            <Link href={`/items/${data.packageId}`} className="block w-10 h-10">
              <img
                className="object-cover"
                src="/icons/rightArrowIcon.svg"
                alt="자세히 보기 아이콘"
              />
            </Link>
          </div>
        </div>
      )}
    </article>
  );
};

export default UpcomingPackage;
