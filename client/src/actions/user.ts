import { actions } from "../constants";

interface Payload {
  data: any;
}

export const signin = (payload: Payload) => ({
  type: actions.USER_SIGNIN,
  payload: payload.data
});
export const signout = () => ({ type: actions.USER_SIGNOUT });
export const getUser = (payload: Payload) => ({
  type: actions.USER_GET,
  payload: payload.data
});
export const create = (payload: Payload) => ({
  type: actions.USER_CREATE,
  payload: payload.data
});
