import { Api } from './api';
import { action, computed, observable } from 'mobx';
import { Nullable } from './types.d';

export interface IConfig {
  language: 'en' | 'ru';
  theme: any;
}
export interface IUser {
  id: number;
  name: string;
  email: string;
  token: string;
  refreshToken: string;
}
export interface IWallet {
  id: number;
  name: string;
  amount: number;
  currency_id: number;
  add_budget: boolean;
  show_panel: boolean;
  in_balance: boolean;
}
export interface ICategory {
  id: number;
  name: string;
  type: string;
  description: string;
  parent_id: number;
}
export interface ICurrency {
  id: number;
  name: string;
  description: string;
  symbol: string;
}

export class Store {
  @observable profile: Nullable<IUser> = null;
  @observable wallets: IWallet[] = [];
  @observable categories: ICategory[] = [];
  @observable currencies: ICurrency[] = [];
  protected api: Api;

  public constructor() {
    this.api = new Api();
  }

  @computed
  get isLoggined() {
    return this.profile === null;
  }

  @action.bound
  async login(userData: any) {
    const response = await this.api.login(userData);
    this.profile = {
      ...response.data.user,
      token: response.data.token,
      refreshToken: response.data.refresh_token
    };
  }

  @action.bound
  fetchProfile() {
    this.api.client.get('profile')
      .then((response) => {
        this.profile = response.data;
      });
  }

  @action.bound
  fetchWallets() {
    this.api.client.get('wallet')
      .then(response => {
        this.wallets = response.data;
      });
  }
}
