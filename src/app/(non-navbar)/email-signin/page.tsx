import { Metadata } from "next";
import DefaultHeader from "../../_component/common/layout/DefaultHeader";
import EmailSigninForm from "./_component/EmailSigninForm";

export const metadata: Metadata = {
  title: "Let's - 이메일 로그인",
};

const EmailSigninPage = () => {
  return (
    <div className="w-full">
      <DefaultHeader text="이메일로 로그인" redirectUrl="/signin" />
      <div className="flex flex-col">
        <EmailSigninForm />
      </div>
    </div>
  );
};

export default EmailSigninPage;
