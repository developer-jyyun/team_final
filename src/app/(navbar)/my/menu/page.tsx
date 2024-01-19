import { ListItemProps } from "@/app/types";
import AuthItems from "./_component/AuthItems";
import InnerSection from "../_component/InnerSection";
import MenuList from "./_component/MenuList";

const MenuPage = () => {
  const myMenu: ListItemProps[] = [
    {
      text: "공지사항",
      link: "/my/menu/notice",
      theme: "menu",
    },
    {
      text: "자주 묻는 질문",
      link: "/my/menu/faq",
      theme: "menu",
    },
    {
      text: "예약내역",
      link: "/my/menu/reservation",
      theme: "menu",
    },
  ];
  const TermsMenu: ListItemProps[] = [
    {
      text: "서비스 이용약관",
      link: "/my/menu/terms",
      theme: "menu",
    },
    {
      text: "개인정보 처리방침",
      link: "/my/menu/privacy",
      theme: "menu",
    },
  ];

  return (
    <InnerSection text="메뉴" backUrl="/my">
      <ul className="flex flex-col gap-2">
        <MenuList menuItem={myMenu} />
      </ul>
      <ul className="flex flex-col gap-2 my-10">
        <MenuList menuItem={TermsMenu} />
      </ul>
      <ul className="flex flex-col gap-2">
        <AuthItems />
      </ul>
    </InnerSection>
  );
};

export default MenuPage;
