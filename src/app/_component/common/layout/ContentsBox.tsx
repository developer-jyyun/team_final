import React from "react";

interface Props {
  title: string;
  children: React.ReactNode;
}

const ContentsBox = ({ title, children }: Props) => {
  return (
    <section className="px-6">
      <p className="my-6 text-black-2 font-semibold text-lg whitespace-pre-line">
        {title}
      </p>
      {children}
    </section>
  );
};

export default ContentsBox;
