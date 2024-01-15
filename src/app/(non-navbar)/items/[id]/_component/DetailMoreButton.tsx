"use client";

import Button from "@/app/_component/common/atom/Button";

interface Props {
  setViewMore: React.Dispatch<React.SetStateAction<boolean>>;
}

const DetailMoreButton = ({ setViewMore }: Props) => {
  return (
    <div>
      <Button
        text="더보기"
        onClickFn={() => {
          setViewMore(true);
        }}
      />
    </div>
  );
};

export default DetailMoreButton;
