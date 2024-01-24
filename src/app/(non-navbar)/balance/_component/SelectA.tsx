import useSelectPollsMutation from "@/hooks/query/useSelectPollsMutation";
import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import DetailTypography from "../../items/[id]/_component/DetailTypography";

interface ResPolls {
  code: number;
  message?: string;
  data?: {
    alreadySubmitted: boolean;
    subject?: string;
    pollId?: number;
    A?: string[];
    B?: string[];
  };
}

interface Props {
  active: boolean;
  title: string[];
  submitted: ResPolls;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveA: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveB: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrent: React.Dispatch<React.SetStateAction<string>>;
  refetchResult: (
    options?: RefetchOptions | undefined,
  ) => Promise<QueryObserverResult<any, Error>>;
  refetchPolls: (
    options?: RefetchOptions | undefined,
  ) => Promise<QueryObserverResult<any, Error>>;
  voted: boolean;
}

const SelectA = ({
  active,
  title,
  submitted,
  setIsLogin,
  setActiveA,
  setActiveB,
  setCurrent,
  refetchResult,
  refetchPolls,
  voted,
}: Props) => {
  const { mutateAsync } = useSelectPollsMutation({
    choose: "A",
  });

  const handleChooseA = () => {
    if (submitted.code !== 200) {
      setIsLogin(true);
    } else if (submitted.code === 200 && !submitted.data?.alreadySubmitted) {
      mutateAsync().then((res) => {
        if (res.code === 200) {
          refetchResult();
          refetchPolls();
          setActiveA(true);
        }
      });
    } else {
      setActiveA(true);
      setActiveB(false);
      setCurrent("A");
    }
  };
  return (
    <button type="button" className="relative" onClick={handleChooseA}>
      {active ? (
        <img
          src="/icons/selectA.svg"
          alt="선택 1"
          className={`${
            voted ? "scale-100" : "scale-110"
          } transition duration-150 ease-in-out z-10`}
        />
      ) : (
        <img
          src="/icons/selectAd.svg"
          alt="선택 1"
          className={`scale-100 transition duration-150 ease-in-out z-0`}
        />
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
