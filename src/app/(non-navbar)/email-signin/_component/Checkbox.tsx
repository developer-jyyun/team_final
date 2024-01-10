"use client";

import useCheckStateStore from "@/store/useCheckStateStore";
import { useState } from "react";

interface Props {
  text: string;
  subText?: string;
  required?: boolean;
  id?: number;
  theme: "sm" | "lg";
  isAll?: boolean;
}

const Checkbox = ({
  text,
  subText,
  required,
  id,
  theme,
  isAll = true,
}: Props) => {
  const checkState = useCheckStateStore();
  const checkItem = checkState.checkItems.filter((item) => item.id === id);
  const [check, setCheck] = useState(false);

  const handleCheckboxClick = () => {
    if (checkItem[0].checked) {
      checkState.clickCheckboxFalse(id as number);
      if (required) {
        checkState.decreaseRequiredNum();
      }
    } else {
      checkState.clickCheckboxTrue(id as number);
      if (required) {
        checkState.increaseRequiredNum();
      }
    }
  };

  const handleCheckboxClickSingle = () => {
    setCheck((prev) => !prev);
  };

  return (
    <div
      className={`relative flex items-center p-${
        (theme === "sm" && 2) || (theme === "lg" && 1)
      }`}
    >
      <div className="flex items-center mr-2">
        <input
          type="checkbox"
          className="hidden"
          checked={isAll ? checkItem[0]?.checked || false : check}
          readOnly
        />
        <button
          type="button"
          className="w-[25px]"
          onClick={isAll ? handleCheckboxClick : handleCheckboxClickSingle}
        >
          {isAll
            ? checkItem[0] && checkItem[0].checked
              ? (theme === "sm" && (
                  <img src="./icons/checkedIcon.svg" alt="체크" />
                )) ||
                (theme === "lg" && (
                  <img src="./icons/allCheckedIcon.svg" alt="체크" />
                ))
              : (theme === "sm" && (
                  <img src="./icons/checkIcon.svg" alt="체크" />
                )) ||
                (theme === "lg" && (
                  <img src="./icons/allCheckIcon.svg" alt="체크" />
                ))
            : check
              ? (theme === "sm" && (
                  <img src="./icons/checkedIcon.svg" alt="체크" />
                )) ||
                (theme === "lg" && (
                  <img src="./icons/allCheckedIcon.svg" alt="체크" />
                ))
              : (theme === "sm" && (
                  <img src="./icons/checkIcon.svg" alt="체크" />
                )) ||
                (theme === "lg" && (
                  <img src="./icons/allCheckIcon.svg" alt="체크" />
                ))}
        </button>
      </div>
      <div>
        <span
          className={`text-${
            (theme === "sm" && "sm") || (theme === "lg" && "base")
          } text-black-4 font-normal leading-normal`}
        >
          {text}
        </span>
        <div className="text-[10px] text-grey-4 font-normal leading-normal">
          {subText}
        </div>
      </div>
    </div>
  );
};

export default Checkbox;
