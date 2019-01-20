import { actions } from '../constants';
import { List, Record } from 'immutable';
import { number } from 'joi';

interface WalletProps {
  id: number;
  name: string;
  amount: number;
  currency_id: number;
  add_budget: boolean;
  show_panel: boolean;
  in_balance: boolean;
}
const Wallet = Record<WalletProps>({
  id: 0,
  name: '',
  amount: 0,
  currency_id: 0,
  add_budget: false,
  show_panel: false,
  in_balance: false
});

const initialState = List<WalletProps>([]);
export default (state = initialState, action: any) => {
  switch (action.type) {
    case actions.WALLET_GET_ALL:
      return List<WalletProps>(
        action.payload.map((item: WalletProps) => new Wallet(item))
      );
    case actions.WALLET_CREATE:
      return state.push(new Wallet(action.payload));
    case actions.WALLET_UPDATE:
      return state.set(
        state.findIndex(wallet => wallet.id === action.payload.id),
        action.payload
      );
    case actions.WALLET_DELETE:
      return state.delete(
        state.findIndex(wallet => wallet.id === action.payload)
      );
    default:
      return state;
  }
};
