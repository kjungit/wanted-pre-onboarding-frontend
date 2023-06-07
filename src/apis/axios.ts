import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { getAccessTokenLocalStorage } from "../utils/localStorage";

const getAxiosInstance = (accessTokenNeeded = true) => {
  const config: AxiosRequestConfig = {
    baseURL: "https://www.pre-onboarding-selection-task.shop",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  };

  const instance = axios.create(config);
  instance.defaults.timeout = 3000;
  instance.interceptors.request.use(
    (request) => {
      if (accessTokenNeeded) {
        const token = getAccessTokenLocalStorage("accessToken");
        if (token) {
          request.headers["Authorization"] = `Bearer ${token}`;
        }
      }

      return request;
    },
    (error: AxiosError) => {
      console.log(error);
      return Promise.reject(error);
    }
  );

  return instance;
};

export const axiosInstance = getAxiosInstance;
