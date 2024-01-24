interface Props {
  type: string;
  name: string;
  value: string;
  label: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onFocus?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.ChangeEventHandler<HTMLInputElement>;
  buttonText: string;
  onButtonClick: React.MouseEventHandler<HTMLButtonElement>;
  isValueChanged: boolean;
  placeholder?: string;
  maxLength?: number;
}
const InputWithButton = ({
  type,
  name,
  value,
  label,
  onChange,
  onFocus,
  onBlur,
  buttonText,
  onButtonClick,
  isValueChanged,
  placeholder,
  maxLength,
}: Props) => {
  return (
    <div className="my-4">
      <span className="text-black-8 text-[13px]">{label}</span>
      <div className="relative">
        <input
          className="w-full h-[50px] flex items-center justify-between bg-grey-e bg-opacity-40 rounded-lg px-4 py-2
          focus:outline-none "
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          placeholder={placeholder}
          maxLength={maxLength}
        />

        {isValueChanged && (
          <button
            type="button"
            className="absolute top-2 right-2 bg-white rounded-lg py-2 px-4 text-black-4 text-sm font-medium"
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
