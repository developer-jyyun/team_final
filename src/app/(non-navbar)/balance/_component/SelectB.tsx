import useSelectPollsMutation from "@/hooks/query/useSelectPollsMutation";
import DetailTypography from "../../items/[id]/_component/DetailTypography";

interface Props {
  active: boolean;
  title: string[];
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const SelectB = ({ active, title, setIsLogin }: Props) => {
  const { mutateAsync } = useSelectPollsMutation({
    choose: "B",
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
          src="/icons/selectB.svg"
          alt="선택 2"
          className="scale-100 transition duration-150 ease-in-out hover:web:scale-110 hover:z-20"
        />
      ) : (
        <img src="/icons/selectBd.svg" alt="선택 2" className="web:w-[200px]" />
      )}
      <div className="absolute top-6 right-6 web:top-4 web:right-4">
        {title.map((text, index) => {
          return (
            <DetailTypography
              key={text}
              size={index === 1 ? 22 : 16}
              color={index === 1 ? (active ? "green" : 6) : ""}
              bold={600}
              align="right"
            >
              {text}
            </DetailTypography>
          );
        })}
      </div>
    </button>
  );
};

export default SelectB;
