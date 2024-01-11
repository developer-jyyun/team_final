import { ListItemProps } from "@/app/types";
import Link from "next/link";

const ListItem = ({
  title,
  link,
  category,
  date,
  theme = "menu",
  iconSrc = "/icons/rightArrowIcon.svg",
  onClickFn,
}: ListItemProps) => {
  const baseClass = "w-full flex p-4 rounded-[10px] bg-grey-e ";
  const menuClass =
    "flex-row justify-between items-center text-black-4 bg-opacity-40";
  const commonClass =
    "flex-col gap-2 items-between justify-center bg-opacity-20";
  const renderContent = () => {
    if (theme === "menu") {
      if (onClickFn) {
        return (
          <button
            type="button"
            onClick={onClickFn}
            className={`${baseClass} ${menuClass}`}
          >
            {title}
            <img className="mr-2 w-8" src={iconSrc} alt={`${title}으로 이동`} />
          </button>
        );
      } else if (link) {
        return (
          <Link href={link} className={`${baseClass} ${menuClass}`}>
            {title}
            <img className="mr-2 w-8" src={iconSrc} alt={`${title}으로 이동`} />
          </Link>
        );
      }
    }
    if (theme !== "menu" && link) {
      return (
        <Link href={link} className={`${baseClass} ${commonClass}`}>
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              {category?.map((item: string) => (
                <span className="py-1 px-2 text-[11px] text-black-4 border border-1 border-solid border-black-6 rounded-xl">
                  {item}
                </span>
              ))}
            </div>
            {theme === "notice" && (
              <span className="text-[10px] text-black-4">{date}</span>
            )}
          </div>
          {theme === "notice" && (
            <p className="text-black-2 font-semibold">{title}</p>
          )}
          {theme === "faq" && (
            <p className="before:content-['Q.'] before:mr-1.5 text-black-2 font-semibold">
              {title}
            </p>
          )}
        </Link>
      );
    }

    return null;
  };
  return <li>{renderContent()}</li>;
};

export default ListItem;
