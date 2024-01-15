import Button from "./Button";

interface Props {
  tabName: string;
  onClick: () => void;
  isSelected: boolean;
  defaultClass?: string;
  selectedClass?: string;
}

const TabButton = ({
  tabName,
  onClick,
  isSelected,
  defaultClass = "text-gray-400",
  selectedClass = "text-black",
}: Props) => {
  const styleClass = isSelected
    ? `w-full font-bold shrink-0 ${selectedClass}`
    : `w-full shrink-0 ${defaultClass}`;
  return (
    <li className="flex w-full text-center text-sm">
      <Button text={tabName} styleClass={styleClass} onClickFn={onClick} />
    </li>
  );
};

export default TabButton;
