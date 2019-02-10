import { Store } from './store';

export type Nullable<T> = T | null;

export type Entities = 'wallets' | 'categories' | 'currencies';
export interface InjectedProps {
  store: Store;
}
export interface IAuthData {
  token: Nullable<string>;
  refreshToken: Nullable<string>;
}
export interface IConfig {
  language: 'en' | 'ru';
  theme: any;
}
export interface IUser {
  id: number;
  name: string;
  email: string;
  token: Nullable<string>;
  refreshToken: Nullable<string>;
}
export interface IWallet {
  id: number;
  name: string;
  amount: number;
  currency_id: number;
  currency: ICurrency;
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