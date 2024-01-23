"use client";

interface Props {
  option: string;
  value: string;
  handleSelect: (value: string, option: string) => void;
}

const DropDownOption = ({ option, value, handleSelect }: Props) => {
  const handleClick = () => {
    handleSelect(value, option);
  };
  return (
    <div className="py-1 bg-white shadow-xs" onClick={handleClick}>
      <div className="block px-4 py-2 text-sm text-black-5 active:bg-gray-100">
        {value}
      </div>
    </div>
  );
};

export default DropDownOption;
