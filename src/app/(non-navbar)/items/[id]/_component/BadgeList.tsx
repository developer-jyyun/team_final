interface Props {
  children: React.ReactNode;
}

const BadgeList = ({ children }: Props) => {
  return <ul className="flex pt-[18px] flex-wrap web:py-3">{children}</ul>;
};

export default BadgeList;
