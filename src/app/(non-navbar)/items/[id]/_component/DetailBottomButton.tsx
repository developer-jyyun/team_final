"use client";

interface Props {
  viewMore: boolean;
}

const DetailBottomButton = ({ viewMore }: Props) => {
  const getBorderStyle = () => {
    if (!viewMore) return "";

    return "border-t-[0.6px] border-solid border-grey-d";
  };

  return (
    <nav
      className={`flex justify-between items-center p-6 h-20 bg-white ${getBorderStyle()} web:p-4 web:w-[500px]`}
    >
      <button
        type="button"
        className="w-[151px] h-[40px] bg-pink rounded-lg text-white text-lg font-bold web:w-[210px]"
      >
        1:1 비교하기
      </button>
      <button
        type="button"
        className="w-[151px] h-[40px] bg-pink rounded-lg text-white text-lg font-bold web:w-[210px]"
      >
        예약하기
      </button>
    </nav>
  );
};

export default DetailBottomButton;
