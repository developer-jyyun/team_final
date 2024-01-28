interface Props {
  score: number;
}

const ReviewRange = ({ score }: Props) => {
  const calculateWidth = () => {
    const percentage = (score / 5) * 100;
    return percentage;
  };

  return (
    <div className="relative h-3 w-[192px] web:w-[270px] bg-pink-2 rounded-[58px] web:h-4">
      <div
        className="h-full bg-gradient-red rounded-[58px]"
        style={{ width: `${calculateWidth()}%` }}
      />
    </div>
  );
};

export default ReviewRange;
