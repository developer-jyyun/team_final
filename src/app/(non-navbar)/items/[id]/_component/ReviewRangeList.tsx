import DetailTypography from "./DetailTypography";
import ReviewRange from "./ReviewRange";

interface Props {
  text: string;
  score: number;
}

const ReviewRangeList = ({ text, score }: Props) => {
  const getSpace = (str: string) => {
    const newText = str.replace(/\//g, "<br />");

    return newText;
  };

  return (
    <div className="flex justify-center items-center mb-3">
      <div className="w-3/12">
        <DetailTypography color={6} size={10}>
          <span dangerouslySetInnerHTML={{ __html: getSpace(text) }} />
        </DetailTypography>
      </div>
      <ReviewRange score={score} />
      <div className="w-1/12 ml-3">
        <DetailTypography color={5} size={10}>
          {score.toFixed(1)}
        </DetailTypography>
      </div>
    </div>
  );
};

export default ReviewRangeList;
