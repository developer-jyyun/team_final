"use client";

import { useRouter } from "next/navigation";

const ItemsPage = () => {
  const router = useRouter();
  return (
    <div>
      <h1>요청하신 페이지가 존재하지 않습니다</h1>
      <p>다른 상품을 찾아보세요</p>
      <button
        type="button"
        onClick={() => {
          router.push("/");
        }}
      >
        홈으로 바로가기
      </button>
    </div>
  );
};

export default ItemsPage;
