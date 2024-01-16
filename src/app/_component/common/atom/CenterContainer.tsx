interface Props {
  children: React.ReactNode[];
}
const CenterContainer = ({ children }: Props) => {
  return <div className="flex items-center justify-center">{children}</div>;
};

export default CenterContainer;
