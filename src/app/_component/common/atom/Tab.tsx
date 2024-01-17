import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  buttons: ReactNode[];
  sticky: boolean;
}
const Tab = ({ children, buttons, sticky }: Props) => {
  return (
    <>
      <ul
        className={`${
          sticky && "sticky top-0 z-40"
        } flex items-center justify-start bg-white overflow-x-auto`}
      >
        {buttons}
      </ul>
      {children}
    </>
  );
};

export default Tab;
