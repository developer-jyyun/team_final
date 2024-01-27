import { MyInfoData } from "@/app/types";

const patchMyInfo = async (myInfo: MyInfoData) => {
  try {
    const requestBody: Partial<MyInfoData> = {};

    if (myInfo.phone) {
      requestBody.phone = myInfo.phone;
    }

    if (myInfo.addr1) {
      requestBody.addr1 = myInfo.addr1;
    }

    if (myInfo.addr2) {
      requestBody.addr2 = myInfo.addr2;
    }

    if (myInfo.postCode) {
      requestBody.postCode = myInfo.postCode;
    }

    const result = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/my/info`,
      {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      },
    );
    if (!result.ok) {
      const errorData = await result.json(); // 에러 메시지가 포함된 응답 본문을 파싱
      throw new Error(
        errorData.message || "회원정보 수정 중 오류가 발생했습니다.",
      );
    }
    const updatedData = await result.json();
    console.log("update", updatedData);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export default patchMyInfo;
