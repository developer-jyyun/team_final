import { create } from "zustand";

interface State {
  price: number;
  setPrice: (newPrice: number) => void;
}

const useSearchFilterStore = create<State>((set) => ({
  price: 200,
  setPrice: (newPrice) => set(() => ({ price: newPrice })),
}));

export default useSearchFilterStore;
