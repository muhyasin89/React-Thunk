import { AxiosResponse } from "axios";
import SecureLS from "secure-ls";

const TOKEN_KEY = "at";
const REFRESH_TOKEN_KEY = "rt";
const USER_KEY = "cu";

const ls = new SecureLS({
  encodingType: "aes",
  isCompression: false,
  encryptionSecret: import.meta.env.VITE_ENCRYPTION_SECRET_LS,
});

export const getToken = () => {
  try {
    return ls.get(TOKEN_KEY);
  } catch {
    return null;
  }
};

export const getRefreshToken = () => {
  try {
    return ls.get(REFRESH_TOKEN_KEY);
  } catch {
    return null;
  }
};

export const getUser = () => {
  try {
    return ls.get(USER_KEY);
  } catch {
    return null;
  }
};

export const saveToken = (token: string | AxiosResponse| any) => {
  ls.set(TOKEN_KEY, token);
};

export const saveRefreshToken = (refreshToken: string| AxiosResponse| any) => {
  ls.set(REFRESH_TOKEN_KEY, refreshToken);
};

export const saveUser = (username: string) => {
  ls.set(USER_KEY, username);
};

export const destroyToken = () => {
  window.localStorage.removeItem(TOKEN_KEY);
};

export const destroyRefreshToken = () => {
  window.localStorage.removeItem(REFRESH_TOKEN_KEY);
};

export const destroyUser = () => {
  window.localStorage.removeItem(USER_KEY);
};

export default {
    getToken,
    saveToken,
    destroyToken,

    getRefreshToken,
    saveRefreshToken,
    destroyRefreshToken,
  
    saveUser,
    getUser,
    destroyUser,
}
