import axios, { AxiosInstance, AxiosPromise } from 'axios';
import { baseUrl } from './constants';
import { Store } from './store';
import { SignInForm } from './components/sign-in';

export class Api {
  public readonly client: AxiosInstance;
  protected token: string | null;
  protected refreshToken: string | null;
  protected refreshRequest: AxiosPromise<any> | null = null;
  protected store: Store;

  constructor(options: any = {}) {
    this.client = options.client || axios.create({ baseURL: baseUrl });
    this.token = options.token;
    this.refreshToken = options.refreshToken;
    this.store = options.store;
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
        if (!this.refreshToken || error.response.status !== 401 || error.config.retry) {
          throw error;
        }
        try {
          const response = await this.refresh();
          this.token = response.data.token;
          this.refreshToken = response.data.refreshToken;
          const newRequest = {
            ...error.config,
            retry: true
          };
          return this.client(newRequest);
        } catch (e) {
          await this.logout();
          this.store.logout();
        }
      }
    );
  }

  login(data: SignInForm) {
    return this.client.post(`/login`, data)
      .then(
        response => {
          this.token = response.data.token;
          this.refreshToken = response.data.refreshToken;
          return response;
        }
      );
  }

  refresh() {
    return this.client.post(`/refresh`, { token: this.refreshToken });
  }

  logout() {
    this.token = null;
    this.refreshToken = null;
    return this.client.post(`/logout`);
  }
}

export default Api;
