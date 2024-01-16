import { InclusionExclusion } from "@/app/types";
import InclusionExclusionContainer from "./InclusionExclusionContainer";

interface Props {
  introImageUrls: string[];
  inclusionList: InclusionExclusion[];
  exclusionList: InclusionExclusion[];
}

const Introduction = ({
  introImageUrls,
  inclusionList,
  exclusionList,
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
    </div>
  );
};

export default Introduction;
