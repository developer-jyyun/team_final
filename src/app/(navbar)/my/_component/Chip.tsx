interface Props {
  chipData?: string[];
  name?: string;
}

const Chip = ({ chipData, name }: Props) => {
  return (
    <>
      {chipData && (
        <p className="flex flex-row items-center justify-start gap-1">
          {chipData.map((chip) => (
            <span
              // TODO::key값 변경필요
              key={chip}
              className=" text-black-4 border border-solid border-grey-a rounded-xl text-[11px] py-1 px-2 web:text-sm"
            >
              {chip}
            </span>
          ))}
        </p>
      )}
      {name && (
        <span className="border text-black-4 border-solid border-black-6 rounded-xl text-[11px] py-1 px-2 web:text-sm">
          {name}
        </span>
      )}
    </>
  );
};

export default Chip;
