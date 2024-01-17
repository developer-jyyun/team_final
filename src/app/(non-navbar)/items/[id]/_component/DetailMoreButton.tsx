import Button from "@/app/_component/common/atom/Button";

interface Props {
  setViewMore: React.Dispatch<React.SetStateAction<boolean>>;
}

const DetailMoreButton = ({ setViewMore }: Props) => {
  return (
    <div className="flex items-center justify-center h-36 bg-gradient-white web:h-20">
      <Button
        text="더보기"
        onClickFn={() => {
          setViewMore(true);
        }}
        styleClass="border-[0.6px] border-solid border-grey-a rounded-[52px] py-1 px-2 text-black-6 bg-white"
      />
    </div>
  );
};

export default DetailMoreButton;
