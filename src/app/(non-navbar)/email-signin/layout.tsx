import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Let's",
  icons: {
    icon: "/assets/mainLogo.svg",
  },
};

const EmailSigninLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      {children}
      <div id="portal" />
    </main>
  );
};

export default EmailSigninLayout;
