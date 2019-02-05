import * as jwt from 'jsonwebtoken';
import { action, computed, observable } from 'mobx';
import { Api } from './api';
import { Entities, ICategory, ICurrency, IUser, IWallet } from './types.d';

export class Store {
  @observable profile: IUser;
  @observable wallets: Record<number, IWallet> = {};
  @observable categories: Record<number, ICategory> = {};
  @observable currencies: Record<number, ICurrency> = {};
  protected api: Api;

  public constructor() {
    const token = localStorage.getItem('token');
    const id = !!token ? (jwt.decode(token) as { id: number }).id : 0;
    this.profile = {
      id: id,
      token,
      refreshToken: localStorage.getItem('refreshToken'),
      name: '',
      email: ''
    };
    this.api = new Api({
      token: this.profile.token,
      refreshToken: this.profile.refreshToken,
      store: this
    });
  }

  @computed
  get isLoggined() {
    return this.profile.token === null;
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
  async fetchProfile() {
    const response = await this.api.client.get('profile');
    this.profile = response.data;
  }

  @action.bound
  async fetchAll(type: Entities) {
    const response = await this.api.client.get(type);
    this.wallets = response.data;
  }
}
