interface Props {
  score: number;
}

const ReviewRange = ({ score }: Props) => {
  const getWidth = () => {
    if (score >= 0.5 && score < 1) {
      return "before:w-[38px] web:before:w-[54px]";
    } else if (score >= 1 && score < 1.5) {
      return "before:w-[57px] web:before:w-[81px]";
    } else if (score >= 1.5 && score < 2) {
      return "before:w-[77px] web:before:w-[108px]";
    } else if (score >= 2 && score < 2.5) {
      return "before:w-[96px] web:before:w-[135px]";
    } else if (score >= 2.5 && score < 3) {
      return "before:w-[115px] web:before:w-[162px]";
    } else if (score >= 3 && score < 3.5) {
      return "before:w-[134px] web:before:w-[189px]";
    } else if (score >= 3.5 && score < 4) {
      return "before:w-[153px] web:before:w-[261px]";
    } else if (score >= 4 && score < 4.5) {
      return "before:w-[173px] web:before:w-[243px]";
    } else if (score >= 4.5 && score <= 5) {
      return "before:w-full";
    } else {
      return "";
    }
  };

  return (
    <div
      className={`relative h-3 w-[192px] web:w-[270px] bg-pink-2 rounded-[58px] web:h-4 
                before:contant-[''] before:h-full before:w-[100px] before:bg-gradient-red before:absolute 
                before:left-0 before:top-0 before:rounded-[58px] ${getWidth()}`}
    />
  );
};

export default ReviewRange;
