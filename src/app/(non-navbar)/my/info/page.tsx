"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { TITLE_CLASS } from "@/app/constants";
import useMyInfoQuery from "@/hooks/query/useMyInfoQuery";
import Button from "@/app/_component/common/atom/Button";
import { MyInfoData } from "@/app/types";
import useUpdateMyPasswordMutation from "@/hooks/query/useUpdatePasswordMutation";
import useUpdateMyInfoMutation from "@/hooks/query/useUpdateMyInfoMutation";

import UserInfo from "@/app/(navbar)/my/_component/UserInfo";
import InnerSection from "@/app/(navbar)/my/_component/InnerSection";
import Dialog from "@/app/_component/common/layout/Dialog";
import validatePassword from "@/utils/validatePassword";
import formatPhoneNumber from "@/utils/formatPhoneNumber";
import InputWithButton from "./_components.tsx/InputWithButton";
import AddressSearch from "./_components.tsx/AddressSearch";

const UpdateMyInfoPage = () => {
  const router = useRouter();

  const { data, isLoading, isError, error } = useMyInfoQuery();
  const updateMyInfoMutation = useUpdateMyInfoMutation();
  const updateMyPasswordMutation = useUpdateMyPasswordMutation();
  const [isValueChanged, setIsValueChanged] = useState({
    password: false,
    phone: false,
    addr1: false,
    addr2: false,
    postCode: false,
  });

  const [passwordMessage, setPasswordMessage] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isPasswordChanged, setIsPasswordChanged] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [showErrorDialog, setShowErrorDialog] = useState(false);

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
    const newValue = value;
    setMyInfo({ ...myInfo, [name]: newValue });

    if (name === "phone") {
      const onlyNumbers = value.replace(/[^0-9]/g, "");
      const formattedNumber = formatPhoneNumber(onlyNumbers);
      setMyInfo({ ...myInfo, [name]: formattedNumber });

      //  취소 버튼 활성화
      const isPhoneChanged =
        !!originalData &&
        (originalData.phone
          ? formattedNumber !== originalData.phone
          : formattedNumber !== "");

      setIsValueChanged({ ...isValueChanged, phone: isPhoneChanged });
    }

    if (name === "password") {
      if (value) {
        const isValid = validatePassword(value);
        setIsPasswordValid(isValid);
        if (!isValid) {
          setPasswordMessage(
            "비밀번호는 8~20자의 영문, 숫자, 특수문자를 포함해야 합니다.",
          );
        } else {
          setPasswordMessage("변경 가능한 비밀번호 입니다");
        }
      } else {
        // 비밀번호 입력이 없는 경우 오류 메시지 초기화
        setPasswordMessage("");
      }
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
    if (name === "password" && myInfo.password === "**********") {
      setMyInfo({ ...myInfo, password: "" });
    }
  };

  const handleCancel = (field: keyof MyInfoData) => {
    if (field === "password") {
      setMyInfo({
        ...myInfo,
        password: "**********",
      });
      setPasswordMessage("비밀번호 변경하지 않음");
      setIsPasswordValid(true);
      setIsPasswordChanged(false);
      setIsValueChanged({ ...isValueChanged, [field]: false });
    } else if (originalData && originalData[field] !== undefined) {
      // 원래 값으로 복원
      setMyInfo({ ...myInfo, [field]: originalData[field] });
      setIsValueChanged({ ...isValueChanged, [field]: false });
    } else {
      setMyInfo({ ...myInfo, [field]: "" });
      setIsValueChanged({ ...isValueChanged, [field]: false });
    }
  };
  const handlePasswordBlur = () => {
    if (!isPasswordChanged) {
      setMyInfo((prevMyInfo) => ({
        ...prevMyInfo,
        password: "**********",
      }));
      setPasswordMessage("비밀번호 변경하지 않음");
    }
  };

  const handleUpdateAll = async () => {
    try {
      if (isPasswordValid) {
        if (
          isPasswordChanged &&
          myInfo.password !== "**********" &&
          typeof myInfo.password === "string"
        ) {
          await updateMyPasswordMutation.mutateAsync(myInfo.password);
          console.log("수정된 비밀번호:", myInfo.password);
        }
        await updateMyInfoMutation.mutateAsync({
          ...myInfo,
          password: undefined,
        });
        console.log("회원 정보 수정완료", myInfo);
        setShowSuccessDialog(true);
      } else {
        console.error("비밀번호가 유효하지 않습니다.");
      }
    } catch (err) {
      console.error("API 호출 오류:", err);
      setShowErrorDialog(true);
    }
  };

  const handleCloseSuccessDialog = () => {
    setShowSuccessDialog(false);
    router.push("/my");
  };

  const handleAddressSelected = (postData: daum.PostcodeData) => {
    setMyInfo((prevMyInfo) => ({
      ...prevMyInfo,
      postCode: postData.zonecode, // 우편번호
      addr1: postData.roadAddress, // 도로명 주소
    }));
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
        onBlur={handlePasswordBlur}
        buttonText="취소"
        onButtonClick={() => handleCancel("password")}
        isValueChanged={isValueChanged.password}
        placeholder="영문+숫자+특수문자 8~20자리"
      />

      {passwordMessage && (
        <p
          className={` ${
            isPasswordValid ? "text-green" : "text-red"
          } mt-[-4px] ml-2 text-xs font-medium `}
        >
          {passwordMessage}
        </p>
      )}

      <InputWithButton
        type="text"
        name="phone"
        label="휴대폰 번호"
        value={myInfo.phone || ""}
        onChange={handleInputChange}
        onFocus={handleFocus}
        maxLength={13}
        buttonText="취소"
        onButtonClick={() => handleCancel("phone")}
        isValueChanged={isValueChanged.phone}
        placeholder="숫자만 입력해 주세요"
      />

      <h2 className={`${TITLE_CLASS} mt-10`}>선택정보</h2>
      <AddressSearch
        addr1={myInfo.addr1 || ""}
        addr2={myInfo.addr2 || ""}
        postCode={myInfo.postCode || ""}
        onAddressSelected={handleAddressSelected}
        onInputChange={handleInputChange}
      />
      {/* 최하단 버튼 */}
      <Button
        text="회원정보 수정"
        onClickFn={handleUpdateAll}
        styleClass={`font-semibold rounded-xl py-3 fixed bottom-0 left-1/2 -translate-x-1/2 z-100 w-[327px] web:max-w-[436px]
        ${
          isPasswordValid
            ? "bg-pink-main text-white "
            : "bg-grey-d text-black-8"
        } `}
        disabled={!isPasswordValid}
      />
      {showSuccessDialog && (
        <Dialog
          type="alert"
          message="회원정보가 성공적으로 수정되었습니다!"
          isOpen={showSuccessDialog}
          onClose={handleCloseSuccessDialog}
        />
      )}
      {showErrorDialog && (
        <Dialog
          type="alert"
          message="회원 정보 수정에 실패했습니다."
          isOpen={showErrorDialog}
          onClose={() => setShowErrorDialog(false)}
        />
      )}
    </InnerSection>
  );
};

export default UpdateMyInfoPage;
