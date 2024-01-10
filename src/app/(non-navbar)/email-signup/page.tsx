"use client";

import { useState } from "react";
import DefaultHeader from "../../_component/common/layout/DefaultHeader";
import EmailAuth from "./_component/EmailAuth";
import EnterName from "./_component/EnterName";
import EnterPassword from "./_component/EnterPassword";
import SignupComplete from "./_component/SignupComplete";

const EmailSignupPage = () => {
  const [step, setStep] = useState(1);

  if (step === 4) {
    return <SignupComplete />;
  }

  return (
    <section>
      <DefaultHeader
        text="회원가입 "
        subText={`(${step}/3)`}
        redirectUrl="/email-signin"
      />
      {step === 1 && <EmailAuth setStep={setStep} />}
      {step === 2 && <EnterName setStep={setStep} />}
      {step === 3 && <EnterPassword setStep={setStep} />}
    </section>
  );
};

export default EmailSignupPage;
