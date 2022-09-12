import axios, { AxiosResponse } from "axios";

type Data = { [key: string]: string | number | boolean | object };

const rest = (() => {
  const client = axios.create({
    baseURL: '', // 今回は未指定 (通常は env などから参照させる)
    timeout: 15000,
  });
  return {
    client,
    get: <T = any, R = AxiosResponse<T>>(url: string): Promise<R> => {
      return client.get(url);
    },
    post: <T = any, R = AxiosResponse<T>>(url: string, data: Data): Promise<R> => {
      return client.post(url, data);
    }
  }
})();

export { rest };
