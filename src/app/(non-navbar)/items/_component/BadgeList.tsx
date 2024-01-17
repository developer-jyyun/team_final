interface Props {
  children: React.ReactNode;
}

const BadgeList = ({ children }: Props) => {
  return <ul className="flex py-[18px] web:py-3">{children}</ul>;
};

export default BadgeList;
