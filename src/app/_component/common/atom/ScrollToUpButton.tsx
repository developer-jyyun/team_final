"use client";

const ScrollToUpButton = () => {
  const handleUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      className="hidden justify-center items-center w-9 h-9 rounded-[50%] border-2 border-solid border-grey-c z-[100] 
                fixed bottom-3 right-1 bg-white web:flex"
      onClick={handleUp}
    >
      <img src="/icons/airplaneIcon.svg" alt="위로 가기" />
    </button>
  );
};
export default ScrollToUpButton;
