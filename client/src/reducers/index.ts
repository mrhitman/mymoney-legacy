import { combineReducers } from 'redux';
import category from './category';
import currency from './currency';
import user from './user';
import wallet from './wallet';

export default combineReducers({
  user,
  wallet,
  currency_list: currency,
  category
});
