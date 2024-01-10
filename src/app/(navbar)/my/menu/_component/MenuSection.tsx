import DefaultHeader from "@/app/_component/common/layout/DefaultHeader";
import React, { ReactNode } from "react";

interface Props {
  text: string;
  backUrl: string;
  children: ReactNode;
  styleClass?: string;
}
const MenuSection = ({ text, backUrl, children, styleClass }: Props) => {
  const baseClass = "w-[87.2%] mx-auto mt-8 box-border ";

  return (
    <section className="w-full">
      <DefaultHeader text={text} redirectUrl={backUrl} theme="default" />
      <article className={` ${baseClass} ${styleClass} `}>{children}</article>
    </section>
  );
};

export default MenuSection;
