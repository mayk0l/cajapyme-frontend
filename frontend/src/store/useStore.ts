import { create } from 'zustand';

interface CajaState {
  saldo: number;
  ingresos: number;
  egresos: number;
  agregarIngreso: (monto: number) => void;
  agregarEgreso: (monto: number) => void;
  reset: () => void;
}

export const useCajaStore = create<CajaState>((set) => ({
  saldo: 0,
  ingresos: 0,
  egresos: 0,
  agregarIngreso: (monto) =>
    set((state) => ({
      ingresos: state.ingresos + monto,
      saldo: state.saldo + monto,
    })),
  agregarEgreso: (monto) =>
    set((state) => ({
      egresos: state.egresos + monto,
      saldo: state.saldo - monto,
    })),
  reset: () =>
    set({
      saldo: 0,
      ingresos: 0,
      egresos: 0,
    }),
}));
