import { useEffect } from "react";
import useScrollStore from "@/store/useScrollStore";

const useScrollUp = () => {
  const scrollStore = useScrollStore();

  useEffect(() => {
    let lastScroll = 0;
    let debounce: NodeJS.Timeout;
    const handleScroll = () => {
      if (debounce) {
        clearTimeout(debounce);
      }

      debounce = setTimeout(() => {
        const currentScroll = window.scrollY;

        scrollStore.setScroll(lastScroll > currentScroll);

        lastScroll = currentScroll;
      }, 100);
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
