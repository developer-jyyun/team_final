import useScrollStore from "@/store/useScrollStore";
import { useEffect } from "react";

const useScrollUp = () => {
  const scrollStore = useScrollStore();

  useEffect(() => {
    let lastScroll = 0;
    let debounce: NodeJS.Timeout;
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (debounce) {
        clearTimeout(debounce);
      }

      debounce = setTimeout(() => {
        scrollStore.setScroll(
          Math.floor(lastScroll) >= Math.floor(currentScroll),
        );

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
