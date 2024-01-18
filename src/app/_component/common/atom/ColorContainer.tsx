interface Props {
  children: React.ReactNode;
  styleClass?: string;
  bg: string;
  size: string;
}

const bgs: { [key: string]: string } = {
  "gray-light": "bg-[#FAFAFA]",
  gray: "bg-grey-e",
  "pink-light": "bg-[#FFF5F5]",
  pink: "bg-pink-2",
};

const sizes: { [key: string]: string } = {
  sm: "py-[14px] px-[14px] mt-4",
  md: "py-6 px-8 mt-[29px]",
};

const ColorContainer = ({ children, styleClass, bg, size }: Props) => {
  return (
    <div className={`rounded-lg ${bgs[bg]} ${sizes[size]} ${styleClass}`}>
      {children}
    </div>
  );
};

export default ColorContainer;
