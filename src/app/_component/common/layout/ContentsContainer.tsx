import React from "react";

interface Props {
  title: string;
  subTitle?: string;
  children: React.ReactNode;
}

const ContentsContainer = ({ title, subTitle = "", children }: Props) => {
  return (
    <section className="px-6">
      <p className="flex items-center my-6 text-black-2 font-semibold text-lg whitespace-pre-line">
        {title}
        {subTitle && (
          <span className="inline-flex mx-1 text-[10px] px-2 py-1 leading-3 justify-center items-center rounded-[12px] border">
            {subTitle}
          </span>
        )}
      </p>
      {children}
    </section>
  );
};

export default ContentsContainer;
