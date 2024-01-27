interface Props {
  chipData?: string[];
  name?: string;
  borderColor?: string;
  textColor?: string;
  gap?: string;
}

const Chip = ({
  chipData,
  name,
  borderColor = "border-grey-a",
  textColor = "text-black-4",
  gap = "gap-2",
}: Props) => {
  const chipClass = `text-[11px] text-black-4 border border-solid rounded-xl py-1 px-2 web:text-sm ${borderColor} ${textColor}`;

  const sortedAndSlicedData = chipData
    ? chipData
        .slice()
        .sort((a, b) => a.localeCompare(b, "ko-KR"))
        .slice(0, 2)
    : [];
  return (
    <>
      {sortedAndSlicedData.length > 0 && (
        <p className={`flex flex-row items-center justify-start ${gap} `}>
          {name && <span className={chipClass}>{name}</span>}
          {sortedAndSlicedData.map((chip) => (
            <span key={chip} className={chipClass}>
              {chip}
            </span>
          ))}
        </p>
      )}

      {name && !chipData && <span className={chipClass}>{name}</span>}
    </>
  );
};

export default Chip;
