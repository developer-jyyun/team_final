import { ListItemProps } from "@/app/types";
import ListItem from "./ListItem";

interface Props {
  items: ListItemProps[];
}
const List = ({ items }: Props) => {
  return (
    <>
      {items.map((item) => (
        <ListItem
          key={item.title}
          title={item.title}
          link={item.link}
          onClickFn={item.onClickFn}
          category={item.category}
          date={item.date}
          theme={item.theme}
          iconSrc={item.iconSrc}
        />
      ))}
    </>
  );
};

export default List;
