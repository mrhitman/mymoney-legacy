import { actions } from "../constants";
import { List, Record } from "immutable";

const Currency = Record({
  id: 0,
  name: "",
  description: "",
  symbol: ""
});

const initialState = List([]);

export default (state = initialState, action: any) => {
  switch (action.type) {
    case actions.CURRENCY_GET_ALL:
      const list = action.payload;
      console.log(list, "here");
      return List(list.map((item: any) => new Currency(item)));
    default:
      return state;
  }
};
