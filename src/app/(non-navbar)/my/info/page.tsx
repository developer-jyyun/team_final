"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { TITLE_CLASS } from "@/app/constants";
import useMyInfoQuery from "@/hooks/query/useMyInfoQuery";
import { MyInfoData } from "@/app/types";
import useUpdateMyPasswordMutation from "@/hooks/query/useUpdatePasswordMutation";
import useUpdateMyInfoMutation from "@/hooks/query/useUpdateMyInfoMutation";

import UserInfo from "@/app/(navbar)/my/_component/UserInfo";
import InnerSection from "@/app/(navbar)/my/_component/InnerSection";
import Dialog from "@/app/_component/common/layout/Dialog";
import validatePassword from "@/utils/validatePassword";
import formatPhoneNumber from "@/utils/formatPhoneNumber";
import SmallSpinner from "@/app/_component/common/layout/SmallSpinner";
import InputWithButton from "./_components.tsx/InputWithButton";
import AddressSearch from "./_components.tsx/AddressSearch";

const UpdateMyInfoPage = () => {
  const router = useRouter();

  const { data, isLoading, isError, error } = useMyInfoQuery();
  const { updateMyInfoMutation, serverError } = useUpdateMyInfoMutation();
  const updateMyPasswordMutation = useUpdateMyPasswordMutation();
  const [isValueChanged, setIsValueChanged] = useState({
    password: false,
    phone: false,
    addr1: false,
    addr2: false,
    postCode: false,
  });

  const [, setPhoneValidationTriggered] = useState(false);

  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);
  const [phoneErrorMessage, setPhoneErrorMessage] = useState("");

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

  const [myInfo, setMyInfo] = useState<MyInfoData>(initialMyInfo);
  const [originalData, setOriginalData] = useState<MyInfoData | null>(null);

  useEffect(() => {
    if (!isLoading && !isError && data) {
      setOriginalData({
        ...data,
      });
      setMyInfo({
        ...data,
        password: "**********",
      });
    }
  }, [isLoading, isError, data]);

  useEffect(() => {}, [myInfo]);
  useEffect(() => {
    if (serverError) {
      setShowErrorDialog(true);
    }
  }, [serverError]);
  const isFieldChanged = (fieldName: keyof MyInfoData) => {
    // 이전 데이터가 존재하고 해당 필드가 변경되었는지 확인
    if (originalData && fieldName in originalData) {
      return myInfo[fieldName] !== originalData[fieldName];
    }
    // 이전 데이터가 없는 경우, 값이 비어있지 않은지 확인
    return !!myInfo[fieldName];
  };

  const handleFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const newValue = value.startsWith("010-") ? value : "010-";
      setMyInfo((prevMyInfo) => ({ ...prevMyInfo, [name]: newValue }));
    }
    if (name === "password" && myInfo.password === "**********") {
      setMyInfo((prevMyInfo) => ({ ...prevMyInfo, password: "" }));
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
      setMyInfo((prevMyInfo) => ({
        ...prevMyInfo,
        [field]: originalData[field],
      }));
      setIsValueChanged({ ...isValueChanged, [field]: false });
    } else {
      setMyInfo((prevMyInfo) => ({ ...prevMyInfo, [field]: "" }));
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

  const handlePhoneBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const onlyNumbers = value.replace(/[^0-9]/g, "");
    const formattedNumber = formatPhoneNumber(onlyNumbers);
    const isValid = /^010-\d{4}-\d{4}$/.test(formattedNumber);

    setPhoneValidationTriggered(true);
    setIsPhoneNumberValid(isValid);

    if (isValid) {
      setMyInfo((prevState) => ({ ...prevState, phone: formattedNumber }));
      setPhoneErrorMessage("");
    } else {
      setPhoneErrorMessage(
        "휴대폰 번호는 '010-0000-0000' 형식으로 입력해주세요.",
      );
    }
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newValue = value;
    setMyInfo((prevMyInfo) => ({ ...prevMyInfo, [name]: newValue }));

    if (name === "phone") {
      setPhoneValidationTriggered(false);

      // 취소 버튼 활성화
      setIsValueChanged({
        ...isValueChanged,
        phone: isFieldChanged("phone"),
      });
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
        setPasswordMessage("");
      }
      setIsPasswordChanged(isFieldChanged("password"));
      setIsValueChanged({
        ...isValueChanged,
        password: isFieldChanged("password"),
      });
    }

    if (name !== "phone" && name !== "password") {
      setIsValueChanged({
        ...isValueChanged,
        [name]: isFieldChanged(name),
      });
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
      postCode: postData.zonecode,
      addr1: postData.roadAddress,
    }));
  };

  if (isLoading) return <SmallSpinner />;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <InnerSection text="회원정보 수정" backUrl="/my">
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
        onBlur={handlePhoneBlur}
        maxLength={13}
        buttonText="취소"
        onButtonClick={() => handleCancel("phone")}
        isValueChanged={isValueChanged.phone}
        placeholder="숫자만 입력해 주세요"
      />
      {phoneErrorMessage && (
        <p className="text-red mt-1 ml-2 text-xs font-medium">
          {phoneErrorMessage}
        </p>
      )}
      <h2 className={`${TITLE_CLASS} mt-10`}>선택정보</h2>
      <AddressSearch
        addr1={myInfo.addr1 || ""}
        addr2={myInfo.addr2 || ""}
        postCode={myInfo.postCode || ""}
        onAddressSelected={handleAddressSelected}
        onInputChange={handleInputChange}
      />

      <div
        className="fixed bottom-0 left-1/2 -translate-x-1/2 py-4 z-100 

      "
      >
        <button
          type="button"
          onClick={handleUpdateAll}
          className={`font-semibold rounded-xl py-3  w-[327px] web:max-w-[436px]
          ${
            isPasswordValid && isPhoneNumberValid
              ? "bg-pink-main text-white"
              : "bg-grey-d text-black-8"
          } `}
          disabled={!isPasswordValid || !isPhoneNumberValid}
        >
          회원정보 수정
        </button>
      </div>

      {showSuccessDialog && (
        <Dialog
          type="alert"
          message="회원정보가 성공적으로 수정되었습니다!"
          isOpen={showSuccessDialog}
          onClose={handleCloseSuccessDialog}
        />
      )}
      {showErrorDialog && serverError.main && (
        <Dialog
          type="alert"
          isOpen={showErrorDialog}
          onClose={() => setShowErrorDialog(false)}
          brMessage={
            serverError.additional && (
              <>
                {serverError.additional}
                <br />
                올바른 정보를 입력해주세요!
              </>
            )
          }
        />
      )}
    </InnerSection>
  );
};

export default UpdateMyInfoPage;
