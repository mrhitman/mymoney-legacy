import { Action } from "redux";
import { Record } from "immutable";
import JwtDecode from "jwt-decode";
import { actions } from "../constants";

interface TokenData {
  id: number;
}

const localToken = localStorage.getItem("token");
const User = Record({
  id: localToken ? JwtDecode<TokenData>(localToken).id : null,
  name: "",
  email: "",
  token: localStorage.getItem("token"),
  refreshToken: localStorage.getItem("refreshToken")
});

const initialState = new User();

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case actions.USER_SIGNIN:
      const { token, refreshToken, user } = action.payload;
      localStorage.setItem("token", token);
      localStorage.setItem("refreshToken", refreshToken);
      return new User({ ...user, token, refreshToken });
    case actions.USER_SIGNOUT:
      localStorage.clear();
      return initialState;
    default:
      return state;
  }
};
