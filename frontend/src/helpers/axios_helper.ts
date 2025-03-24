import { AxiosRequestConfig, AxiosResponse, Method } from "axios";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.headers.post["Content-type"] = "application/json";

export const request = <T>(
  method: Method,
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  return axios<T>({
    method,
    url,
    data,
    ...config,
  });
};
