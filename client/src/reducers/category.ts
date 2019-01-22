import { Record, List } from 'immutable';
import { actions } from '../constants';

export interface CategoryProps {
  id: number;
  name: string;
  type: string;
  description: string;
  parent_id: number;
}

const Category = Record<CategoryProps>({
  id: 0,
  name: '',
  type: '',
  description: '',
  parent_id: 0
});

const initialState = List<CategoryProps>([]);

export default (state = initialState, action: any) => {
  switch (action.type) {
    case actions.CATEGORY_GET_ALL:
      return List<CategoryProps>(
        action.payload.map((category: CategoryProps) => new Category(category))
      );
    case actions.CATEGORY_CREATE:
      return state.push(new Category(action.payload));
    case actions.CATEGORY_UPDATE:
      return state.set(
        state.findIndex(category => category.id === action.payload.id),
        new Category(action.payload)
      );
    case actions.CATEGORY_DELETE:
      return state.delete(
        state.findIndex(category => category.id === action.payload)
      );
    default:
      return state;
  }
};
