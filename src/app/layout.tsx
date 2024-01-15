import type { Metadata } from "next";
import MSWProvider from "./_component/common/MSWProvider";
import RQProvider from "./_component/common/RQProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Let's",
  icons: {
    icon: "/assets/mainLogo.svg",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko">
      <body>
        <MSWProvider />
        <RQProvider>{children}</RQProvider>
      </body>
    </html>
  );
};

export default RootLayout;
