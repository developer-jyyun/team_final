import { create } from "zustand";

interface Props {
  checkItems: { id: number; checked: boolean }[];
  isRequired: boolean;
  requiredNum: number;
  setCheckItems: (length: number) => void;
  increaseRequiredNum: VoidFunction;
  decreaseRequiredNum: VoidFunction;
  resetRequiredNum: VoidFunction;
  fullRequiredNum: (num: number) => void;
  clickCheckboxTrue: (id: number) => void;
  clickCheckboxFalse: (id: number) => void;
  clickAllCheckboxTrue: VoidFunction;
  clickAllCheckboxFalse: VoidFunction;
  setIsRequired: (state: boolean) => void;
}

const useCheckStateStore = create<Props>((set) => ({
  checkItems: [],
  isRequired: false,
  requiredNum: 0,
  setCheckItems: (length) =>
    set({
      checkItems: Array.from({ length: length }, (_, index) => ({
        id: index + 1,
        checked: false,
      })),
    }),
  increaseRequiredNum: () =>
    set((state) => ({ requiredNum: state.requiredNum + 1 })),
  decreaseRequiredNum: () =>
    set((state) => ({ requiredNum: state.requiredNum - 1 })),
  resetRequiredNum: () => set({ requiredNum: 0 }),
  fullRequiredNum: (num) => set({ requiredNum: num }),
  clickCheckboxTrue: (id) =>
    set((state) => ({
      checkItems: state.checkItems.map((item) => {
        if (item.id === id) {
          return { ...item, checked: true };
        }
        return item;
      }),
    })),
  clickCheckboxFalse: (id) =>
    set((state) => ({
      checkItems: state.checkItems.map((item) => {
        if (item.id === id) {
          return { ...item, checked: false };
        }
        return item;
      }),
    })),
  clickAllCheckboxTrue: () =>
    set((state) => ({
      checkItems: state.checkItems.map((item) => ({ ...item, checked: true })),
    })),
  clickAllCheckboxFalse: () =>
    set((state) => ({
      checkItems: state.checkItems.map((item) => ({ ...item, checked: false })),
    })),
  toggleIsRequired: () => set((state) => ({ isRequired: !state.isRequired })),
  setIsRequired: (state) => set({ isRequired: state }),
}));

export default useCheckStateStore;
