"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ListItemProps } from "@/app/types";
import Dialog from "@/app/_component/common/layout/Dialog";
import logout from "@/api/my/logout";
import deleteMyAccount from "@/api/my/deleteMyAccount";
import Withdraw from "./Withdraw";
import MenuList from "./MenuList";

// TODO:: 비회원 사용자에게는 노출 X
const AuthItems = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWithdrawing, setIsWithdrawing] = useState(false);

  const handleLogout = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await logout();
      router.push("/");
    } catch (error) {
      console.error("로그아웃 중 오류 발생:", error);
    }
    router.push("/");
  };

  const confirmWithdraw = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleWithdraw = async () => {
    setIsWithdrawing(true);
    try {
      await deleteMyAccount();
      console.log("탈퇴 성공😂");
      setTimeout(() => {
        setIsWithdrawing(false);
        router.push("/");
      }, 3000);
    } catch (error) {
      console.error("회원 탈퇴 중 오류 발생:", error);
      setIsWithdrawing(false);
    }
  };
  const AuthMenu: ListItemProps[] = [
    {
      text: "로그아웃",
      theme: "menu",
      onClickFn: handleLogout,
    },
    {
      text: "회원 탈퇴",
      theme: "menu",
      onClickFn: confirmWithdraw,
    },
  ];

  return (
    <>
      {!isWithdrawing && <MenuList menuItem={AuthMenu} />}
      <Dialog
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={() => {
          setIsModalOpen(false);
          handleWithdraw();
        }}
        theme="withdraw"
        type="confirm"
      />
      {isWithdrawing && <Withdraw />}
    </>
  );
};

export default AuthItems;
