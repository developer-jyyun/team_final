"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ListItemProps } from "@/app/types";
import ConfirmModal from "@/app/_component/common/layout/ConfirmModal";
import List from "./List";
import Withdraw from "./Withdraw";

// TODO:: 비회원 사용자에게는 노출 X
const AuthItems = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWithdrawing, setIsWithdrawing] = useState(false);

  const handleLogout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Logout");
    router.push("/");
  };

  const confirmWithdraw = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleWithdraw = () => {
    setIsWithdrawing(true);
    setTimeout(() => {
      console.log("탈퇴😂");
      setIsWithdrawing(false);
      router.push("/");
    }, 3000);
  };
  const AuthMenu: ListItemProps[] = [
    {
      title: "로그아웃",
      theme: "menu",
      onClickFn: handleLogout,
    },
    {
      title: "회원 탈퇴",
      theme: "menu",
      onClickFn: confirmWithdraw,
    },
  ];

  return (
    <>
      {!isWithdrawing && <List items={AuthMenu} />}
      <ConfirmModal
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
