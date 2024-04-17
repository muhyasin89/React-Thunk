import { create } from 'zustand'
import computed from "zustand-computed"


const computeLogin = (state) => ({
    isLogin: state.token !== "" && state.refreshToken !== "",
  })

export const useUser = create(
    computed(
    (set, get) => ({
        token: "",
        refreshToken: "",
        isAuthenticate: false,
        updateIsAuthenticate: () => set(() => ({isAuthenticate: get().isLogin})),
        updateToken: (newToken) => set({token: newToken}),
        removeToken: () => set({token: ""}),
        updateRefreshToken: (newRefreshToken) => set({refreshToken: newRefreshToken}),
        removeRefreshToken: () => set({refreshToken: ""}) 
    }),
    computeLogin
    )
);