import type { Price } from "@/app/types";
import formatDigitNumber from "@/utils/formatDigitNumber";
import DetailTypography from "./DetailTypography";
import GrayContainer from "./GrayContainer";

interface Props {
  totalPrice: Price;
}

const PriceDetail = ({ totalPrice }: Props) => {
  const getUnder12YearsDate = () => {
    const today = new Date();

    const birthYear = today.getFullYear() - 12;

    const birthDate = new Date(birthYear, today.getMonth(), today.getDate());

    return {
      adult: `${birthYear}.${formatDigitNumber(
        birthDate.getMonth() + 1,
      )}.${birthDate.getDate()}`,
      infant: `${birthYear}.${formatDigitNumber(birthDate.getMonth() + 1)}.${
        birthDate.getDate() + 1
      } ~ ${today.getFullYear()}.${formatDigitNumber(
        birthDate.getMonth() + 1,
      )}.${birthDate.getDate()}`,
      baby: `${today.getFullYear() - 2}.${formatDigitNumber(
        birthDate.getMonth() + 1,
      )}.${birthDate.getDate() + 1}`,
    };
  };

  return (
    <GrayContainer>
      <div className="mb-5">
        <DetailTypography color={3} size={14} bold={600}>
          상품가격
        </DetailTypography>
      </div>
      <div className="flex justify-between items-center mb-2">
        <div>
          <div className="flex items-center">
            <DetailTypography color={4} size={12} bold={500}>
              성인
            </DetailTypography>
            <DetailTypography color={6} size={10}>
              (만 12세 이상)
            </DetailTypography>
          </div>
          <DetailTypography color="b" size={8}>
            출발일 기준 {getUnder12YearsDate().adult} 이전 출생
          </DetailTypography>
        </div>
        <div className="flex items-center">
          <div className="mr-1">
            <DetailTypography size={16} bold={600}>
              {totalPrice.adult.toLocaleString()}
            </DetailTypography>
          </div>
          <DetailTypography color={4} size={10}>
            원
          </DetailTypography>
        </div>
      </div>
      <div className="flex justify-between items-center mb-2">
        <div>
          <div className="flex items-center">
            <DetailTypography color={4} size={12} bold={500}>
              소아
            </DetailTypography>
            <DetailTypography color={6} size={10}>
              (만 12세 미만)
            </DetailTypography>
          </div>
          <DetailTypography color="b" size={8}>
            출발일 기준 {getUnder12YearsDate().infant} 출생
          </DetailTypography>
        </div>
        <div className="flex items-center">
          <div className="mr-1">
            <DetailTypography size={16} bold={600}>
              {totalPrice.infant.toLocaleString()}
            </DetailTypography>
          </div>
          <DetailTypography color={4} size={10}>
            원
          </DetailTypography>
        </div>
      </div>
      <div className="flex justify-between items-center mb-2">
        <div>
          <div className="flex items-center">
            <DetailTypography color={4} size={12} bold={500}>
              유아
            </DetailTypography>
            <DetailTypography color={6} size={10}>
              (만 2세 미만)
            </DetailTypography>
          </div>
          <DetailTypography color="b" size={8}>
            출발일 기준 {getUnder12YearsDate().baby} 이후 출생
          </DetailTypography>
        </div>
        <div className="flex items-center">
          <div className="mr-1">
            <DetailTypography size={16} bold={600}>
              {totalPrice.baby.toLocaleString()}
            </DetailTypography>
          </div>
          <DetailTypography color={4} size={10}>
            원
          </DetailTypography>
        </div>
      </div>
    </GrayContainer>
  );
};

export default PriceDetail;
