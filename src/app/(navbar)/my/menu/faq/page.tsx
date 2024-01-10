import React from "react";
import { ListItemProps } from "@/app/types";
import List from "../_component/List";
import MenuSection from "../_component/MenuSection";

const FaqPage = () => {
  const faqMenu: ListItemProps[] = [
    {
      title: "자동 로그인 해제 방법을 알려주세요.",
      link: "/my/menu/notice",
      theme: "faq",
      category: ["자동 로그인", "기타 서비스"],
    },
    {
      title: "자주 묻는 질문 2",
      link: "/my/menu/privacy-policy",
      theme: "faq",
      category: ["자동 로그인", "기타 서비스"],
    },
  ];
  return (
    <MenuSection text="자주 묻는 질문" backUrl="/my/menu">
      <ul className="flex flex-col gap-3">
        <List items={faqMenu} />
      </ul>
    </MenuSection>
  );
};

export default FaqPage;
