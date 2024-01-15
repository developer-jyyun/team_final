import { ListItemProps } from "@/app/types";
import List from "./_component/List";
import AuthItems from "./_component/AuthItems";
import InnerSection from "../_component/InnerSection";

const MenuPage = () => {
  const myMenu: ListItemProps[] = [
    {
      title: "공지사항",
      link: "/my/menu/notice",
      theme: "menu",
    },
    {
      title: "자주 묻는 질문",
      link: "/my/menu/faq",
      theme: "menu",
    },
    {
      title: "예약내역",
      link: "/my/menu/reservation",
      theme: "menu",
    },
  ];
  const TermsMenu: ListItemProps[] = [
    {
      title: "서비스 이용약관",
      link: "/my/menu/terms",
      theme: "menu",
    },
    {
      title: "개인정보 처리방침",
      link: "/my/menu/privacy",
      theme: "menu",
    },
  ];

  return (
    <InnerSection text="메뉴" backUrl="/my">
      <ul className="flex flex-col gap-2">
        <List items={myMenu} />
      </ul>
      <ul className="flex flex-col gap-2 my-10">
        <List items={TermsMenu} />
      </ul>
      <ul className="flex flex-col gap-2">
        <AuthItems />
      </ul>
    </InnerSection>
  );
};

export default MenuPage;
