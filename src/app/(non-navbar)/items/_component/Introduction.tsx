import CenterContainer from "@/app/_component/common/atom/CenterContainer";
import type { InclusionExclusion, Price } from "@/app/types";
import DetailTypography from "./DetailTypography";
import InclusionExclusionContainer from "./InclusionExclusionContainer";
import PriceDetail from "./PriceDetail";

interface Props {
  introImageUrls: string[];
  inclusionList: InclusionExclusion[];
  exclusionList: InclusionExclusion[];
  totalPrice: Price;
}

const Introduction = ({
  introImageUrls,
  inclusionList,
  exclusionList,
  totalPrice,
}: Props) => {
  return (
    <div className="mt-6">
      {introImageUrls.map((introImg) => {
        return <img key={introImg} src={introImg} alt="상품 소개" />;
      })}
      <InclusionExclusionContainer
        inclusionList={inclusionList}
        exclusionList={exclusionList}
      />
      <PriceDetail totalPrice={totalPrice} />
      <div className="mt-2">
        <CenterContainer>
          <DetailTypography color={8} size={8}>
            * 유류할증료 및 제세공과금은 발권일/환율에 따라 변경될 수 있습니다
          </DetailTypography>
        </CenterContainer>
      </div>
    </div>
  );
};

export default Introduction;
