import DetailTypography from "../../items/[id]/_component/DetailTypography";

interface Props {
  active: boolean;
}

const SelectA = ({ active }: Props) => {
  return (
    <button type="button" className="relative">
      {active ? (
        <img src="/icons/selectA.svg" alt="선택 1" className="web:w-[200px]" />
      ) : (
        <img src="/icons/selectAd.svg" alt="선택 1" className="web:w-[200px]" />
      )}

      <div className="absolute top-6 left-6 web:top-4 web:left-4">
        <DetailTypography size={16} bold={600}>
          여행은
        </DetailTypography>
        <DetailTypography size={22} bold={600} color="pink-dark">
          휴식이지!
        </DetailTypography>
      </div>
    </button>
  );
};

export default SelectA;
