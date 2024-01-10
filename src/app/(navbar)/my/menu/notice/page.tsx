import React from "react";
import { ListItemProps } from "@/app/types";
import List from "../_component/List";
import MenuSection from "../_component/MenuSection";

const NoticePage = () => {
  const noticeMenu: ListItemProps[] = [
    {
      title: "2024년 01월 유류 할증료 안내",
      link: "/my/menu/notice",
      theme: "notice",
      category: ["항공권 소식", "해외항공"],
      date: "2023.12.12",
    },
    {
      title: "2024년 01월 유류 할증료 안내2",
      link: "/my/menu/privacy-policy",
      theme: "notice",
      category: ["항공권 소식", "해외항공"],
      date: "2023.12.12",
    },
  ];
  return (
    <MenuSection text="공지사항" backUrl="/my/menu">
      <ul className="flex flex-col gap-3">
        <List items={noticeMenu} />
      </ul>
    </MenuSection>
  );
};

export default NoticePage;
