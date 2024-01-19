import { create } from "zustand";

interface State {
  price: number;
  setPrice: (newPrice: number) => void;

  concepts: string[];
  setConcepts: (newConcept: string) => void;

  nations: string[];
  setNations: (newNation: string) => void;

  continents: string[];
  setContinents: (newContinent: string) => void;
}

const useSearchFilterStore = create<State>((set) => ({
  price: 200,
  setPrice: (newPrice) => set(() => ({ price: newPrice })),

  concepts: [],
  setConcepts: (newConcept) =>
    set((state) => ({ concepts: [...state.concepts, newConcept] })),

  nations: [],
  setNations: (newNation) =>
    set((state) => ({ nations: [...state.nations, newNation] })),

  continents: [],
  setContinents: (newContinent) =>
    set((state) => ({ continents: [...state.continents, newContinent] })),
}));

export default useSearchFilterStore;
