import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface Date {
  date: string | null;
  dayOfWeek: string | null;
}

export interface Payment {
  title: string | null;
  tripDay: string | null;
  departureDate: Date | null;
  endDate: Date | null;
  adult: number;
  infant: number;
  baby: number;
  totalPrice: number | null;
}

interface Props {
  paymentData: Payment;
  setPaymentData: (data: Payment) => void;
  resetPaymentData: VoidFunction;
}

export const usePaymentStore = create<Props>()(
  persist(
    (set) => ({
      paymentData: {
        title: null,
        tripDay: null,
        departureDate: null,
        endDate: null,
        adult: 1,
        infant: 0,
        baby: 0,
        totalPrice: 0,
      },
      setPaymentData: (data) => set({ paymentData: { ...data } }),
      resetPaymentData: () =>
        set({
          paymentData: {
            title: null,
            tripDay: null,
            departureDate: null,
            endDate: null,
            adult: 1,
            infant: 0,
            baby: 0,
            totalPrice: 0,
          },
        }),
    }),
    {
      name: "pp-s",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export default usePaymentStore;
