"use client";

import { useState } from "react";
import DetailTypography from "../../items/[id]/_component/DetailTypography";
import SelectA from "./SelectA";
import SelectB from "./SelectB";
import ViewResult from "./ViewResult";

const ViewOption = () => {
  const [activeA] = useState(true);
  const [activeB] = useState(true);

  const getVSStyle = () => {
    if (activeA && !activeB) return "icons/vsvIcon.svg";
    if (!activeA && activeB) return "icons/vssIcon.svg";

    return "icons/vsIcon.svg";
  };

  return (
    <div className="flex flex-col px-6 web:px-[52px]">
      <div className="mt-8">
        <DetailTypography color={6} size={14} bold={600} align="center">
          여러분들의
        </DetailTypography>
        <DetailTypography size={22} bold={600} align="center">
          여행 스타일은?
        </DetailTypography>
      </div>
      <div className="relative flex justify-center mt-[26px]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <img src={getVSStyle()} alt="대결" />
        </div>
        <SelectA active={activeA} />
        <SelectB active={activeB} />
      </div>
      <ViewResult />
    </div>
  );
};

export default ViewOption;
