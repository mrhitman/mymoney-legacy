import { actions } from '../constants';

export const getAll = (payload: any) => ({
  type: actions.WALLET_GET_ALL,
  payload: payload.data
});

export const create = (payload: any) => ({
  type: actions.WALLET_CREATE,
  payload: payload.data
});

export const update = (payload: any) => ({
  type: actions.WALLET_UPDATE,
  payload: payload.data
});

export const remove = (payload: any) => ({
  type: actions.WALLET_DELETE,
  payload: payload.data
});