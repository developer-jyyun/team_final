"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import getMyInfo from "@/api/my/getMyInfo";

interface Props {
  href: string;
  basic: string;
  active?: string;
  text?: string;
}

const NavIconButton = ({ href, text, basic, active }: Props) => {
  const router = useRouter();

  const [isHover, setIsHover] = useState(false);
  const currentUrl = usePathname();

  const handleAuth = async () => {
    if (href === "/heart" || href === "/my") {
      const data = await getMyInfo();

      if (data.code === 401) {
        if (href === "/heart") router.push("/signin?redirect=/heart");
        if (href === "/my") router.push("/signin?redirect=/my");
      } else if (data.email) {
        router.push(href);
      }
    } else {
      router.push(href);
    }
  };

  const handleMouseOver = () => {
    setIsHover(true);
  };

  const handleMouseOut = () => {
    setIsHover(false);
  };

  if (currentUrl === href)
    return (
      <li className="w-1/4 flex flex-col justify-center items-center">
        <button type="button" onClick={handleAuth}>
          <img src={active} alt={`${text} 아이콘`} width={24} />
          <p className="text-pink text-center">{text}</p>
        </button>
      </li>
    );

  return (
    <li className="w-1/4 flex flex-col justify-center items-center">
      <button
        type="button"
        onClick={handleAuth}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <img src={isHover ? active : basic} alt={`${text} 아이콘`} width={24} />
        <p className={`${isHover ? "text-pink" : "text-grey-b"} text-center`}>
          {text}
        </p>
      </button>
    </li>
  );
};

export default NavIconButton;
