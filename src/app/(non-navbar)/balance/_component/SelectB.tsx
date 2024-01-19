import DetailTypography from "../../items/[id]/_component/DetailTypography";

interface Props {
  active: boolean;
}

const SelectB = ({ active }: Props) => {
  return (
    <button type="button" className="relative">
      {active ? (
        <img src="/icons/selectB.svg" alt="선택 2" className="web:w-[200px]" />
      ) : (
        <img src="/icons/selectBd.svg" alt="선택 2" className="web:w-[200px]" />
      )}
      <div className="absolute top-6 right-6 web:top-4 web:right-4">
        <DetailTypography size={16} bold={600} align="right">
          온 김에
        </DetailTypography>
        <DetailTypography size={22} bold={600} color="green">
          다 해보자!
        </DetailTypography>
      </div>
    </button>
  );
};

export default SelectB;
