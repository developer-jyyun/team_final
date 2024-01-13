import DefaultHeader from "@/app/_component/common/layout/DefaultHeader";
import React, { ReactNode } from "react";

interface Props {
  text: string;
  backUrl: string;
  children: ReactNode;
  styleClass?: string;
  iconUrl?: string;
  iconSrc?: string;
  iconAlt?: string;
}
const InnerSection = ({
  text,
  backUrl,
  children,
  styleClass,
  iconUrl,
  iconSrc,
  iconAlt,
}: Props) => {
  const baseClass = "w-[87.201%] mx-auto mt-8 box-border ";

  return (
    <section className="w-full">
      <DefaultHeader
        text={text}
        redirectUrl={backUrl}
        theme="default"
        iconUrl={iconUrl}
        iconSrc={iconSrc}
        iconAlt={iconAlt}
      />
      <article className={` ${baseClass} ${styleClass} `}>{children}</article>
    </section>
  );
};

export default InnerSection;
