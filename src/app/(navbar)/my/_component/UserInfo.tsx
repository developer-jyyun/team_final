"use client";

import useMyInfoQuery from "@/hooks/query/useMyInfoQuery";
import Link from "next/link";

interface Props {
  showEditIcon: boolean;
}

const UserInfo = ({ showEditIcon = true }: Props) => {
  const { data, isLoading, isError, error } = useMyInfoQuery();

  if (isLoading)
    return <div className=" h-[122px] rounded-lg bg-grey-e animate-pulse" />;

  if (isError) return <div>⚠ {error.message}⚠</div>;

  return (
    <section className="flex  flex-col justify-center items-center bg-grey-e bg-opacity-40 gap-3 p-6 rounded-md">
      <div className="flex items-end gap-2 ">
        <p className="font-semibold font-black-2 text-xxl">{data.username}</p>
        {showEditIcon && (
          <Link href="/my/info" className="w-6 h-6">
            <img
              className="w-full "
              src="./icons/editIcon.svg"
              alt="내 정보 수정"
            />
          </Link>
        )}
      </div>
      <p className="text-sm font-black-4 font-medium"> {data.email}</p>
    </section>
  );
};

export default UserInfo;
