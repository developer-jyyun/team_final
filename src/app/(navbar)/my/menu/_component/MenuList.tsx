import { ListItemProps } from "@/app/types";
import MenuListItem from "./MenuListItem";

interface Props {
  menuItem: ListItemProps[];
}

const MenuList = ({ menuItem }: Props) => {
  return (
    <>
      {menuItem.map((menu) => (
        <MenuListItem
          key={menu.text}
          text={menu.text}
          link={menu.link}
          theme={menu.theme}
          onClickFn={menu.onClickFn}
          iconSrc={menu.iconSrc}
        />
      ))}
    </>
  );
};

export default MenuList;
