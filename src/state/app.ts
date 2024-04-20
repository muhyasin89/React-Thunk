import { create } from "zustand";

type State = {
  loading: boolean
}

type Action = {
  setLoading: (loading: State['loading']) => void
}

export const useAppStore = create<State & Action>((set) => ({
  loading: false,
  setLoading: (loading:boolean) => set(() => ({ loading: !loading })),
}));