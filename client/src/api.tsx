import axios, { AxiosInstance, AxiosPromise, AxiosResponse } from 'axios';
import { baseUrl } from './constants';

let client: AxiosInstance = axios.create();
let token: string;
let refreshRequest: AxiosPromise;
let refreshToken: string;

export const init = (options: any = {}) => {
  client = options.client || axios.create({ baseURL: baseUrl });
  token = options.token || localStorage.getItem('token');
  refreshToken = options.refreshToken || localStorage.getItem('refreshToken');

  client.interceptors.request.use(
    config => {
      if (!token) {
        return config;
      }

      const newConfig = {
        headers: {},
        ...config
      };
      newConfig.headers.Authorization = `Bearer ${token}`;
      return newConfig;
    },
    e => Promise.reject(e)
  );

  const ensureToken = (error: any) => {
    if (!refreshToken || error.response.status !== 401 || error.config.retry) {
      throw error;
    }
  };

  client.interceptors.response.use(
    response => response,
    async error => {
      ensureToken(error);

      if (!refreshRequest) {
        refreshRequest = client.post('refresh', {
          token: refreshToken,
          baseUrl
        });
      }
      const { data } = await refreshRequest;
      token = data.token;
      refreshToken = data.refreshToken;
      localStorage.setItem('token', data.token);
      localStorage.setItem('refreshToken', data.refreshToken);
      const newRequest = {
        ...error.config,
        retry: true
      };

      return client(newRequest, { baseURL: baseUrl });
    }
  );
};

export const login = async (personalData: any) => {
  const { data } = await client.post('login', personalData);
  token = data.token;
  refreshToken = data.refreshToken;
  return { data };
};

export const register = async (personalData: any) => {
  const { data } = await client.post('register', personalData);
  return { data };
};

export const logout = async () => {
  token = '';
  refreshToken = '';
  localStorage.clear();
  return client.post('logout');
};

export const walletGetAll = async () => {
  return client.get('/wallet');
};

export const walletCreate = async (data: any) => {
  client.post(`/wallet`, data);
};

export const walletDelete = async (id: number) => {
  client.delete(`/wallet/${id}`);
};

export const walletMakeIncome = async (id: number, amount: number) => {
  return client.post(`/wallet/income/:id`);
};

export const walletMakeOutcome = async (id: number, amount: number) => {
  return client.post(`/wallet/outcome/:id`);
};

export const currencyGetAll = async () => {
  return client.get('/currency');
};

export default client;
