interface Props {
  children: React.ReactNode;
  variant?: string;
  color?: string | number;
  align?: "right" | "center" | "left";
  size?: number;
  bold?: number;
  styleClass?: string;
}

const DetailTypography = ({
  children,
  variant = "p",
  color,
  align,
  size,
  bold,
  styleClass = "",
}: Props) => {
  const generateColorStyle = () => {
    if (color === 1) return "text-black-1";
    if (color === 2) return "text-black-2";
    if (color === 3) return "text-black-3";
    if (color === 4) return "text-black-4";
    if (color === 5) return "text-black-5";
    if (color === 6) return "text-black-6";
    if (color === 7) return "text-black-7";
    if (color === 8) return "text-black-8";
    if (color === "a") return "text-grey-a";
    if (color === "b") return "text-grey-b";
    if (color === "f") return "text-white";
    if (color === "pink") return "text-pink";
    if (color === "pink-main") return "text-pink-main";
    if (color === "pink-dark") return "text-[#FF2477]";
    if (color === "green") return "text-[#05B200]";
    if (color === "red") return "text-red";
    return "text-black-2";
  };

  const generateAlignStyle = () => {
    if (align === "right") return "text-right";
    if (align === "center") return "text-center";
    if (align === "left") return "text-left";
    return "text-left";
  };

  const generateSizeStyle = () => {
    if (size === 8) return "text-[8px] web:text-xs";
    if (size === 10) return "text-[10px] web:text-sm";
    if (size === 12) return "text-xs web:text-[15px]";
    if (size === 13) return "text-[13px] web:text-base";
    if (size === 14) return "text-sm web:text-lg";
    if (size === 16) return "web:text-xl";
    if (size === 18) return "text-lg web:text-2xl";
    if (size === 20) return "text-xl web:text-3xl";
    if (size === 22) return "text-[22px] web:text-3xl";
    if (size === 24) return "text-2xl web:text-[26px]";
    return "text-xs";
  };

  const generateBoldStyle = () => {
    if (bold === 400) return "";
    if (bold === 500) return "font-medium";
    if (bold === 600) return "font-semibold";
    if (bold === 700) return "font-bold";
    return "";
  };

  if (variant === "h1") {
    return (
      <h1
        className={`${generateColorStyle()} ${generateAlignStyle()} ${generateSizeStyle()} ${generateBoldStyle()} ${styleClass} text`}
      >
        {children}
      </h1>
    );
  }

  return (
    <p
      className={`${generateColorStyle()} ${generateAlignStyle()} ${generateSizeStyle()} ${generateBoldStyle()} ${styleClass}`}
    >
      {children}
    </p>
  );
};

export default DetailTypography;
