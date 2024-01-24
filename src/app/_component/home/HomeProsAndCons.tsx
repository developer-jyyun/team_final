"use client";

// import getPolls from "@/api/home/getPolls";
// import Button from "@/app/_component/common/atom/Button";
import useGetPollsMainQuery from "@/hooks/query/useGetPollsMainQuery";
import { useEffect, useState } from "react";

interface Props {
  subject: string;
  pollId: number;
  A: string[];
  B: string[];
}

const HomeProsAndCons = () => {
  const [, setPolls] = useState<Props[]>();
  const { data } = useGetPollsMainQuery();
  // console.log(data, polls);

  useEffect(() => {
    if (data) {
      setPolls(data?.data);
    }
    // console.log(polls);

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <div className="w-full h-[80px] flex relative">
      {/* <img
        className="absolute w-[50%] h-full object-cover clip-polygon z-10"
        src="/icons/selectA.svg"
        alt="pollA"
        style={{ clipPath: "polygon(0% 0%, 75% 0%, 100% 100%, 0% 100%)" }}
      />
       */}
      <svg
        className=" w-[170px] h-full object-cover clip-polygon z-10"
        viewBox="50 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0 L75 0 L100 100 L0 100 Z" fill="black" />

        <image
          href="/icons/selectA.svg"
          x="0"
          y="0"
          width="100"
          height="100"
          clipPath="polygon(0% 0%, 75% 0%, 100% 100%, 0% 100%)"
        />
      </svg>
      <svg
        className=" w-[170px] h-full object-cover clip-polygon z-10"
        viewBox="0 0 50 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0 L100 0 L100 100 L25 100 Z" fill="black" />

        <image
          href="/icons/selectB.svg"
          x="0"
          y="0"
          width="100"
          height="100"
          clipPath="polygon(0% 0%, 100% 0%, 100% 100%, 25% 100%)"
        />
      </svg>
    </div>
  );

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await getPolls();
  //       setPolls(response);
  //       console.log(response);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchData();
  //   // cleanup
  //   return () => {};
  // }, []);

  // return (
  //   // TODO: 찬반토론 이미지 넘어오는대로 추가 수정 예정입니다!
  //   <div>
  //     {polls?.map((poll) => (
  //       <div className="w-full relative" key={`poll-${poll.pollId}`}>
  //         <Button
  //           text={`${poll.A.map((letter) => letter).join("")} VS ${poll.B.map(
  //             (letter) => letter,
  //           ).join(" ")}`}
  //           styleClass="w-full h-20 bg-pink font-bold rounded-lg"
  //         />
  //       </div>
  //     ))}
  //   </div>
  // );
};

export default HomeProsAndCons;
