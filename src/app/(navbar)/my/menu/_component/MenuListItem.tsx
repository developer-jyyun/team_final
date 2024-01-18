import Link from "next/link";

interface Props {
  text?: string;
  link?: string;
  theme?: string;
  iconSrc?: string;
  onClickFn?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const MenuListItem = ({
  text,
  link,
  theme = "menu",
  iconSrc = "/icons/rightArrowIcon.svg",
  onClickFn,
}: Props) => {
  const menuClass =
    "w-full flex p-4 rounded-[10px] bg-grey-e flex-row justify-between items-center text-black-4 bg-opacity-40";

  return (
    <li>
      {theme === "menu" &&
        (onClickFn ? (
          <button type="button" onClick={onClickFn} className={menuClass}>
            {text}
            <img className="mr-2 w-8" src={iconSrc} alt={`${text}으로 이동`} />
          </button>
        ) : (
          link && (
            <Link href={link} className={menuClass}>
              {text}
              <img
                className="mr-2 w-8"
                src={iconSrc}
                alt={`${text}으로 이동`}
              />
            </Link>
          )
        ))}
    </li>
  );
};

export default MenuListItem;
