import { create } from "zustand";

export const useApp = create((set) => ({
  loading: false,
  changeLoading: () => set((state) => ({ loading: !state.loading })),
}));