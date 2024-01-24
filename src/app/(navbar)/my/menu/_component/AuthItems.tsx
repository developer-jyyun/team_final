"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ListItemProps } from "@/app/types";
import Dialog from "@/app/_component/common/layout/Dialog";
import logout from "@/api/my/logout";
import deleteMyAccount from "@/api/my/deleteMyAccount";
import Withdraw from "./Withdraw";
import MenuList from "./MenuList";

const AuthItems = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogOutModalOpen, setIsLogOutModalOpen] = useState(false);
  const [isWithdrawing, setIsWithdrawing] = useState(false);

  const handleLogout = async () => {
    setIsLogOutModalOpen(true);
    try {
      await logout();
      setTimeout(() => {
        setIsLogOutModalOpen(false);
        router.push("/");
      }, 1000);
    } catch (error) {
      console.error("로그아웃 중 오류 발생:", error);
      setIsLogOutModalOpen(false);
    }
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

      {isLogOutModalOpen && (
        <Dialog
          isOpen={isLogOutModalOpen}
          onClose={() => setIsLogOutModalOpen(false)}
          type="modal"
          message="로그아웃 되었습니다."
        />
      )}
    </>
  );
};

export default AuthItems;
