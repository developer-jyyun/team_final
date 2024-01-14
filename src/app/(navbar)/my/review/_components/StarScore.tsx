import renderStars from "@/utils/renderStars";

interface Prop {
  averageScore: number;
}

const StarScore = ({ averageScore }: Prop) => {
  console.log("⭐:", averageScore);
  return (
    <article className="mt-12 flex flex-col">
      <h2 className="text-lg text-black-2 font-semibold">
        본 패키지 여행의 경험은 어떠셨나요?
      </h2>
      <span className="mt-1 text-xxs ext-black-9 ">
        * 리뷰 점수에 따른 별점이 자동 산출 됩니다.
      </span>
      <div className="my-6 flex gap-2 justify-center">
        {renderStars(averageScore)}
      </div>

      <span className="text-4xl text-center text-black-2 font-semibold">
        {averageScore.toFixed(1)}
      </span>
    </article>
  );
};

export default StarScore;
