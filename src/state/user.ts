import { create } from 'zustand'
import computed from "zustand-computed"


const computeLogin = (state) => ({
    isLogin: state.token !== "" && state.refreshToken !== "",
  })

export const useUserStore = create(
    computed(
    (set, get) => ({
        token: "",
        refreshToken: "",
        isAuthenticate: false,
        updateIsAuthenticate: () => set(() => ({isAuthenticate: get().isLogin})),
        updateToken: (newToken: string) => set((state) => ({...state, token: newToken})),
        removeToken: () => set({token: ""}),
        updateRefreshToken: (newRefreshToken: string ) => set((state) => ({...state, refreshToken: newRefreshToken})),
        removeRefreshToken: () => set({refreshToken: ""}) 
    }),
    computeLogin
    )
);