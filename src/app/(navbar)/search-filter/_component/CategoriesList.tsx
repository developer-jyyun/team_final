import Category from "./Category";

interface Props {
  type: "nation" | "continent";
}

const dummy = {
  nation: [
    {
      name: "일본",
      imageUrl:
        "https://i.pinimg.com/736x/85/3c/48/853c480177507a21e208d5a11d99e398.jpg",
    },
    {
      name: "중국",
      imageUrl:
        "https://i.pinimg.com/736x/85/3c/48/853c480177507a21e208d5a11d99e398.jpg",
    },
    {
      name: "태국",
      imageUrl:
        "https://i.pinimg.com/736x/85/3c/48/853c480177507a21e208d5a11d99e398.jpg",
    },
    {
      name: "베트남",
      imageUrl:
        "https://i.pinimg.com/736x/85/3c/48/853c480177507a21e208d5a11d99e398.jpg",
    },
    {
      name: "미국",
      imageUrl:
        "https://i.pinimg.com/736x/85/3c/48/853c480177507a21e208d5a11d99e398.jpg",
    },
    {
      name: "대만",
      imageUrl:
        "https://i.pinimg.com/736x/85/3c/48/853c480177507a21e208d5a11d99e398.jpg",
    },
  ],
  continent: [
    {
      name: "아시아",
      imageUrl:
        "https://i.pinimg.com/564x/d1/48/bd/d148bda5524dfcae85b2a1cdac8e7308.jpg",
    },
    {
      name: "오세아니아",
      imageUrl:
        "https://i.pinimg.com/564x/d1/48/bd/d148bda5524dfcae85b2a1cdac8e7308.jpg",
    },
    {
      name: "유럽",
      imageUrl:
        "https://i.pinimg.com/564x/d1/48/bd/d148bda5524dfcae85b2a1cdac8e7308.jpg",
    },
    {
      name: "아프리카",
      imageUrl:
        "https://i.pinimg.com/564x/d1/48/bd/d148bda5524dfcae85b2a1cdac8e7308.jpg",
    },
    {
      name: "북미",
      imageUrl:
        "https://i.pinimg.com/564x/d1/48/bd/d148bda5524dfcae85b2a1cdac8e7308.jpg",
    },
    {
      name: "남미",
      imageUrl:
        "https://i.pinimg.com/564x/d1/48/bd/d148bda5524dfcae85b2a1cdac8e7308.jpg",
    },
  ],
};

const CategoriesList = ({ type }: Props) => {
  return (
    <ul className="flex flex-wrap justify-between gap-4 mb-4">
      {dummy[type].map((item) => (
        <Category data={item} />
      ))}
    </ul>
  );
};

export default CategoriesList;
