import Button from "@/app/_component/common/atom/Button";
import DefaultHeader from "@/app/_component/common/layout/DefaultHeader";
import Calender from "./_component/Calender";
import SelectedProduct from "./_component/SelectedProduct";

const SchedulePage = () => {
  return (
    <section>
      <DefaultHeader text="여행 일정" />
      <div className="flex flex-col h-full px-7 web:px-8">
        <Calender />
        <SelectedProduct />
        <Button
          text="선택 완료"
          theme="wide"
          styleClass="-translate-y-3 web:-translate-y-3"
        />
      </div>
    </section>
  );
};

export default SchedulePage;
