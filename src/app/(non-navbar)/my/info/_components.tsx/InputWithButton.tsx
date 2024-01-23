interface Props {
  type: string;
  name: string;
  value: string;
  label: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onFocus?: React.ChangeEventHandler<HTMLInputElement>;
  buttonText: string;
  onButtonClick: React.MouseEventHandler<HTMLButtonElement>;
  isValueChanged: boolean;
}
const InputWithButton = ({
  type,
  name,
  value,
  label,
  onChange,
  onFocus,
  buttonText,
  onButtonClick,
  isValueChanged,
}: Props) => {
  return (
    <div className="my-4">
      <span className="text-black-8 text-[13px]">{label}</span>
      <div className="flex items-center justify-between bg-grey-e bg-opacity-40 rounded-lg px-4 py-2">
        <input
          className="bg-transparent"
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
        />

        {isValueChanged && (
          <button
            type="button"
            className="bg-white rounded-lg py-2 px-4 text-black-4 text-sm font-medium"
            onClick={onButtonClick}
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default InputWithButton;
