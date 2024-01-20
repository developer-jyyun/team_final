"use client";

import useSelectPollsMutation from "@/hooks/query/useSelectPollsMutation";
import DetailTypography from "../../items/[id]/_component/DetailTypography";

interface Props {
  active: boolean;
  title: string[];
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const SelectA = ({ active, title, setIsLogin }: Props) => {
  const { mutateAsync } = useSelectPollsMutation({
    choose: "A",
  });

  const handleChooseB = () => {
    mutateAsync().then((res) => {
      if (res.code === 401) {
        setIsLogin(true);
      }
    });
  };
  return (
    <button type="button" className="relative" onClick={handleChooseB}>
      {active ? (
        <img
          src="/icons/selectA.svg"
          alt="선택 1"
          className="scale-100 transition duration-150 ease-in-out hover:web:scale-110 hover:z-20"
        />
      ) : (
        <img src="/icons/selectAd.svg" alt="선택 1" className="web:w-[200px]" />
      )}

      <div className="absolute top-6 left-6 web:top-4 web:left-4">
        {title.map((text, index) => {
          return (
            <DetailTypography
              key={text}
              size={index === 1 ? 22 : 16}
              color={index === 1 ? (active ? "pink-dark" : 6) : ""}
              bold={600}
              align="left"
            >
              {text}
            </DetailTypography>
          );
        })}
      </div>
    </button>
  );
};

export default SelectA;
