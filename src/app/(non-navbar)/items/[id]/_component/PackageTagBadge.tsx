interface Props {
  text: string;
}

const PackageTagBadge = ({ text }: Props) => {
  return (
    <li className="flex ml-1 mb-[18px] text-pink-main text-sm px-3 py-1 rounded-[76px] border-[0.6px] border-solid border-grey-d">
      {text}
    </li>
  );
};

export default PackageTagBadge;
