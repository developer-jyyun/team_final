import { DateTime } from "@/app/types";
import ReplaceHyphenWithDot from "@/utils/ReplaceHyphenWithDot";
import DetailTypography from "./DetailTypography";
import GrayContainer from "./GrayContainer";

interface Props {
  departureDatetime: DateTime;
  endDatetime: DateTime;
  transporation: string;
}

const TravelDate = ({
  departureDatetime,
  endDatetime,
  transporation,
}: Props) => {
  return (
    <GrayContainer>
      <div className="flex items-center mb-[11px]">
        <div className="w-20">
          <DetailTypography color={4}>교통편</DetailTypography>
        </div>
        <div>
          <DetailTypography size={14} bold={600}>
            {transporation}
          </DetailTypography>
        </div>
      </div>
      <div className="flex items-center mb-[11px]">
        <div className="w-20">
          <DetailTypography color={4}>출발일시</DetailTypography>
        </div>
        <div>
          <DetailTypography size={14} bold={600}>
            {ReplaceHyphenWithDot(departureDatetime.date)}{" "}
            {departureDatetime.dayOfWeek} {departureDatetime.time}
          </DetailTypography>
        </div>
      </div>
      <div className="flex items-center">
        <div className="w-20">
          <DetailTypography color={4}>도착일시</DetailTypography>
        </div>
        <div>
          <DetailTypography size={14} bold={600}>
            {ReplaceHyphenWithDot(endDatetime.date)} {endDatetime.dayOfWeek}{" "}
            {endDatetime.time}
          </DetailTypography>
        </div>
      </div>
    </GrayContainer>
  );
};

export default TravelDate;
