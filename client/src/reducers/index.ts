import { combineReducers } from 'redux';
import categories from './category';
import currencies from './currency';
import user from './user';
import wallets from './wallet';

export default combineReducers({
  user,
  wallets,
  currencies,
  categories
});
