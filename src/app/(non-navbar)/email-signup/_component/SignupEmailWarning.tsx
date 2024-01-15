const SignupEmailWarning = () => {
  return (
    <div className="flex w-full p-4 -mt-6">
      <div className="mr-[6px] pt-[3px] web:pt-[4px]">
        <img src="/icons/warningIcon.svg" alt="경고" className="web:w-4" />
      </div>
      <div className="text-xs text-orange font-medium w-[285px] web:text-base web:w-[360px]">
        회원 가입시 ID는 반드시 본인 소유의 연락 가능한 이메일 <br />
        주소를 사용하여야 합니다.
      </div>
    </div>
  );
};

export default SignupEmailWarning;
