import React from "react";
import MyPicProduct from "./MyPicProduct";

const WishListInfo = () => {
  return (
    <div>
      <div className="my-7">
        <h3 className="text-black-2 text-lg font-semibold">
          총 <b className="text-pink-main">N</b>개의 패키지 상품
        </h3>
      </div>

      <MyPicProduct />
      <MyPicProduct />
      <MyPicProduct />
      <MyPicProduct />
      <MyPicProduct />
    </div>
  );
};
export default WishListInfo;
