"use client";

import useMyInfoQuery from "@/hooks/query/useMyInfoQuery";

const UserInfo = () => {
  const { data, isLoading, isError, error } = useMyInfoQuery();

  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>⚠ {error.message}⚠</div>;

  return (
    <section className="flex  flex-col justify-center items-center bg-grey-e bg-opacity-40 gap-3 p-6 rounded-md">
      <div className="flex items-end gap-2 ">
        <p className="font-semibold font-black-2 text-xxl">{data.username}</p>
        <div className="w-6 h-6">
          <img
            className="w-full "
            src="./icons/editIcon.svg"
            alt="내 정보 수정"
          />
        </div>
      </div>
      <p className="text-sm font-black-4 font-medium"> {data.email}</p>
    </section>
  );
};

export default UserInfo;
