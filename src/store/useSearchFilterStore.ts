import { create } from "zustand";

interface State {
  price: number;
  updatePrice: (newPrice: number) => void;

  concepts: string[];
  addConcepts: (newConcept: string) => void;
  deleteConcepts: (oldConcept: string) => void;

  nations: string[];
  addNations: (newNation: string) => void;
  deleteNations: (oldNation: string) => void;

  continents: string[];
  addContinents: (newContinent: string) => void;
  deleteContinents: (oldContinent: string) => void;
}

const useSearchFilterStore = create<State>((set) => ({
  price: 200,
  updatePrice: (newPrice) => set(() => ({ price: newPrice })),

  concepts: [],
  addConcepts: (newConcept) =>
    set((state) => ({ concepts: [...state.concepts, newConcept] })),
  deleteConcepts: (oldConcept) =>
    set((state) => ({
      concepts: state.concepts.filter((c) => c !== oldConcept),
    })),

  nations: [],
  addNations: (newNation) =>
    set((state) => ({ nations: [...state.nations, newNation] })),
  deleteNations: (oldNation) =>
    set((state) => ({
      nations: state.nations.filter((n) => n !== oldNation),
    })),

  continents: [],
  addContinents: (newContinent) =>
    set((state) => ({ continents: [...state.continents, newContinent] })),
  deleteContinents: (oldContinent) =>
    set((state) => ({
      continents: state.continents.filter((c) => c !== oldContinent),
    })),
}));

export default useSearchFilterStore;
