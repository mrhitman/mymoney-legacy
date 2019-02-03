import axios, { AxiosInstance, AxiosPromise } from 'axios';
import { baseUrl } from './constants';

export class Api {
  public readonly client: AxiosInstance;
  protected token: string | null;
  protected refreshToken: string | null;
  protected refreshRequest: AxiosPromise<any> | null = null;

  constructor(options: any = {}) {
    this.client = options.client || axios.create({ baseURL: baseUrl });
    this.token = options.token;
    this.refreshToken = options.refreshToken;
    this.client.interceptors.request.use(
      config => {
        if (!this.token) {
          return config;
        }

        const newConfig = {
          headers: {},
          ...config
        };

        newConfig.headers.Authorization = `Bearer ${this.token} `;
        return newConfig;
      },
      e => Promise.reject(e)
    );

    this.client.interceptors.response.use(
      response => response,
      async error => {
        if (
          !this.refreshToken ||
          error.response.status !== 401 ||
          error.config.retry
        ) {
          throw error;
        }
        const response = (await this.refresh()) as any;
        this.token = response.token;
        this.refreshToken = response.refreshToken;
        const newRequest = {
          ...error.config,
          retry: true
        };
        return this.client(newRequest);
      }
    );
  }

  login(data: any) {
    return this.client(`user/login`, { method: 'post', data }).then(
      response => {
        this.token = response.data.token;
        this.refreshToken = response.data.refreshToken;
        return response;
      }
    );
  }

  refresh() {
    return this.client(`user/refresh`, {
      method: 'post',
      data: { token: this.refreshToken }
    });
  }

  logout() {
    return this.client(`user/logout`, { method: 'post' });
  }
}

export default Api;
