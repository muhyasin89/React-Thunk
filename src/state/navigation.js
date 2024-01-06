import { create } from "zustand";
export const useNavigation = create((set) => ({
  open: false,
  handleDrawer: () => set((state) => ({ open: !state.open })),
}));
