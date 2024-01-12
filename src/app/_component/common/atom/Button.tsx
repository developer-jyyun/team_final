interface Props {
  text: string;
  styleClass?: string;
  onClickFn?: VoidFunction;
  disabled?: boolean;
  theme?: string;
  icon?: string;
}

const themes: { [key: string]: string } = {
  wide: "w-full h-[56px] disabled:bg-grey-c hover:bg-[#bb1e4a] bg-pink disabled:text-black-8 text-white font-bold rounded-xl",
  md: "p-[8px]",
};

const Button = ({
  text,
  styleClass,
  onClickFn,
  disabled = false,
  theme = "",
  icon,
}: Props) => {
  return (
    <button
      type="button"
      className={`${themes[theme]} ${styleClass}`}
      disabled={disabled}
      onClick={onClickFn}
    >
      {icon && <img src={icon} alt={text} />}
      {text}
    </button>
  );
};

export default Button;
