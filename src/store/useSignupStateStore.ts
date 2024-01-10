import { create } from "zustand";

interface Props {
  isSignup: boolean;
  isCertification: boolean;
  certificated: boolean;
  setCertificated: (state: boolean) => void;
  setIsSignup: (state: boolean) => void;
  setIsCertification: (state: boolean) => void;
}

const useSignupStateStore = create<Props>((set) => ({
  isSignup: false,
  isCertification: false,
  certificated: false,
  setCertificated: (state) => set({ certificated: state }),
  setIsSignup: (state) => set({ isSignup: state }),
  setIsCertification: (state) => set({ isCertification: state }),
}));

export default useSignupStateStore;
