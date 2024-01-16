interface Props {
  children: React.ReactNode;
  styleClass?: string;
}

const GrayContainer = ({ children, styleClass }: Props) => {
  return (
    <div
      className={`rounded-lg bg-[#FAFAFA] py-6 px-8 mt-[29px] ${styleClass}`}
    >
      {children}
    </div>
  );
};

export default GrayContainer;
