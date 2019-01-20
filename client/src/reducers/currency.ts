import { actions } from '../constants';
import { List, Record } from 'immutable';

interface CurrencyProps {
  id: number;
  name: string;
  description: string;
  symbol: string;
}

const Currency = Record<CurrencyProps>({
  id: 0,
  name: '',
  description: '',
  symbol: ''
});

const initialState = List<CurrencyProps>([]);

export default (state = initialState, action: any) => {
  switch (action.type) {
    case actions.CURRENCY_GET_ALL:
      return List(
        action.payload.map((item: CurrencyProps) => new Currency(item))
      );
    default:
      return state;
  }
};
