"use client";

import { useRouter } from "next/navigation";

interface Props {
  data: string;
  rank: number;
}

const Keyword = ({ data, rank }: Props) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/search-result?keyword=${data}`);
  };
  return (
    <div
      onClick={handleClick}
      className="mb-2 text-black-4 text-sm font-medium leading-5"
    >
      <span className="mr-3 font-bold">{rank + 1}</span>
      {data}
    </div>
  );
};

export default Keyword;
