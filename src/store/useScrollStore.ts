import { create } from "zustand";

interface Props {
  isScrollUp: boolean;
  scrollUp: () => void;
  scrollDown: () => void;
  setScroll: (scroll: boolean) => void;
}

const useScrollStore = create<Props>((set) => ({
  isScrollUp: true,
  scrollUp: () => set({ isScrollUp: true }),
  scrollDown: () => set({ isScrollUp: false }),
  setScroll: (scroll: boolean) => set({ isScrollUp: scroll }),
}));

export default useScrollStore;
