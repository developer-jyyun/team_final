import { create } from "zustand";

interface Props {
  email: string;
  name: string;
  updateEmail: (email: string) => void;
  updateName: (name: string) => void;
}

const useSignupInfoStore = create<Props>((set) => ({
  email: "",
  name: "",
  updateEmail: (email) => set(() => ({ email })),
  updateName: (name) => set(() => ({ name })),
}));

export default useSignupInfoStore;
