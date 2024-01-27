const Layout = ({
  children,
  item = "hi",
}: {
  children: React.ReactNode;
  item?: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col">
      <div>{children}</div>
      <div>{item}</div>
    </div>
  );
};

export default Layout;
