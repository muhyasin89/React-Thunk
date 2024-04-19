import axios from "axios";
import localstorage from "../utils/localstorage";
import { useNavigate } from "react-router-dom";

axios.interceptors.request.use(
  (config) => {
    console.log("axios", config);
    const token = localstorage.getToken();

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
    response => {
      return response
    },
    function (error) {
      const originalRequest = error.config
      const navigate = useNavigate()
  
      if (
        error.response.status === 401 &&
        originalRequest.url === import.meta.env.VITE_API_URL + "/api/"
      ) {
        navigate('/login')
        return Promise.reject(error)
      }
  
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true
        const refreshToken = localstorage.getRefreshToken()
        return axios
          .post('token/refresh/', {
            "access": refreshToken
          })
          .then(res => {
            if (res.status === 201) {
                const token= res.data.token;
                const refreshToken = res.data.refreshToken;
                localstorage.saveToken(token)
                localstorage.saveRefreshToken(refreshToken)
              axios.defaults.headers.common['Authorization'] =
                'Bearer ' + localstorage.getToken()
              return axios(originalRequest)
            }
          })
      }
      return Promise.reject(error)
    }
  )
  