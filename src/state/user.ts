import { create } from "zustand";

type State = {
  token: string;
  refreshToken: string;
  name: string
};

type Action = {
  setToken: (token: State["token"]) => void;
  removeToken: () => void;
  setRefreshToken: (refreshToken: State["refreshToken"]) => void;
  removeRefreshToken: () => void;
  setName: (name: State["name"]) => void;
  removeName: () => void;
};

export const useUserStore = create<State & Action>((set) => ({
  name: "",
  token: "",
  refreshToken: "",
  setName: (nameArgs:string) => set({name: nameArgs}),
  removeName: () => set({name: ""}),
  setToken: (tokenArgs: string) => set({ token: tokenArgs }),
  removeToken: () => set({ token: "" }),
  setRefreshToken: (refreshTokenArgs: string) =>
    set({ refreshToken: refreshTokenArgs }),
  removeRefreshToken: () => set({ refreshToken: "" }),
}));
