import { actions } from './../constants';

export const getAll = (payload: any) => ({
  type: actions.CATEGORY_GET_ALL,
  payload: payload.data
});

export const create = (payload: any) => ({
  type: actions.CATEGORY_CREATE,
  payload: payload.data
});

export const update = (payload: any) => ({
  type: actions.CATEGORY_UPDATE,
  payload: payload.data
});

export const remove = (payload: any) => ({
  type: actions.CATEGORY_DELETE,
  payload: payload.data
});
