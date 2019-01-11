import { Action } from "redux";
import { Record } from "immutable";
import JwtDecode from "jwt-decode";

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
    default:
      return state;
  }
};
