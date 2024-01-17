import ColorContainer from "@/app/_component/common/atom/ColorContainer";
import DetailTypography from "./DetailTypography";

interface Props {
  infoData: string[];
}

const PackageInfo = ({ infoData }: Props) => {
  return (
    <ColorContainer bg="pink-light" size="md">
      <div className="flex justify-around items-start">
        {infoData.map((data, index) => {
          return (
            <div
              key={data}
              className="flex flex-col items-center justify-center"
            >
              {index === 0 && (
                <img
                  src="/icons/bagIcon.svg"
                  alt="패키지"
                  className="mb-[15px] web:w-7"
                />
              )}
              {index === 1 && (
                <img
                  src="/icons/airplaneIcon.svg"
                  alt="항공"
                  className="mb-[15px] web:w-7"
                />
              )}
              {index === 2 && (
                <img
                  src="/icons/calenderIcon.svg"
                  alt="일정"
                  className="mb-[15px] web:w-7"
                />
              )}
              {index === 3 && (
                <img
                  src="/icons/coinIcon.svg"
                  alt="경비"
                  className="mb-[15px] web:w-7"
                />
              )}
              {index === 3 ? (
                <DetailTypography bold={500} align="center">
                  {data.split(" ")[0]}
                  <br />
                  {data.split(" ")[1]}
                  <br />
                  {data.split(" ")[2]}
                </DetailTypography>
              ) : (
                <DetailTypography bold={500}>{data}</DetailTypography>
              )}
            </div>
          );
        })}
      </div>
    </ColorContainer>
  );
};

export default PackageInfo;
