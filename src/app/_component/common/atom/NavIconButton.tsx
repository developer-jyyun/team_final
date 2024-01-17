"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface Props {
  href: string;
  basic: string;
  active?: string;
  text?: string;
}

const NavIconButton = ({ href, text, basic, active }: Props) => {
  const [isHover, setIsHover] = useState(false);
  const currentUrl = usePathname();

  const handleMouseOver = () => {
    setIsHover(true);
  };

  const handleMouseOut = () => {
    setIsHover(false);
  };

  if (currentUrl === href)
    return (
      <li className="w-1/4">
        <Link href={href} className="flex flex-col justify-center items-center">
          <img src={active} alt={`${text} 아이콘`} width={24} />
          <p className="text-pink text-center">{text}</p>
        </Link>
      </li>
    );

  return (
    <li className="w-1/4">
      <Link
        href={href}
        className="flex flex-col justify-center items-center"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <img src={isHover ? active : basic} alt={`${text} 아이콘`} width={24} />
        <p className={`${isHover ? "text-pink" : "text-grey-b"} text-center`}>
          {text}
        </p>
      </Link>
    </li>
  );
};

export default NavIconButton;
