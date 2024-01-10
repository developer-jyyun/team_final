import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  buttons: ReactNode[];
}
const Tab = ({ children, buttons }: Props) => {
  return (
    <>
      <ul className="flex items-center justify-start overflow-x-auto">
        {buttons}
      </ul>
      {children}
    </>
  );
};

export default Tab;
