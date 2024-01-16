import { DateTime } from "@/app/types";
import ReplaceHyphenWithDot from "@/utils/ReplaceHyphenWithDot";
import DetailTypography from "./DetailTypography";

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
    <div className="border-2 border-solid border-red py-6 px-8">
      <div className="flex items-center">
        <DetailTypography color={4}>교통편</DetailTypography>
        <DetailTypography size={14} bold={600}>
          {transporation}
        </DetailTypography>
      </div>
      <div className="flex items-center">
        <DetailTypography color={4}>출발일시</DetailTypography>
        <DetailTypography size={14} bold={600}>
          {ReplaceHyphenWithDot(departureDatetime.date)}{" "}
          {departureDatetime.dayOfWeek} {departureDatetime.time}
        </DetailTypography>
      </div>
      <div className="flex items-center">
        <DetailTypography color={4}>도착일시</DetailTypography>
        <DetailTypography size={14} bold={600}>
          {ReplaceHyphenWithDot(endDatetime.date)} {endDatetime.dayOfWeek}{" "}
          {endDatetime.time}
        </DetailTypography>
      </div>
    </div>
  );
};

export default TravelDate;
