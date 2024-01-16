import DetailTypography from "./DetailTypography";

interface Props {
  infoData: string[];
}

const PackageInfo = ({ infoData }: Props) => {
  return (
    <div className="flex justify-around items-start pt-[25px] mt-4 h-[131px] rounded-lg bg-[#FFF5F5]">
      {infoData.map((data, index) => {
        return (
          <div key={data} className="flex flex-col items-center justify-center">
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
  );
};

export default PackageInfo;
