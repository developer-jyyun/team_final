import BottomNav from "../_component/common/layout/BottomNav";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main>{children}</main>
      <BottomNav />
    </>
  );
};

export default Layout;
