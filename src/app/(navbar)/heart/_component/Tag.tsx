interface Props {
  tagName: string;
}

const Tag = ({ tagName }: Props) => {
  return (
    <div className="px-1 py-0.5 rounded-[12px] border border-grey-c p-1 text-xs text-black-4 text-center">
      {tagName}
    </div>
  );
};

export default Tag;
