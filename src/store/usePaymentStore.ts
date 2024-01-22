import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface Date {
  date: string | null;
  dayOfWeek: string | null;
}

export interface Payment {
  availableDateId: number | null;
  packageId: number | null;
  title: string | null;
  tripDay: string | null;
  departureDate: Date | null;
  endDate: Date | null;
  adult: number;
  adultPrice: number;
  infant: number;
  infantPrice: number;
  baby: number;
  babyPrice: number;
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
        availableDateId: null,
        packageId: null,
        title: null,
        tripDay: null,
        departureDate: null,
        endDate: null,
        adult: 1,
        adultPrice: 1,
        infant: 0,
        infantPrice: 0,
        baby: 0,
        babyPrice: 0,
        totalPrice: 0,
      },
      setPaymentData: (data) => set({ paymentData: { ...data } }),
      resetPaymentData: () =>
        set({
          paymentData: {
            availableDateId: null,
            packageId: null,
            title: null,
            tripDay: null,
            departureDate: null,
            endDate: null,
            adult: 1,
            adultPrice: 1,
            infant: 0,
            infantPrice: 0,
            baby: 0,
            babyPrice: 0,
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
      skipHydration: true,
    },
  ),
);

export default usePaymentStore;
