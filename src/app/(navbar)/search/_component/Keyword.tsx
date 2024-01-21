import React from "react";

interface Props {
  data: string;
  rank: number;
}

const Keyword = ({ data, rank }: Props) => {
  return (
    <li className="mb-2 text-black-4 text-sm font-medium leading-5">
      <span className="mr-3 font-bold">{rank + 1}</span>
      {data}
    </li>
  );
};

export default Keyword;
