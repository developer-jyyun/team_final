import { create } from "zustand";
import { PackageResponseData } from "@/app/types";

interface Props {
  date: string | null;
  data: PackageResponseData | null;
  updateDate: (date: string) => void;
  updateData: (data: PackageResponseData) => void;
}

const useScheduleDateStore = create<Props>((set) => ({
  date: null,
  data: null,
  updateDate: (date) => set(() => ({ date })),
  updateData: (data) => set(() => ({ data })),
}));

export default useScheduleDateStore;
