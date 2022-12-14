// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { CURRENCIES_ACT, SAVE_CURR, DELETE_ACT } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
  currentId: 0,
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CURRENCIES_ACT:
    return {
      ...state,
      currencies: action.currencies,
    };
  case SAVE_CURR:
    return {
      ...state,
      expenses: [...state.expenses, action.currencies],
      currentId: state.currentId + 1,
    };
  case DELETE_ACT:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.id),
    };
  default:
    return state;
  }
};
export default walletReducer;
