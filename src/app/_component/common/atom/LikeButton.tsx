"use client";

import useDeleteWishMutation from "@/hooks/query/useDeleteWishMutation";
import useIsWishMutation from "@/hooks/query/useIsWishMutation";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Dialog from "../layout/Dialog";

interface Props {
  id: number;
  isWish: boolean;
  styleClass?: string;
  signinRedirect?: string;
}

const LikeButton = ({ id, isWish, styleClass, signinRedirect }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const { mutateAsync: postWish } = useIsWishMutation({ packageId: id });
  const { mutateAsync: deleteWish } = useDeleteWishMutation({ packageId: id });

  const [isLike, setIsLike] = useState(isWish);

  const [isLogin, setIsLogin] = useState(false);
  const [alert, setAlert] = useState(false);

  const handleClick = () => {
    if (isLike) {
      deleteWish().then((res) => {
        if (res.code === 200) {
          setIsLike(false);
        } else if (res.code === 401) {
          setIsLogin(true);
        } else {
          setAlert(true);
        }
      });
    } else if (!isLike) {
      postWish().then((res) => {
        if (res.code === 200) {
          setIsLike(true);
        } else if (res.code === 401) {
          setIsLogin(true);
        } else {
          setAlert(true);
        }
      });
    }
  };

  return (
    <div>
      <Dialog
        isOpen={isLogin}
        type="confirm"
        theme="login"
        onClose={() => {
          setIsLogin(false);
        }}
        onConfirm={() => {
          router.push(`/signin?redirect=${signinRedirect || pathname}`);
        }}
      />
      <Dialog
        isOpen={alert}
        type="alert"
        message="존재하지 않는 패키지입니다."
        onClose={() => {
          setAlert(false);
          router.push(`/`);
        }}
      />
      <button
        type="button"
        className={`${
          styleClass || "w-6 m-3 rounded-full absolute top-0 right-0"
        }`}
        onClick={handleClick}
      >
        <img
          className="w-full"
          src={
            isLike
              ? "/icons/likeActiveButtonIcon.svg"
              : "/icons/likeButtonIcon.svg"
          }
          alt="찜 버튼"
        />
      </button>
    </div>
  );
};

export default LikeButton;
