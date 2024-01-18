"use client";

import getPolls from "@/api/home/getPolls";
import Button from "@/app/_component/common/atom/Button";
import { useEffect, useState } from "react";

interface Props {
  alreadySubmitted: boolean;
  subject: string;
  pollId: number;
  A: string[];
  B: string[];
}

const HomeProsAndCons = () => {
  const [polls, setPolls] = useState<Props[]>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPolls();
        setPolls(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    // cleanup
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    // TODO: 찬반토론 이미지 넘어오는대로 추가 수정 예정입니다!
    <div>
      {polls?.map((poll) => (
        <div className="w-full relative" key={`poll-${poll.pollId}`}>
          <Button
            text={`${poll.A.map((letter) => letter).join("")} VS ${poll.B.map(
              (letter) => letter,
            ).join(" ")}`}
            styleClass="w-full h-20 bg-pink font-bold rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default HomeProsAndCons;
