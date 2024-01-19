import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

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
  increaseAdult: VoidFunction;
  decreaseAdult: VoidFunction;
  increaseInfant: VoidFunction;
  decreaseInfant: VoidFunction;
  increaseBaby: VoidFunction;
  decreaseBaby: VoidFunction;
}

const usePaymentStore = create<Props>()(
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
      increaseAdult: () =>
        set((state) => ({
          paymentData: {
            ...state.paymentData,
            adult: state.paymentData.adult + 1,
          },
        })),
      decreaseAdult: () =>
        set((state) => ({
          paymentData: {
            ...state.paymentData,
            adult: state.paymentData.adult - 1,
          },
        })),
      increaseInfant: () =>
        set((state) => ({
          paymentData: {
            ...state.paymentData,
            infant: state.paymentData.infant + 1,
          },
        })),
      decreaseInfant: () =>
        set((state) => ({
          paymentData: {
            ...state.paymentData,
            infant: state.paymentData.infant - 1,
          },
        })),
      increaseBaby: () =>
        set((state) => ({
          paymentData: {
            ...state.paymentData,
            baby: state.paymentData.baby + 1,
          },
        })),
      decreaseBaby: () =>
        set((state) => ({
          paymentData: {
            ...state.paymentData,
            baby: state.paymentData.baby - 1,
          },
        })),
    }),
    {
      name: "pp-s",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export default usePaymentStore;
