import { addItemsToLocalStorage } from 'utils/localStorage';

const reducer = (state, action) => {
  switch (action.type) {
    case 'SETUP_CART':
      return { ...state, cart: action.payload };

    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.payload] };

    case 'CALCULATE_TOTALS':
      const { total, amount } = state.cart.reduce(
        (acc, current) => {
          acc.total += current.rentPrice;
          acc.amount++;
          return acc;
        },
        { total: 0, amount: 0 }
      );
      return { ...state, total, amount };

    case 'REMOVE_ITEM':
      const newItems = state.cart.filter((item) => item.id !== action.payload);
      addItemsToLocalStorage('cart', newItems);
      return { ...state, cart: newItems };

    default:
      break;
  }
  return state;
};

export default reducer;
