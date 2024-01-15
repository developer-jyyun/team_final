import { useEffect } from "react";
import useScrollStore from "@/store/useScrollStore";

const useScrollUp = () => {
  const scrollStore = useScrollStore();

  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      scrollStore.setScroll(lastScroll > currentScroll);

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return scrollStore.isScrollUp;
};

export default useScrollUp;
