import * as jwt from 'jsonwebtoken';
import { action, computed, observable } from 'mobx';
import { Api } from './api';
import { Entities, ICategory, ICurrency, IUser, IWallet } from './types.d';
import { SignInForm } from './components/sign-in';

export class Store {
  @observable profile: IUser;
  @observable wallets: Record<number, IWallet> = {};
  @observable categories: Record<number, ICategory> = {};
  @observable currencies: Record<number, ICurrency> = {};
  @observable isFetching: boolean = false;
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
    this.load(this.fetchProfile());
  }

  @computed
  get isLoggined() {
    return !!this.profile.token;
  }

  @action.bound
  load(promiseOrValue: any) {
    this.isFetching = true;
    return Promise.resolve(promiseOrValue)
      .finally(() => {
        this.isFetching = false;
      });
  }

  @action.bound
  async login(userData: SignInForm) {
    const response = await this.api.login(userData);
    this.profile = {
      ...response.data.user,
      token: response.data.token,
      refreshToken: response.data.refresh_token
    };
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('refreshToken', response.data.refreshToken);
  }

  @action.bound
  async logout() {
    localStorage.clear();
    this.profile.token = null;
    this.profile.refreshToken = null;
  }

  @action.bound
  async fetchProfile() {
    if (!this.isLoggined) {
      return;
    }
    const response = await this.api.client.get('profile');
    this.profile = response.data;
  }

  @action.bound
  async fetchAll(type: Entities) {
    if (!this.isLoggined) {
      return;
    }
    const response = await this.api.client.get(type);
    this.wallets = response.data;
  }
}
