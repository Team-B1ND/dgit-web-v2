import axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";
import requestInterceptor from "./requestInterceptor";
import ResponseHandler from "./responseInterceptor";
import Token from "../token/token";
import { REQUEST_TOKEN_KEY, ACCESS_TOKEN_KEY } from "@src/constants/token.constants";

// 토큰 포함 여부를 위한 커스텀 타입 확장
declare module "axios" {
  export interface AxiosRequestConfig {
    skipAuth?: boolean;
  }
}

const axiosRequestConfig: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_SERVER_URL,
};

const customAxios = axios.create(axiosRequestConfig);

// 토큰 인젝션 인터셉터
customAxios.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // skipAuth가 true면 토큰을 추가하지 않음
    if (!config.skipAuth) {
      const token = Token.getToken(ACCESS_TOKEN_KEY);
      if (token) {
        config.headers[REQUEST_TOKEN_KEY] = `Bearer ${token}`;
      }
    }
    return config;
  },
  (err) => Promise.reject(err)
);

customAxios.interceptors.request.use(requestInterceptor as any, (err) => Promise.reject(err));

customAxios.interceptors.response.use((res) => res, ResponseHandler);

export default customAxios;

export const setAccessToken = (token: string) => {
  customAxios.defaults.headers[REQUEST_TOKEN_KEY] = `Bearer ${token}`;
};
