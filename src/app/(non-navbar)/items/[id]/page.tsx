import DefaultHeader from "@/app/_component/common/layout/DefaultHeader";
import DetailSwiper from "./_component/DetailSwiper";
import ItemDetailBottom from "./_component/ItemDetailBottom";

const ItemsPage = () => {
  return (
    <div className="w-full">
      <DefaultHeader theme="main" />
      <DetailSwiper />
      <ItemDetailBottom />
    </div>
  );
};

export default ItemsPage;
