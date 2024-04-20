import axios from "axios";
// import localstorage from "../utils/localstorage";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../state/user";



axios.interceptors.request.use(
  (config) => {
    console.log("axios", config);
    
    const token = useUserStore((state) => state.token);

    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    const originalRequest = error.config;
    const navigate = useNavigate();
    const {token, refreshToken, setToken, setRefreshToken} = useUserStore();

    if (
      error.response.status === 401 &&
      originalRequest.url === import.meta.env.VITE_API_URL + "/api/"
    ) {
      navigate("/login");
      return Promise.reject(error);
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      return axios
        .post("token/refresh/", {
          access: refreshToken,
        })
        .then((res) => {
          if (res.status === 201) {
            const tokenRes = res.data.token;
            const refreshTokenRes = res.data.refreshToken;

            setToken(tokenRes);
            setRefreshToken(refreshTokenRes);
            axios.defaults.headers.common["Authorization"] =
              "Bearer " + token;
            return axios(originalRequest);
          }
        });
    }
    return Promise.reject(error);
  }
);


export default axios.create({
    baseURL: import.meta.env.VITE_API_URL + "/api/"
})