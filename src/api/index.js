import axios from "axios";

export const http = axios.create({
  baseURL: "http://localhost:3000",
});

http.interceptors.request.use(
  function (config) {
    // Faz algo antes que a solicitação seja enviada
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
      };
    }
    return config;
  },
  function (error) {
    // Faz algo com o erro de requisição
    return Promise.reject(error);
  },
);
