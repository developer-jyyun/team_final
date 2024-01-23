"use client";

import React, { useEffect, useState } from "react";
import { TITLE_CLASS } from "@/app/constants";
import useMyInfoQuery from "@/hooks/query/useMyInfoQuery";
import Button from "@/app/_component/common/atom/Button";
import { MyInfoData } from "@/app/types";
import useUpdateMyPasswordMutation from "@/hooks/query/useUpdatePasswordMutation";
import useUpdateMyInfoMutation from "@/hooks/query/useUpdateMyInfoMutation";

import UserInfo from "@/app/(navbar)/my/_component/UserInfo";
import InnerSection from "@/app/(navbar)/my/_component/InnerSection";
import formatPhoneNumber from "@/utils/formatPhoneNumber";
import InputWithButton from "./_components.tsx/InputWithButton";

const UpdateMyInfoPage = () => {
  const { data, isLoading, isError, error } = useMyInfoQuery();
  const updateMyInfoMutation = useUpdateMyInfoMutation();
  const updateMyPasswordMutation = useUpdateMyPasswordMutation();
  const [isValueChanged, setIsValueChanged] = useState({
    password: false,
    phone: false,
    // TODO: 주소 추가해야 함
  });
  const [isPasswordChanged, setIsPasswordChanged] = useState(false);

  // 데이터 로딩 전 빈 객체로 초기화
  const initialMyInfo = {
    password: "",
    phone: "",
    addr1: "",
    addr2: "",
    postCode: "",
  };

  // 유저 정보 실시간 변경
  const [myInfo, setMyInfo] = useState<MyInfoData>(initialMyInfo);
  // 취소시 원복 할 데이터
  const [originalData, setOriginalData] = useState<MyInfoData | null>(null);

  useEffect(() => {
    if (!isLoading && !isError && data) {
      setOriginalData({
        ...data,
      });
      setMyInfo({
        ...data,
        password: "**********", // UI: 마스크된 비밀번호 표시
      });
    }
  }, [isLoading, isError, data]);

  useEffect(() => {
    console.log("업데이트된 myInfo:", myInfo);
  }, [myInfo]);
  console.log("originalData:", originalData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let newValue = value;
    if (name === "phone") {
      newValue = formatPhoneNumber(value);
    }
    setMyInfo({ ...myInfo, [name]: newValue });

    if (name === "password") {
      setIsPasswordChanged(value !== initialMyInfo.password);
      setIsValueChanged({ ...isValueChanged, password: true });
    } else if (originalData && name in originalData) {
      setIsValueChanged({
        ...isValueChanged,
        [name]: value !== originalData[name],
      });
    }
  };
  const handleFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const newValue = value.startsWith("010-") ? value : "010-";
      setMyInfo({ ...myInfo, [name]: newValue });
    }
    if (name === "password") {
      setMyInfo({ ...myInfo, password: "" });
    }
  };

  const handleCancel = (field: keyof MyInfoData) => {
    if (originalData && originalData[field] !== undefined) {
      setMyInfo({ ...myInfo, [field]: originalData[field] });
      setIsValueChanged({ ...isValueChanged, [field]: false });
    } else {
      setMyInfo({ ...myInfo, [field]: "" });
      setIsValueChanged({ ...isValueChanged, [field]: false });
    }
  };

  const handleUpdateAll = async () => {
    try {
      if (isPasswordChanged && myInfo.password) {
        await updateMyPasswordMutation.mutateAsync(myInfo.password);
        console.log("수정된 비밀번호:", myInfo.password);
      }
      await updateMyInfoMutation.mutateAsync({
        ...myInfo,
        password: undefined,
      });
      console.log("회원 정보 수정완료", myInfo);
    } catch (err) {
      console.error("API 호출 오류:", err);
    }
  };

  console.log("초기 데이터:", initialMyInfo);
  console.log("myInfo:", myInfo);
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <InnerSection
      text="회원정보 수정"
      backUrl="/my"
      iconSrc="/icons/dotMenuIcon.svg"
    >
      <h2 className={TITLE_CLASS}>기본정보</h2>
      <UserInfo showEditIcon={false} />

      <InputWithButton
        type="password"
        name="password"
        label="비밀번호"
        value={myInfo.password || ""}
        onChange={handleInputChange}
        onFocus={handleFocus}
        buttonText="취소"
        onButtonClick={() => handleCancel("password")}
        isValueChanged={isValueChanged.password}
      />
      <InputWithButton
        type="phone"
        name="phone"
        label="휴대폰 번호"
        value={myInfo.phone || ""}
        onChange={handleInputChange}
        onFocus={handleFocus}
        buttonText="취소"
        onButtonClick={() => handleCancel("phone")}
        isValueChanged={isValueChanged.phone}
      />

      <h2 className={`${TITLE_CLASS} mt-10`}>선택정보</h2>
      {/* 주소 */}

      {/* 최하단 버튼 */}
      <Button
        text="회원정보 수정"
        // theme="wide"
        onClickFn={handleUpdateAll}
        styleClass="bg-pink-main text-white font-semibold rounded-xl py-3 fixed bottom-0 left-1/2 -translate-x-1/2 z-100 w-[327px] web:max-w-[436px]"
      />
    </InnerSection>
  );
};

export default UpdateMyInfoPage;
