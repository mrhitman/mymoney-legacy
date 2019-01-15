import { actions } from "../constants";

export const getAll = (payload: any) => ({
  type: actions.CURRENCY_GET_ALL,
  payload: payload.data
});
