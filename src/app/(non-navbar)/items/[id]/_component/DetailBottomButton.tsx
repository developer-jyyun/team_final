import Button from "@/app/_component/common/atom/Button";

const DetailBottomButton = () => {
  return (
    <nav
      className={`flex justify-between items-center w-full h-20 px-6 py-5 web:h-24`}
    >
      <Button
        text="asd"
        theme="wide"
        styleClass="h-[40px] w-[151px] web:h-[50px] web:w-[215px]"
      />
      <Button
        text="asd"
        theme="wide"
        styleClass="h-[40px] w-[151px] web:h-[50px] web:w-[215px]"
      />
    </nav>
  );
};

export default DetailBottomButton;
