import currency from "./currency";
import user from "./user";
import wallet from "./wallet";
import { combineReducers } from "redux";

export default combineReducers({
  user,
  wallet,
  currencyList: currency as any
});
