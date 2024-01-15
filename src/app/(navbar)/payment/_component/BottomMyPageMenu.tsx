import React, { ReactNode } from "react";
import Link from "next/link";

interface Props {
  href: string;
  children: ReactNode;
}

const BottomMyPageMenu = ({ href, children }: Props) => {
  return (
    <span className="mx-4">
      <Link href={href}>{children}</Link>
    </span>
  );
};

export default BottomMyPageMenu;
