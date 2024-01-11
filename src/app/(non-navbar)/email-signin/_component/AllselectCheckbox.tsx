"use client";

import useCheckStateStore from "@/store/useCheckStateStore";
import { useEffect } from "react";

interface Props {
  text: string;
  subText?: string;
  requiredNum?: number;
  children: React.ReactNode[];
}

const AllselectCheckbox = ({ text, subText, requiredNum, children }: Props) => {
  const checkState = useCheckStateStore();

  useEffect(() => {
    checkState.setCheckItems(children.length);
    checkState.setIsRequired(false);
    checkState.resetRequiredNum();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (requiredNum === checkState.requiredNum) {
      checkState.setIsRequired(true);
    } else {
      checkState.setIsRequired(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkState.checkItems]);

  const handleAllCheckboxClick = () => {
    if (
      checkState.checkItems.filter((item) => item.checked).length ===
      children.length
    ) {
      checkState.clickAllCheckboxFalse();
      checkState.setIsRequired(false);
      checkState.resetRequiredNum();
    } else {
      checkState.clickAllCheckboxTrue();
      checkState.setIsRequired(true);
      checkState.fullRequiredNum(requiredNum as number);
    }
  };

  return (
    <>
      <div className="relative flex items-center mb-2">
        <div className="flex items-center mr-2 p-1">
          <input
            type="checkbox"
            className="hidden"
            checked={
              checkState.checkItems.filter((item) => item.checked).length ===
              children.length
            }
            readOnly
          />
          <button type="button" onClick={handleAllCheckboxClick}>
            {checkState.checkItems.filter((item) => item.checked).length ===
            children.length ? (
              <img src="./icons/allCheckedIcon.svg" alt="전체 동의" />
            ) : (
              <img src="./icons/allCheckIcon.svg" alt="전체 동의" />
            )}
          </button>
        </div>
        <div className="text-black-2 text-lg font-semibold">
          <span>{text} </span>
          <span className="text-xs font-normal">{subText}</span>
        </div>
      </div>
      {children}
    </>
  );
};

export default AllselectCheckbox;
