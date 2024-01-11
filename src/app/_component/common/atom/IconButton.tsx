"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  href: string;
  basic: string;
  active?: string;
  text?: string;
}

const IconButton = ({ href, text, basic, active }: Props) => {
  const currentUrl = usePathname();

  if (currentUrl === href)
    return (
      <Link href={href}>
        <img src={active} alt={`${text} 아이콘`} />
        <p className="text-pink text-center">{text}</p>
      </Link>
    );

  return (
    <Link href={href}>
      <img src={basic} alt={`${text} 아이콘`} />
      <p className="text-grey-b text-center">{text}</p>
    </Link>
  );
};

export default IconButton;
