import type { InclusionExclusion } from "@/app/types";
import DetailTypography from "./DetailTypography";
import GrayContainer from "./GrayContainer";

interface Props {
  inclusionList: InclusionExclusion[];
  exclusionList: InclusionExclusion[];
}

const InclusionExclusionContainer = ({
  inclusionList,
  exclusionList,
}: Props) => {
  // console.log(inclusionList, exclusionList);
  return (
    <GrayContainer>
      <div className="mb-5">
        <DetailTypography color={3} size={14} bold={600}>
          포함 / 불포함 사항
        </DetailTypography>
      </div>
      <div className="flex">
        <div className="w-1/2">
          <div className="mb-2">
            <DetailTypography color={3} size={14} bold={500}>
              포함 사항
            </DetailTypography>
          </div>

          {inclusionList.map((inclusion) => {
            return (
              <div key={inclusion.title} className="mb-2">
                <DetailTypography color={6} size={12}>
                  [{inclusion.title}]
                </DetailTypography>
                <DetailTypography color={6} size={10}>
                  {inclusion.description}
                </DetailTypography>
              </div>
            );
          })}
        </div>
        <div className="w-1/2">
          <div className="mb-2">
            <DetailTypography color={3} size={14} bold={500}>
              불포함 사항
            </DetailTypography>
          </div>
          {exclusionList.map((exclusion) => {
            return (
              <div key={exclusion.title} className="mb-2">
                <DetailTypography color={6} size={12}>
                  [{exclusion.title}]
                </DetailTypography>
                <DetailTypography color={6} size={10}>
                  {exclusion.description}
                </DetailTypography>
              </div>
            );
          })}
        </div>
      </div>
    </GrayContainer>
  );
};

export default InclusionExclusionContainer;
