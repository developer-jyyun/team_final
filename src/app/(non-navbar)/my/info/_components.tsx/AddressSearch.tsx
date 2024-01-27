"use client";

import React, { useCallback } from "react";
import Script from "next/script";
import Button from "@/app/_component/common/atom/Button";

interface Props {
  addr1: string | undefined;
  addr2: string | undefined;
  postCode: string | undefined;
  onAddressSelected: (data: daum.PostcodeData) => void;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AddressSearch = ({
  addr1,
  addr2,
  postCode,
  onAddressSelected,
  onInputChange,
}: Props) => {
  const handlePostcode = useCallback(() => {
    if (window.daum && window.daum.Postcode) {
      new window.daum.Postcode({
        oncomplete: function (postData) {
          onAddressSelected(postData);
        },
        width: "100%",
        height: "100%",
      }).open({
        left: window.screen.width / 2 - window.innerWidth / 2,
        top: window.screen.height / 2 - window.innerHeight / 2,
      });
    }
  }, [onAddressSelected]);

  return (
    <>
      <Script
        src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
        strategy="lazyOnload"
      />

      <div className="my-4 ">
        <span className="text-black-2 text-sm font-medium block mb-2">
          주소
        </span>
        <div className="flex justify-between items-center gap-2">
          <input
            className="focus:outline-none w-full h-[50px] flex items-center justify-between bg-grey-e bg-opacity-40 rounded-lg px-4 py-2 "
            type="text"
            name="postCode"
            value={postCode}
            onChange={onInputChange}
            placeholder="우편번호"
          />
          <Button
            text="우편번호 찾기"
            onClickFn={handlePostcode}
            styleClass="h-[50px] bg-black-8 text-white text-sm  px-3.5 rounded-lg whitespace-nowrap"
          />
        </div>

        <input
          className="focus:outline-none mt-[10px] h-[50px] w-full flex items-center justify-between bg-grey-e bg-opacity-40 rounded-lg px-4 py-2"
          type="text"
          name="addr1"
          value={addr1}
          onChange={onInputChange}
          placeholder="도로명주소"
        />

        <input
          className="focus:outline-none mt-[10px] h-[50px] w-full flex items-center justify-between bg-grey-e bg-opacity-40 rounded-lg px-4 py-2"
          type="text"
          name="addr2"
          value={addr2}
          onChange={onInputChange}
          placeholder="상세주소"
        />
      </div>
    </>
  );
};

export default AddressSearch;
