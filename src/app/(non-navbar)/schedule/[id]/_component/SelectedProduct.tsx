const SelectedProduct = () => {
  return (
    <div className="flex flex-col justify-end grow -translate-y-12 web:-translate-y-9">
      <h1 className="text-black-4 text-xs font-normal py-1 web:text-base">
        선택된 상품
      </h1>
      <div className="flex">
        <div className="w-[60px] h-[60px] mr-[14px]">
          <img src="/assets/signupComplete.png" alt="여행 상품 메인" />
        </div>
        <div className="flex flex-col justify-center">
          <div>
            <span className="text-black-2 font-medium mr-3 web:text-lg">
              2023.12.26
            </span>
            <span className="text-black-4 text-xs web:text-sm">18:28 출발</span>
          </div>
          <div className="text-pink-main text-lg font-semibold web:text-xl">
            1,718,665원 (3박 4일)
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedProduct;
