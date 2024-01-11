const SignupEmailInfo = () => {
  return (
    <div className="flex w-full rounded-lg bg-[#eee] p-4">
      <div className="mr-[6px] pt-[2px] web:pt-[5px]">
        <img src="./icons/infoIcon.svg" alt="정보" className="web:w-4" />
      </div>
      <div className="text-xs text-black-6 font-normal w-[269px] web:w-[340px] web:text-base">
        인증번호는 <span className="font-bold">입력한 이메일 주소</span>로
        발송됩니다. <br />
        수신하지 못했다면 스팸함 또는 해당 이메일 서비스 <br /> 의 설정을 확인해
        주세요.
      </div>
    </div>
  );
};

export default SignupEmailInfo;
