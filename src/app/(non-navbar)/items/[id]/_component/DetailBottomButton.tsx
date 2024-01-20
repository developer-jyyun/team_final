"use client";

interface Props {
  viewMore: boolean;
  setReservation: React.Dispatch<React.SetStateAction<boolean>>;
  setViewMore: React.Dispatch<React.SetStateAction<boolean>>;
}

const DetailBottomButton = ({
  viewMore,
  setReservation,
  setViewMore,
}: Props) => {
  const getBorderStyle = () => {
    if (!viewMore) return "";

    return "border-t-[0.6px] border-solid border-grey-d";
  };

  const scrollToTop = () => {
    return new Promise<void>((resolve) => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.addEventListener("scroll", () => {
        if (window.scrollY === 0) {
          resolve();
        }
      });
    });
  };

  const handleReservation = () => {
    if (viewMore) {
      scrollToTop().then(() => {
        setReservation(true);
        setViewMore(false);
      });
    } else {
      setReservation(true);
    }
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
        onClick={handleReservation}
      >
        예약하기
      </button>
    </nav>
  );
};

export default DetailBottomButton;
