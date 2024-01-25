interface Props {
  tagName: string;
}

const Tag = ({ tagName }: Props) => {
  return (
    <div className="px-1 py-0.5 rounded-[12px] h-[20px] border border-grey-c text-[10px] text-black-4 text-center overflow-clip text-nowrap">
      {tagName}
    </div>
  );
};

export default Tag;
