

import { create } from "zustand";

type State = {
  token: string;
  refreshToken: string;
};

type Action = {
  setToken: (token: State['token'])  => void;
  removeToken: () => void;
  setRefreshToken: (refreshToken: State['refreshToken'])  => void;
  removeRefreshToken: () => void;
};

export const useUserStore = create<State & Action>((set) => ({
  token: "",
  refreshToken: "",
  setToken: (tokenArgs:string) => set({ token: tokenArgs }),
  removeToken: () => set({token: ""}),
  setRefreshToken: (refreshTokenArgs: string) => set({ refreshToken: refreshTokenArgs }),
  removeRefreshToken: () => set({refreshToken: ""})
}));
